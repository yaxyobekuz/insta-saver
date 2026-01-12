const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const stream = require("stream");
const pipeline = promisify(stream.pipeline);

/**
 * Media faylni URL dan yuklab oladi va vaqtinchalik papkaga saqlaydi
 * @param {string} url - Yuklab olinadigan media URL
 * @param {string} extension - Fayl kengaytmasi (ixtiyoriy, URL dan avtomatik aniqlanadi)
 * @returns {Promise<string>} - Yuklangan faylning to'liq yo'li
 */
const downloadMedia = async (url, extension = null) => {
  const tempDir = path.join(__dirname, "../../temp");

  // temp papkani yaratish (agar mavjud bo'lmasa)
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  // Extension ni aniqlash
  if (!extension) {
    // URL dan extension ni olish
    const urlPath = url.split('?')[0]; // Query parametrlarni olib tashlash
    const match = urlPath.match(/\.([a-zA-Z0-9]+)$/);
    extension = match ? match[1] : 'mp4'; // Default: mp4
  }

  // Noyob fayl nomi yaratish
  const filename = `${Date.now()}_${Math.random()
    .toString(36)
    .substring(7)}.${extension}`;
  const filePath = path.join(tempDir, filename);

  try {
    // Faylni yuklab olish
    const response = await axios({
      method: "GET",
      url: url,
      responseType: "stream",
      headers: {
        "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36`,
      },
      timeout: 60000,
    });

    // Stream orqali faylga yozish
    await pipeline(response.data, fs.createWriteStream(filePath));

    console.log(`Media yuklandi: ${filePath}`);
    return filePath;
  } catch (error) {
    // Xatolik bo'lsa, yaratilgan faylni o'chirish
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    console.error(`Media yuklab olishda xatolik: ${error.message}`);
    throw new Error(`Media yuklab olishda xatolik: ${error.message}`);
  }
};

/**
 * Vaqtinchalik faylni o'chiradi
 * @param {string} filePath - O'chiriladigan faylning to'liq yo'li
 */
const deleteFile = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Fayl o'chirildi: ${filePath}`);
    }
  } catch (error) {
    console.error(`Faylni o'chirishda xatolik: ${error.message}`);
  }
};

/**
 * Temp papkadagi barcha fayllarni o'chiradi
 * @param {number} olderThanMinutes - Necha daqiqadan eski fayllarni o'chirish (standart: 30)
 */
const cleanupTempFolder = (olderThanMinutes = 30) => {
  const tempDir = path.join(__dirname, "../../temp");

  if (!fs.existsSync(tempDir)) return;

  try {
    const files = fs.readdirSync(tempDir);
    const now = Date.now();
    const maxAge = olderThanMinutes * 60 * 1000;

    files.forEach((file) => {
      const filePath = path.join(tempDir, file);
      const stats = fs.statSync(filePath);
      const fileAge = now - stats.mtimeMs;

      if (fileAge > maxAge) {
        fs.unlinkSync(filePath);
        console.log(`Eski fayl o'chirildi: ${file}`);
      }
    });
  } catch (error) {
    console.error(`Temp papkani tozalashda xatolik: ${error.message}`);
  }
};

module.exports = { downloadMedia, deleteFile, cleanupTempFolder };
