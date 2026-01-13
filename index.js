// ENV config
require("dotenv").config();

// Language config
const {
  getTranslations,
  getUserLanguage,
  formatStatsMessage,
} = require("./src/config/languages");

// Models
const User = require("./src/models/User");

// Bot config
const bot = require("./src/config/bot.config");

// Db connection
const connectDB = require("./src/config/db.config");

// Helpers
const {
  getUserStats,
  getGlobalStats,
  updateGlobalStats,
} = require("./src/helpers/stats.helpers");
const { detectPlatform } = require("./src/helpers/url.helpers");

// Services
const { sendPost } = require("./src/services/social.service");
const { cleanupTempFolder } = require("./src/services/download.service");

// Get user language helper
const getUserLang = async (chatId) => {
  try {
    const user = await User.findOne({ chatId });
    return user?.lang || "en";
  } catch {
    return "en";
  }
};

// Initialize bot and database connection
(async () => {
  await connectDB();

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
    bot.sendMessage(chatId, t.welcome, { parse_mode: "Markdown" });
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

    // Get user language
    const langCode = await getUserLang(chatId);
    const t = getTranslations(langCode);

    // Detect platform and send post
    const { cleanedUrl, success } = detectPlatform(text);
    if (success) sendPost(chatId, cleanedUrl, t, msgId);
  });

  // Handle callback queries (button presses)
  bot.on("callback_query", async (callbackQuery) => {
    const { data, message } = callbackQuery;
    const chatId = message.chat.id;

    // Answer callback query to remove loading state
    bot.answerCallbackQuery(callbackQuery.id);

    // Check if it's a retry action
    if (!data.startsWith("retry:")) return;
    const url = data.replace("retry:", "");

    // Get user language
    const langCode = await getUserLang(chatId);
    const t = getTranslations(langCode);

    // Retry sending post
    sendPost(chatId, url, t, message.message_id, true);
  });
})();

// Cleanup temp folder periodically
cleanupTempFolder();
