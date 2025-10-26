// Supported languages configuration
const languages = {
  // Uzbek
  uz: {
    welcome: `Insta Saver Botga xush kelibsiz! 🎉\n\nInstagram *video* yoki *reel* havolasini yuboring va videoni *yuklab oling*. ⚡️`,
    invalidLink: `Noto'g'ri havola kiritildi ❌`,
    downloadFailed: `Video yuklanmadi 😞`,
    statsTitle: `📊 *Bot Statistikasi*`,
    myStatsTitle: `📊 *Sizning Statistikangiz*`,
    totalUsers: `👥 Jami foydalanuvchilar`,
    totalVideos: `📹 Jami videolar`,
    success: `✅ Muvaffaqiyatli`,
    failed: `❌ Muvaffaqiyatsiz`,
    successRate: `📈 Muvaffaqiyat darajasi`,
    statsFailed: `Statistikani olishda xatolik yuz berdi.`,
    videoCaption: (url) =>
      `Video @topinstasaverbot orqali yuklandi\n\n[Havola](${url}) | [Bot](https://t.me/topinstasaverbot) | [Yangiliklar](https://t.me/TopInstaSaverNews)`,
    videoLinkButton: `Video havolasi`,
  },

  // English
  en: {
    welcome: `Welcome to *Insta Saver Bot!* 🎉\n\nSend an Instagram *video* or *reel* link to *download* the video. ⚡️`,
    invalidLink: `Invalid link entered ❌`,
    downloadFailed: `Failed to download the video 😞`,
    statsTitle: `📊 *Bot Statistics*`,
    myStatsTitle: `📊 *Your Statistics*`,
    totalUsers: `👥 Total Users`,
    totalVideos: `📹 Total Videos`,
    success: `✅ Success`,
    failed: `❌ Failed`,
    successRate: `📈 Success Rate`,
    statsFailed: `Failed to get statistics.`,
    videoCaption: (url) =>
      `The video was downloaded via @topinstasaverbot\n\n[Link](${url}) | [Bot](https://t.me/topinstasaverbot) | [News](https://t.me/TopInstaSaverNews)`,
    videoLinkButton: `Video link`,
  },

  // Russian
  ru: {
    welcome: `Добро пожаловать в *Insta Saver Bot!* 🎉\n\nОтправьте ссылку на *видео* или *рилс* из Instagram, чтобы *скачать* видео. ⚡️`,
    invalidLink: `Введена неверная ссылка ❌`,
    downloadFailed: `Не удалось скачать видео 😞`,
    statsTitle: `📊 *Статистика бота*`,
    myStatsTitle: `📊 *Ваша статистика*`,
    totalUsers: `👥 Всего пользователей`,
    totalVideos: `📹 Всего видео`,
    success: `✅ Успешно`,
    failed: `❌ Неудачно`,
    successRate: `📈 Процент успеха`,
    statsFailed: `Не удалось получить статистику.`,
    videoCaption: (url) =>
      `Видео загружено через @topinstasaverbot\n\n[Ссылка](${url}) | [Бот](https://t.me/topinstasaverbot) | [Новости](https://t.me/TopInstaSaverNews)`,
    videoLinkButton: `Ссылка на видео`,
  },

  // Kazakh
  kk: {
    welcome: `*Insta Saver Bot-қа* қош келдіңіз! 🎉\n\nInstagram *видеосы* немесе *рилс* сілтемесін жіберіп, видеоны *жүктеп алыңыз*. ⚡️`,
    invalidLink: `Қате сілтеме енгізілді ❌`,
    downloadFailed: `Видео жүктелмеді 😞`,
    statsTitle: `📊 *Бот статистикасы*`,
    myStatsTitle: `📊 *Сіздің статистикаңыз*`,
    totalUsers: `👥 Барлық қолданушылар`,
    totalVideos: `📹 Барлық видеолар`,
    success: `✅ Сәтті`,
    failed: `❌ Сәтсіз`,
    successRate: `📈 Сәттілік деңгейі`,
    statsFailed: `Статистиканы алу мүмкін болмады.`,
    videoCaption: (url) =>
      `Видео @topinstasaverbot арқылы жүктелді\n\n[Сілтеме](${url}) | [Бот](https://t.me/topinstasaverbot) | [Жаңалықтар](https://t.me/TopInstaSaverNews)`,
    videoLinkButton: `Видео сілтемесі`,
  },

  // Kyrgyz
  ky: {
    welcome: `*Insta Saver Bot-ка* кош келиңиз! 🎉\n\nInstagram *видеосу* же *рилс* шилтемесин жөнөтүп, видеону *жүктөп алыңыз*. ⚡️`,
    invalidLink: `Туура эмес шилтеме киргизилди ❌`,
    downloadFailed: `Видео жүктөлбөдү 😞`,
    statsTitle: `📊 *Бот статистикасы*`,
    myStatsTitle: `📊 *Сиздин статистикаңыз*`,
    totalUsers: `👥 Бардык колдонуучулар`,
    totalVideos: `📹 Бардык видеолор`,
    success: `✅ Ийгиликтүү`,
    failed: `❌ Ийгиликсиз`,
    successRate: `📈 Ийгилик деңгээли`,
    statsFailed: `Статистиканы алуу мүмкүн эмес.`,
    videoCaption: (url) =>
      `Видео @topinstasaverbot аркылуу жүктөлдү\n\n[Шилтеме](${url}) | [Бот](https://t.me/topinstasaverbot) | [Жаңылыктар](https://t.me/TopInstaSaverNews)`,
    videoLinkButton: `Видео шилтемеси`,
  },

  // Turkish
  tr: {
    welcome: `*Insta Saver Bot'a* hoş geldiniz! 🎉\n\nInstagram *video* veya *reel* bağlantısı göndererek videoyu *indirin*. ⚡️`,
    invalidLink: `Geçersiz bağlantı girildi ❌`,
    downloadFailed: `Video indirilemedi 😞`,
    statsTitle: `📊 *Bot İstatistikleri*`,
    myStatsTitle: `📊 *İstatistikleriniz*`,
    totalUsers: `👥 Toplam Kullanıcılar`,
    totalVideos: `📹 Toplam Videolar`,
    success: `✅ Başarılı`,
    failed: `❌ Başarısız`,
    successRate: `📈 Başarı Oranı`,
    statsFailed: `İstatistikler alınamadı.`,
    videoCaption: (url) =>
      `Video @topinstasaverbot üzerinden indirildi\n\n[Bağlantı](${url}) | [Bot](https://t.me/topinstasaverbot) | [Haberler](https://t.me/TopInstaSaverNews)`,
    videoLinkButton: `Video bağlantısı`,
  },

  // Tajik
  tg: {
    welcome: `Ба *Insta Saver Bot* хуш омадед! 🎉\n\nПайванди *видео* ё *рилс*-и Instagram-ро фиристед ва видеоро *боргирӣ* кунед. ⚡️`,
    invalidLink: `Пайванди нодуруст ворид шуд ❌`,
    downloadFailed: `Видео боргирӣ нашуд 😞`,
    statsTitle: `📊 *Омори бот*`,
    myStatsTitle: `📊 *Омори шумо*`,
    totalUsers: `👥 Ҳамаи корбарон`,
    totalVideos: `📹 Ҳамаи видеоҳо`,
    success: `✅ Муваффақ`,
    failed: `❌ Номуваффақ`,
    successRate: `📈 Дараҷаи муваффақият`,
    statsFailed: `Омор гирифта нашуд.`,
    videoCaption: (url) =>
      `Видео тавассути @topinstasaverbot боргирӣ шуд\n\n[Пайванд](${url}) | [Бот](https://t.me/topinstasaverbot) | [Хабарҳо](https://t.me/TopInstaSaverNews)`,
    videoLinkButton: `Пайванди видео`,
  },

  // Turkmen
  tk: {
    welcome: `*Insta Saver Bot-a* hoş geldiňiz! 🎉\n\nInstagram *wideo* ýa-da *rils* baglanyşygyny iberip, wideony *ýükläň*. ⚡️`,
    invalidLink: `Nädogry baglanyşyk girizildi ❌`,
    downloadFailed: `Wideo ýüklenmedi 😞`,
    statsTitle: `📊 *Bot statistikasy*`,
    myStatsTitle: `📊 *Siziň statistikaňyz*`,
    totalUsers: `👥 Ähli ulanyjylar`,
    totalVideos: `📹 Ähli wideolar`,
    success: `✅ Üstünlikli`,
    failed: `❌ Şowsuz`,
    successRate: `📈 Üstünlik derejesi`,
    statsFailed: `Statistikany almak başartmady.`,
    videoCaption: (url) =>
      `Wideo @topinstasaverbot arkaly ýüklendi\n\n[Baglanyşyk](${url}) | [Bot](https://t.me/topinstasaverbot) | [Habarlar](https://t.me/TopInstaSaverNews)`,
    videoLinkButton: `Wideo baglanyşygy`,
  },

  // Azerbaijani
  az: {
    welcome: `*Insta Saver Bot-a* xoş gəlmisiniz! 🎉\n\nInstagram *video* və ya *reel* linkini göndərərək videonu *yükləyin*. ⚡️`,
    invalidLink: `Yanlış link daxil edildi ❌`,
    downloadFailed: `Video yüklənmədi 😞`,
    statsTitle: `📊 *Bot statistikası*`,
    myStatsTitle: `📊 *Sizin statistikanız*`,
    totalUsers: `👥 Ümumi istifadəçilər`,
    totalVideos: `📹 Ümumi videolar`,
    success: `✅ Uğurlu`,
    failed: `❌ Uğursuz`,
    successRate: `📈 Uğur dərəcəsi`,
    statsFailed: `Statistika əldə edilmədi.`,
    videoCaption: (url) =>
      `Video @topinstasaverbot vasitəsilə yükləndi\n\n[Link](${url}) | [Bot](https://t.me/topinstasaverbot) | [Xəbərlər](https://t.me/TopInstaSaverNews)`,
    videoLinkButton: `Video linki`,
  },

  // Persian
  fa: {
    welcome: `به *Insta Saver Bot* خوش آمدید! 🎉\n\nلینک *ویدیو* یا *ریلز* اینستاگرام را ارسال کنید و ویدیو را *دانلود* کنید. ⚡️`,
    invalidLink: `لینک نامعتبر وارد شد ❌`,
    downloadFailed: `دانلود ویدیو ناموفق بود 😞`,
    statsTitle: `📊 *آمار ربات*`,
    myStatsTitle: `📊 *آمار شما*`,
    totalUsers: `👥 کل کاربران`,
    totalVideos: `📹 کل ویدیوها`,
    success: `✅ موفق`,
    failed: `❌ ناموفق`,
    successRate: `📈 نرخ موفقیت`,
    statsFailed: `دریافت آمار ناموفق بود.`,
    videoCaption: (url) =>
      `ویدیو از طریق @topinstasaverbot دانلود شد\n\n[لینک](${url}) | [ربات](https://t.me/topinstasaverbot) | [اخبار](https://t.me/TopInstaSaverNews)`,
    videoLinkButton: `لینک ویدیو`,
  },

  // Arabic
  ar: {
    welcome: `مرحبًا بك في *Insta Saver Bot!* 🎉\n\nأرسل رابط *فيديو* أو *ريلز* من Instagram *لتنزيل* الفيديو. ⚡️`,
    invalidLink: `تم إدخال رابط غير صالح ❌`,
    downloadFailed: `فشل تنزيل الفيديو 😞`,
    statsTitle: `📊 *إحصائيات البوت*`,
    myStatsTitle: `📊 *إحصائياتك*`,
    totalUsers: `👥 إجمالي المستخدمين`,
    totalVideos: `📹 إجمالي الفيديوهات`,
    success: `✅ نجح`,
    failed: `❌ فشل`,
    successRate: `📈 معدل النجاح`,
    statsFailed: `فشل في الحصول على الإحصائيات.`,
    videoCaption: (url) =>
      `تم تنزيل الفيديو عبر @topinstasaverbot\n\n[الرابط](${url}) | [البوت](https://t.me/topinstasaverbot) | [الأخبار](https://t.me/TopInstaSaverNews)`,
    videoLinkButton: `رابط الفيديو`,
  },
};

