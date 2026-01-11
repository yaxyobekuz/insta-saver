// Bot token
const token = process.env.TOKEN;

// Bot instance
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(token, { polling: true });

module.exports = bot;
