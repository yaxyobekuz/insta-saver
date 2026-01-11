// Helpers
const {
  trackVideoFailure,
  trackVideoSuccess,
} = require("../helpers/stats.helpers");

// Models
const Video = require("../models/Video");

/**
    @param {TelegramBot} bot - The Telegram bot instance
    @param {number} chatId - The chat ID to send the video to
    @param {object} videoUrl - An object containing original and custom video URLs
    @param {function} t - Translation function for localized messages
*/
const sendInstagramVideo = async (bot, chatId, videoUrl, t, msgId) => {
  try {
    let sentMessage;

    // Check if video is already cached
    const cachedVideo = await Video.findOne({ url: videoUrl.original });

    if (cachedVideo) {
      // Send video using cached file_id (faster)
      sentMessage = await bot.sendVideo(chatId, cachedVideo.fileId, {
        parse_mode: "Markdown",
        caption: t.videoCaption(videoUrl.original),
        reply_markup: {
          inline_keyboard: [
            [{ text: t.videoLinkButton, url: videoUrl.original }],
          ],
        },
      });

      // Increment download count
      await Video.updateOne(
        { _id: cachedVideo._id },
        { $inc: { downloadCount: 1 } }
      );
    } else {
      // Send video from URL (first time download)
      sentMessage = await bot.sendVideo(chatId, videoUrl.custom, {
        parse_mode: "Markdown",
        caption: t.videoCaption(videoUrl.original),
        reply_markup: {
          inline_keyboard: [
            [{ text: t.videoLinkButton, url: videoUrl.original }],
          ],
        },
      });

      // Save video file_id to database for future use
      const fileId = sentMessage.video.file_id;
      await Video.create({
        fileId: fileId,
        downloadCount: 1,
        url: videoUrl.original,
      });
    }

    // Video successfully downloaded, update stats
    await trackVideoSuccess(chatId);
  } catch {
    // If video sending fails
    bot.sendMessage(chatId, t.downloadFailed, {
      reply_markup: {
        inline_keyboard: [
          [{ text: t.videoLinkButton, url: videoUrl.original }],
        ],
      },
    });

    // Video failed to download, update stats
    await trackVideoFailure(chatId);
  } finally {
    // Finally, delete the user's message
    bot.deleteMessage(chatId, msgId);
  }
};

module.exports = { sendInstagramVideo };
