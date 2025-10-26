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

// Caption formatter
const videoCaption = (url) => {
  return `The video was downloaded via @topinstasaverbot\n\n[Link](${url}) | [Bot](https://t.me/topinstasaverbot) | [News](https://t.me/TopInstaSaverNews)`;
};

// Inline keyboard for video
const videoKeyboard = (url) => ({
  inline_keyboard: [[{ text: "Video link", url }]],
});

// Start command handler
bot.onText(/\/start/, async ({ chat, from }) => {
  const chatId = chat.id;

  // Create user
  const user = await User.findOne({ chatId });
  if (!user) {
    await User.create({
      chatId,
      username: from.username,
      lastName: from.last_name,
      lang: from.language_code,
      firstName: from.first_name,
    });

    await updateGlobalStats({ users: 1 });
  }

  // Greeting message
  bot.sendMessage(
    chatId,
    "Welcome to *Insta Saver Bot!*\n\nSend an Instagram *video* or *reel* link to *download* the video. ⚡️",
    {
      parse_mode: "Markdown",
    }
  );
});

// Stats command handler - View global statistics
bot.onText(/\/stats/, async ({ chat }) => {
  const chatId = chat.id;

  try {
    const stats = await getGlobalStats();
    const message =
      `📊 *Bot Statistics*\n\n` +
      `👥 Total Users: ${stats.users}\n` +
      `📹 Total Videos: ${stats.total}\n` +
      `✅ Success: ${stats.success}\n` +
      `❌ Failed: ${stats.failed}\n` +
      `📈 Success Rate: ${
        stats.total > 0 ? ((stats.success / stats.total) * 100).toFixed(1) : 0
      }%`;

    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
  } catch {
    bot.sendMessage(chatId, "Failed to get statistics.");
  }
});

// My stats command handler - View personal statistics
bot.onText(/\/mystats/, async ({ chat }) => {
  const chatId = chat.id;

  try {
    const stats = await getUserStats(chatId);
    const message =
      `📊 *Your Statistics*\n\n` +
      `📹 Total Videos: ${stats.total}\n` +
      `✅ Success: ${stats.success}\n` +
      `❌ Failed: ${stats.failed}\n` +
      `📈 Success Rate: ${
        stats.total > 0 ? ((stats.success / stats.total) * 100).toFixed(1) : 0
      }%`;

    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
  } catch {
    bot.sendMessage(chatId, "Failed to get your statistics.");
  }
});

// Handle incoming messages
bot.on("text", async ({ text, chat, message_id: msgId }) => {
  const chatId = chat.id;

  // Validate Instagram URL
  if (!isValidInstagramUrl(text)) return;

  // Format instagram video url
  const videoUrl = formatInstagramUrl(text);
  if (!videoUrl) {
    return bot.sendMessage(chatId, "Invalid link entered");
  }

  try {
    // Send video
    await bot.sendVideo(chatId, videoUrl.custom, {
      parse_mode: "Markdown",
      caption: videoCaption(videoUrl.original),
      reply_markup: videoKeyboard(videoUrl.original),
    });

    // Video successfully downloaded, update stats
    await trackVideoSuccess(chatId);
  } catch {
    // If video sending fails
    bot.sendMessage(chatId, "Failed to download the video. 😞", {
      reply_markup: videoKeyboard(videoUrl.original),
    });

    // Video failed to download, update stats
    await trackVideoFailure(chatId);
  } finally {
    // Finally, delete the user's message
    bot.deleteMessage(chatId, msgId);
  }
});

