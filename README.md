# 📥 Instagram Saver Bot

A Telegram bot for downloading Instagram videos and reels. The bot supports 6 languages and tracks user statistics.

## ✨ Features

- 📹 Download Instagram videos and reels
- 🌍 Multi-language support (Uzbek, English, Russian, Kazakh, Kyrgyz, Turkish)
- 📊 Global and personal statistics
- 💾 MongoDB database integration
- ⚡ Fast and easy to use

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Telegram Bot Token

### Steps

1. **Clone the repository:**
```bash
git clone https://github.com/yaxyobekuz/insta-saver.git
cd insta-saver
```

2. **Install dependencies:**
```bash
npm install
```

3. **Setup environment variables:**
```bash
# Copy .env.example to .env
cp .env.example .env
```

Edit the `.env` file and add the following information:
- `TOKEN`: Your Telegram bot token (get it from @BotFather)
- `MONGODB_URL`: Your MongoDB connection URL

4. **Run the bot:**
```bash
# Development mode
npm run dev

# Or production mode
npm start
```

## 📝 Usage

### Bot Commands

- `/start` - Start the bot and register
- `/stats` - View global statistics
- `/mystats` - View your personal statistics

### Download Instagram Videos

1. Send an Instagram video or reel link to the bot
2. The bot will automatically download and send you the video
3. If the video fails to download, a button to the original link will be provided

## 🏗️ Project Structure

```
insta-saver/
├── src/
│   ├── bot.js                # Main bot logic
│   ├── config/
│   │   ├── db.js             # MongoDB connection configuration
│   │   └── languages.js      # Multi-language settings
│   ├── helpers/
│   │   ├── stats.helpers.js  # Statistics helper functions
│   │   └── url.helpers.js    # URL validation and formatting
│   └── models/
│       ├── Stats.js          # Global statistics model
│       └── User.js           # User model
├── index.js                  # Entry point
├── package.json
├── .env.example
└── README.md
```

## 🛠️ Technologies

- **Node.js** - Server runtime
- **Telegram Bot API** - Bot framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **dotenv** - Environment variables management

## 🌐 Supported Languages

- 🇺🇿 O'zbekcha (uz)
- 🇬🇧 English (en)
- 🇷🇺 Русский (ru)
- 🇰🇿 Қазақша (kk)
- 🇰🇬 Кыргызча (ky)
- 🇹🇷 Türkçe (tr)

## 📊 Statistics Features

The bot provides two types of statistics:

### Global Statistics (`/stats`)
- Total number of users
- Total downloaded videos
- Successful downloads
- Failed downloads
- Success rate

### Personal Statistics (`/mystats`)
- Your total videos
- Successful downloads
- Failed downloads
- Personal success rate

## 🔧 Development

```bash
# Run in development mode with nodemon
npm run dev
```

## 📄 License

ISC

## 👨‍💻 Author

**YaxyobekUz**

- GitHub: [@YaxyobekUz](https://github.com/YaxyobekUz)
- Telegram: [@topinstasaverbot](https://t.me/topinstasaverbot)

## 🤝 Contributing

Want to contribute? Submit a pull request or open an issue!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## ⚠️ Disclaimer

This bot does not use Instagram's official API. It is intended for educational purposes only.

---

⭐ If you find this project useful, don't forget to give it a star!
