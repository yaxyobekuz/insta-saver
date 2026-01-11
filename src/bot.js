// Bot token
const token = process.env.TOKEN;

// Language config
const {
  getTranslations,
  getUserLanguage,
  formatStatsMessage,
} = require("./config/languages");

// Models
const User = require("./models/User");

// Helpers
const {
  formatInstagramUrl,
  isValidInstagramUrl,
} = require("./helpers/url.helpers");
const {
  getUserStats,
  getGlobalStats,
  updateGlobalStats,
} = require("./helpers/stats.helpers");

// Bot instance
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(token, { polling: true });

// Services
const { sendInstagramVideo } = require("./services/instagram.service");

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
  const langCode = getUserLanguage(from.language_code);

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

  // Process Instagram video sending
  await sendInstagramVideo(bot, chatId, videoUrl, t, msgId);
});