/**
 * Get user language from language code
 * @param {String} langCode - Language code (e.g., 'en', 'ru', 'uz')
 * @returns {String} Normalized language code
 */
const getUserLanguage = (langCode) => {
  if (!langCode) return `en`;

  // Normalize language code (e.g., 'en-US' -> 'en')
  const normalizedCode = langCode.toLowerCase().split(`-`)[0];

  // Return language if supported, otherwise default to English
  return languages[normalizedCode] ? normalizedCode : `en`;
};

/**
 * Get translations for user
 * @param {String} langCode - Language code
 * @returns {Object} Translation object
 */
const getTranslations = (langCode) => {
  const lang = getUserLanguage(langCode);
  return languages[lang];
};

/**
 * Format stats message
 * @param {Object} stats - Stats object
 * @param {String} langCode - Language code
 * @param {Boolean} isGlobal - Is global stats or user stats
 * @returns {String} Formatted stats message
 */
const formatStatsMessage = (stats, langCode, isGlobal = false) => {
  const t = getTranslations(langCode);
  const successRate =
    stats.total > 0 ? ((stats.success / stats.total) * 100).toFixed(1) : 0;

  let message = isGlobal ? `${t.statsTitle}\n\n` : `${t.myStatsTitle}\n\n`;

  if (isGlobal) {
    message += `${t.totalUsers}: ${stats.users}\n`;
  }

  message += `${t.totalVideos}: ${stats.total}\n`;
  message += `${t.success}: ${stats.success}\n`;
  message += `${t.failed}: ${stats.failed}\n`;
  message += `${t.successRate}: ${successRate}%`;

  return message;
};

module.exports = {
  languages,
  getUserLanguage,
  getTranslations,
  formatStatsMessage,
};
