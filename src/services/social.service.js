// Axios
const axios = require("axios");

// Models
const Post = require("../models/Post");

// Helpers
const {
  trackVideoFailure,
  trackVideoSuccess,
} = require("../helpers/stats.helpers");

// Bot config
const bot = require("../config/bot.config");

// Social Downloader API config
const SDKey = process.env.SOCIAL_DOWN_KEY;
const SDHost = process.env.SOCIAL_DOWN_HOST;
const SDApiUrl = process.env.SOCIAL_DOWN_API_URL;

// Services
const { downloadMedia } = require("./download.service");

/**
  @param {number} chatId - The chat ID to send the video to
  @param {object} url - The URL of the video to download
  @param {object} t - Translations object
  @param {number} msgId - The message ID to delete after processing
*/
const sendPost = async (chatId, url, t, msgId, retryMode = false) => {
  // Delete the user's link message
  bot.deleteMessage(chatId, msgId);
  let loadingMsgId = null;

  try {
    // Check if post already exists in the database
    const post = retryMode ? null : await Post.findOne({ url });
    if (post) {
      await sendMedias(chatId, t, post);

      // Increment download count
      await Post.updateOne({ url }, { $inc: { downloadCount: 1 } });

      // Video successfully downloaded, update stats
      return await trackVideoSuccess(chatId);
    }

    // Send loading message
    bot.sendMessage(chatId, t.loading).then((sentMsg) => {
      loadingMsgId = sentMsg.message_id;
    });

    // Fetch post data from Social Downloader API
    const response = await axios.post(
      SDApiUrl,
      { url: url },
      { headers: { "x-rapidapi-key": SDKey, "x-rapidapi-host": SDHost } }
    );

    // Send medias to user
    const sendedMedias = await sendMedias(chatId, t, response.data, retryMode);

    // Save post to database
    await Post.create({ ...response.data, medias: sendedMedias });

    // Video successfully downloaded, update stats
    await trackVideoSuccess(chatId);
  } catch (err) {
    // If video sending fails
    bot.sendMessage(chatId, t.downloadFailed, {
      reply_markup: {
        inline_keyboard: [
          retryMode
            ? []
            : [{ text: t.retryButton, callback_data: `retry:${url}` }],
          [{ text: t.postUrlButton, url }],
        ],
      },
    });

    console.error("=".repeat(80));
    if (err.response?.body || err.response?.data) {
      console.error(
        "Send post error: ",
        err.response?.body || err.response?.data
      );
    } else {
      console.error("Send post error msg: ", err);
    }
    console.error("Post URL: ", url);
    console.error("=".repeat(80));

    // Video failed to download, update stats
    await trackVideoFailure(chatId);
  } finally {
    // Delete loading message
    if (loadingMsgId) bot.deleteMessage(chatId, loadingMsgId);
  }
};

/**
  @param {number} chatId - The chat ID to send the medias to
  @param {object} t - Translations object
  @param {object} post - The post object containing medias
*/
const sendMedias = async (chatId, t, post, retryMode = false) => {
  const medias = post.medias;
  if (!medias?.length) return;

  // Youtube
  if (post.source === "youtubeeeeee") {
    const video = selectYoutubeVideo(medias);
    if (video) {
      const sendedMedia = await sendMedia(chatId, t, video, post, retryMode);
      return [{ ...video, fileId: sendedMedia.file_id }];
    }
  }

  // Other platforms
  let sendedMedias = [];
  for (let index = 0; index < medias.length; index++) {
    const media = medias[index];
    if (!["video", "image"].includes(media.type)) continue;
    const sendedMedia = await sendMedia(chatId, t, media, post, retryMode);
    sendedMedias.push({ ...media, fileId: sendedMedia.file_id });
  }

  return sendedMedias;
};

/**
  @param {number} chatId The chat ID to send the video to
  @param {object} t Translations object
  @param {object} media The media object containing type and URL
  @param {object} post The post object containing medias
  @returns {object} The sent media object
*/
const sendMedia = async (chatId, t, media, post, retryMode = false) => {
  const fileUrl = retryMode
    ? await downloadMedia(media.url)
    : media.fileId || media.url;

  // Video
  if (media.type === "video") {
    const sendedMedia = await bot.sendVideo(chatId, fileUrl, {
      parse_mode: "Markdown",
      caption: t.postCaption(post.title),
      reply_markup: {
        inline_keyboard: [[{ text: t.postUrlButton, url: post.url }]],
      },
    });

    return sendedMedia.video;
  }

  // Image
  if (media.type === "image") {
    const sendedMedia = await bot.sendPhoto(chatId, fileUrl, {
      parse_mode: "Markdown",
      caption: t.postCaption(post.title),
      reply_markup: {
        inline_keyboard: [[{ text: t.postUrlButton, url: post.url }]],
      },
    });

    return sendedMedia.photo[sendedMedia.photo.length - 1];
  }
};

module.exports = { sendPost };
