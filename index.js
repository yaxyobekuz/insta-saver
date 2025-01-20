const { default: axios } = require("axios");
const TelegramBot = require("node-telegram-bot-api");

const token = "7886502494:AAHIjFPm72LboPyYfyhxjM8vqUlQTfwaRo4";
const bot = new TelegramBot(token, { polling: true });

const apiHost =
  "instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com";
const apiKey = "acc7857676mshbd8425975d636ffp13016bjsn7a85e75c4cac";

const createApiUrl = (videoUrl) => {
  return `https://${apiHost}/get-info-rapidapi?url=${encodeURIComponent(
    videoUrl
  )}`;
};

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const msgId = msg.message_id;

  if (text.startsWith("http") && text.includes("instagram.com")) {
    let loadingTextId;
    const videoUrl = text;
    const apiUrl = createApiUrl(videoUrl);
    bot.sendMessage(chatId, "⏳").then(({ message_id: id }) => {
      loadingTextId = id;
    });

    axios
      .get(apiUrl, {
        headers: { "x-rapidapi-key": apiKey, "x-rapidapi-host": apiHost },
      })
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          const { download_url: downloadUrl, caption } = data;

          bot.sendVideo(chatId, downloadUrl, {
            caption: caption?.slice(0, 144),
            parse_mode: "Markdown",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Nusxa olish",
                    copy_text: {
                      text: videoUrl,
                    },
                  },
                ],
                [{ text: "Instagram", url: videoUrl }],
              ],
            },
          });
        } else {
          bot.sendMessage(chatId, "Videoni yuklab bo'lmadi. Kod: 1");
        }
      })
      .catch(() => {
        bot.sendMessage(chatId, "Videoni yuklab bo'lmadi. Kod: 2");
      })
      .finally(() => {
        // Delete loading text & Video url
        bot.deleteMessage(chatId, msgId);
        bot.deleteMessage(chatId, loadingTextId);
      });
  } else {
    bot.sendMessage(chatId, "Iltimos, Instagram video havolasini yuboring.");
  }
});
