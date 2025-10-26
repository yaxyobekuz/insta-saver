// Bot token
const token = process.env.TOKEN;

// Url helpers
const {
  formatInstagramUrl,
  isValidInstagramUrl,
} = require("./helpers/url.helpers");

// Models
const User = require("./models/User");

// Stats helpers
const {
  getUserStats,
  getGlobalStats,
  trackVideoSuccess,
  trackVideoFailure,
  updateGlobalStats,
} = require("./helpers/stats.helpers");

// Bot config
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(token, { polling: true });

// Language config
const { getTranslations, formatStatsMessage } = require("./config/languages");

// Get user language helper
const getUserLang = async (chatId) => {
  try {
    const user = await User.findOne({ chatId });
    return user?.lang || "en";
  } catch {
    return "en";
  }
};

// Start command handler
bot.onText(/\/start/, async ({ chat, from }) => {
  const chatId = chat.id;
  const langCode = from.language_code || "en";

  // Create user
  const user = await User.findOne({ chatId });
  if (!user) {
    await User.create({
      chatId,
      lang: langCode,
      username: from.username,
      lastName: from.last_name,
      firstName: from.first_name,
    });

    await updateGlobalStats({ users: 1 });
  }

  // Get translations
  const t = getTranslations(langCode);

  // Greeting message
  bot.sendMessage(chatId, t.welcome, {
    parse_mode: "Markdown",
  });
});

// Stats command handler - View global statistics
bot.onText(/\/stats/, async ({ chat }) => {
  const chatId = chat.id;

  try {
    const stats = await getGlobalStats();
    const langCode = await getUserLang(chatId);
    const message = formatStatsMessage(stats, langCode, true);

    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
  } catch {
    const langCode = await getUserLang(chatId);
    const t = getTranslations(langCode);
    bot.sendMessage(chatId, t.statsFailed);
  }
});

// My stats command handler - View personal statistics
bot.onText(/\/mystats/, async ({ chat }) => {
  const chatId = chat.id;

  try {
    const stats = await getUserStats(chatId);
    const langCode = await getUserLang(chatId);
    const message = formatStatsMessage(stats, langCode, false);

    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
  } catch {
    const langCode = await getUserLang(chatId);
    const t = getTranslations(langCode);
    bot.sendMessage(chatId, t.statsFailed);
  }
});

// Handle incoming messages
bot.on("text", async ({ text, chat, message_id: msgId }) => {
  const chatId = chat.id;

  // Validate Instagram URL
  if (!isValidInstagramUrl(text)) return;

  // Get user language
  const langCode = await getUserLang(chatId);
  const t = getTranslations(langCode);

  // Format instagram video url
  const videoUrl = formatInstagramUrl(text);
  if (!videoUrl) {
    return bot.sendMessage(chatId, t.invalidLink);
  }

  try {
    // Send video
    await bot.sendVideo(chatId, videoUrl.custom, {
      parse_mode: "Markdown",
      caption: t.videoCaption(videoUrl.original),
      reply_markup: {
        inline_keyboard: [
          [{ text: t.videoLinkButton, url: videoUrl.original }],
        ],
      },
    });

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
});
