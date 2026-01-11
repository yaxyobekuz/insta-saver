// Supported languages configuration
const languages = {
  // Uzbek
  uz: {
    welcome: `Insta Saver Botga xush kelibsiz! 🎉\n\nInstagram *rasm* yoki *reel* yoki *story* havolasini yuboring va postni bepul *yuklab oling*. ⚡️`,
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
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nPost @topinstasaverbot orqali yuklandi`;
    },
    postUrlButton: `Post havolasi`,
  },

  // English
  en: {
    welcome: `Welcome to Insta Saver Bot! 🎉\n\nSend an Instagram *image* or *reel* or *story* link and *download* the post for free. ⚡️`,
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
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nPost downloaded via @topinstasaverbot`;
    },
    postUrlButton: `Post link`,
  },

  // Russian
  ru: {
    welcome: `Добро пожаловать в Insta Saver Bot! 🎉\n\nОтправьте ссылку на Instagram *изображение* или *рилс* или *сторис* и *скачайте* пост бесплатно. ⚡️`,
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
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nПост скачан через @topinstasaverbot`;
    },
    postUrlButton: `Ссылка на пост`,
  },

  // Kazakh
  kk: {
    welcome: `Insta Saver Bot-қа қош келдіңіз! 🎉\n\nInstagram *суреті* немесе *рилс* немесе *сторис* сілтемесін жіберіп, постты тегін *жүктеп алыңыз*. ⚡️`,
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
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nПост @topinstasaverbot арқылы жүктелді`;
    },
    postUrlButton: `Пост сілтемесі`,
  },

  // Kyrgyz
  ky: {
    welcome: `Insta Saver Bot-ка кош келиңиз! 🎉\n\nInstagram *сүрөтү* же *рилс* же *сторис* шилтемесин жөнөтүп, постту акысыз *жүктөп алыңыз*. ⚡️`,
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
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nПост @topinstasaverbot аркылуу жүктөлдү`;
    },
    postUrlButton: `Пост шилтемеси`,
  },

  // Turkish
  tr: {
    welcome: `Insta Saver Bot'a hoş geldiniz! 🎉\n\nInstagram *resim* veya *reel* veya *story* bağlantısı gönderin ve gönderiyi ücretsiz *indirin*. ⚡️`,
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
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nGönderi @topinstasaverbot üzerinden indirildi`;
    },
    postUrlButton: `Gönderi bağlantısı`,
  },

  // Tajik
  tg: {
    welcome: `Ба Insta Saver Bot хуш омадед! 🎉\n\nПайванди Instagram *тасвир* ё *рилс* ё *сторӣ*-ро фиристед ва постро ройгон *боргирӣ* кунед. ⚡️`,
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
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nПост тавассути @topinstasaverbot боргирӣ шуд`;
    },
    postUrlButton: `Пайванди пост`,
  },

  // Turkmen
  tk: {
    welcome: `Insta Saver Bot-a hoş geldiňiz! 🎉\n\nInstagram *surat* ýa-da *rils* ýa-da *story* baglanyşygyny iberip, posti mugt *ýükläň*. ⚡️`,
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
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nPost @topinstasaverbot arkaly ýüklendi`;
    },
    postUrlButton: `Post baglanyşygy`,
  },

  // Azerbaijani
  az: {
    welcome: `Insta Saver Bot-a xoş gəlmisiniz! 🎉\n\nInstagram *şəkil* və ya *reel* və ya *story* linkini göndərin və postu pulsuz *yükləyin*. ⚡️`,
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
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nPost @topinstasaverbot vasitəsilə yükləndi`;
    },
    postUrlButton: `Post linki`,
  },

  // Persian
  fa: {
    welcome: `به Insta Saver Bot خوش آمدید! 🎉\n\nلینک *تصویر* یا *ریلز* یا *استوری* اینستاگرام را ارسال کنید و پست را رایگان *دانلود* کنید. ⚡️`,
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
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nپست از طریق @topinstasaverbot دانلود شد`;
    },
    postUrlButton: `لینک پست`,
  },

  // Arabic
  ar: {
    welcome: `مرحبًا بك في Insta Saver Bot! 🎉\n\nأرسل رابط *صورة* أو *ريلز* أو *قصة* من Instagram و*قم بتنزيل* المنشور مجانًا. ⚡️`,
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
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nتم تنزيل المنشور عبر @topinstasaverbot`;
    },
    postUrlButton: `رابط المنشور`,
  },

  // Portuguese (Portugal)
  "pt-pt": {
    welcome: `Bem-vindo ao Insta Saver Bot! 🎉\n\nEnvie uma ligação de *imagem* ou *reel* ou *story* do Instagram e *transfira* a publicação gratuitamente. ⚡️`,
    invalidLink: `Ligação inválida introduzida ❌`,
    downloadFailed: `Falha ao transferir o vídeo 😞`,
    statsTitle: `📊 *Estatísticas do Bot*`,
    myStatsTitle: `📊 *As Suas Estatísticas*`,
    totalUsers: `👥 Total de Utilizadores`,
    totalVideos: `📹 Total de Vídeos`,
    success: `✅ Sucesso`,
    failed: `❌ Falhou`,
    successRate: `📈 Taxa de Sucesso`,
    statsFailed: `Falha ao obter estatísticas.`,
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nPublicação transferida via @topinstasaverbot`;
    },
    postUrlButton: `Ligação da publicação`,
  },

  // Portuguese (Brazil)
  "pt-br": {
    welcome: `Bem-vindo ao Insta Saver Bot! 🎉\n\nEnvie um link de *imagem* ou *reel* ou *story* do Instagram e *baixe* a publicação gratuitamente. ⚡️`,
    invalidLink: `Link inválido inserido ❌`,
    downloadFailed: `Falha ao baixar o vídeo 😞`,
    statsTitle: `📊 *Estatísticas do Bot*`,
    myStatsTitle: `📊 *Suas Estatísticas*`,
    totalUsers: `👥 Total de Usuários`,
    totalVideos: `📹 Total de Vídeos`,
    success: `✅ Sucesso`,
    failed: `❌ Falhou`,
    successRate: `📈 Taxa de Sucesso`,
    statsFailed: `Falha ao obter estatísticas.`,
    postCaption: (title) => {
      const formatted = title?.split(" ")?.slice(0, 6)?.join(" ");
      return `${formatted}\n\nPublicação baixada via @topinstasaverbot`;
    },
    postUrlButton: `Link da publicação`,
  },
};

/**
 * Get user language from language code
 * @param {String} langCode - Language code (e.g., 'en', 'ru', 'uz')
 * @returns {String} Normalized language code
 */
const getUserLanguage = (langCode) => {
  if (!langCode) return "en";

  // Normalize language code (e.g., 'en-US' -> 'en')
  const normalizedCode = langCode.toLowerCase().split("-")[0];

  // Return language if supported, otherwise default to English
  return languages[normalizedCode] ? normalizedCode : "en";
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
