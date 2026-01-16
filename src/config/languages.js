/**
 * Escape Markdown special characters
 * @param {String} text - Text to escape
 * @returns {String} Escaped text
 */
const escapeMarkdown = (text) => {
  if (!text || typeof text !== "string") return "";
  return text
    .split(" ")
    .slice(0, 9)
    .join(" ")
    .replace(/([_*\[\]()~`>#+\-=|{}.!])/g, "\\$1");
};

// Supported languages configuration
const languages = {
  // Uzbek
  uz: {
    welcome: `Insta Saver Botga xush kelibsiz! 🎉\n\nInstagram *rasm* yoki *reel* yoki *story* havolasini yuboring va postni bepul *yuklab oling*. ⚡️`,
    invalidLink: `Noto'g'ri havola kiritildi ❌`,
    downloadFailed: `Kontent yuklanmadi ☹️`,
    noContent: `Kontent maxfiy bo'lishi yoki platforma contentni yuklashga ruxsat bermagan bo'lishi mumkin 😕`,
    statsTitle: `📊 *Bot Statistikasi*`,
    myStatsTitle: `📊 *Sizning Statistikangiz*`,
    totalUsers: `👥 Jami foydalanuvchilar`,
    totalVideos: `📹 Jami videolar`,
    success: `✅ Muvaffaqiyatli`,
    failed: `❌ Muvaffaqiyatsiz`,
    loading: `⏳ Yuklanmoqda...`,
    successRate: `📈 Muvaffaqiyat darajasi`,
    statsFailed: `Statistikani olishda xatolik yuz berdi.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPost @topinstasaverbot orqali yuklandi`;
    },
    postUrlButton: `Post havolasi`,
    retryButton: `🔄 Qayta urinish`,
  },

  // English
  en: {
    welcome: `Welcome to Insta Saver Bot! 🎉\n\nSend an Instagram *image* or *reel* or *story* link and *download* the post for free. ⚡️`,
    invalidLink: `Invalid link entered ❌`,
    downloadFailed: `Failed to download the content ☹️`,
    noContent: `Content may be private or the platform doesn't allow downloading 😕`,
    statsTitle: `📊 *Bot Statistics*`,
    myStatsTitle: `📊 *Your Statistics*`,
    totalUsers: `👥 Total Users`,
    totalVideos: `📹 Total Videos`,
    success: `✅ Success`,
    failed: `❌ Failed`,
    loading: `⏳ Loading...`,
    successRate: `📈 Success Rate`,
    statsFailed: `Failed to get statistics.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPost downloaded via @topinstasaverbot`;
    },
    postUrlButton: `Post link`,
    retryButton: `🔄 Retry`,
  },

  // Russian
  ru: {
    welcome: `Добро пожаловать в Insta Saver Bot! 🎉\n\nОтправьте ссылку на Instagram *изображение* или *рилс* или *сторис* и *скачайте* пост бесплатно. ⚡️`,
    invalidLink: `Введена неверная ссылка ❌`,
    downloadFailed: `Не удалось скачать контент ☹️`,
    noContent: `Контент может быть приватным или платформа не разрешает скачивание 😕`,
    statsTitle: `📊 *Статистика бота*`,
    myStatsTitle: `📊 *Ваша статистика*`,
    totalUsers: `👥 Всего пользователей`,
    totalVideos: `📹 Всего видео`,
    success: `✅ Успешно`,
    failed: `❌ Неудачно`,
    loading: `⏳ Загрузка...`,
    successRate: `📈 Процент успеха`,
    statsFailed: `Не удалось получить статистику.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nПост скачан через @topinstasaverbot`;
    },
    postUrlButton: `Ссылка на пост`,
    retryButton: `🔄 Повторить`,
  },

  // Kazakh
  kk: {
    welcome: `Insta Saver Bot-қа қош келдіңіз! 🎉\n\nInstagram *суреті* немесе *рилс* немесе *сторис* сілтемесін жіберіп, постты тегін *жүктеп алыңыз*. ⚡️`,
    invalidLink: `Қате сілтеме енгізілді ❌`,
    downloadFailed: `Контент жүктелмеді ☹️`,
    noContent: `Контент жабық болуы мүмкін немесе платформа жүктеуге рұқсат бермейді 😕`,
    statsTitle: `📊 *Бот статистикасы*`,
    myStatsTitle: `📊 *Сіздің статистикаңыз*`,
    totalUsers: `👥 Барлық қолданушылар`,
    totalVideos: `📹 Барлық видеолар`,
    success: `✅ Сәтті`,
    failed: `❌ Сәтсіз`,
    loading: `⏳ Жүктелуде...`,
    successRate: `📈 Сәттілік деңгейі`,
    statsFailed: `Статистиканы алу мүмкін болмады.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nПост @topinstasaverbot арқылы жүктелді`;
    },
    postUrlButton: `Пост сілтемесі`,
    retryButton: `🔄 Қайталау`,
  },

  // Kyrgyz
  ky: {
    welcome: `Insta Saver Bot-ка кош келиңиз! 🎉\n\nInstagram *сүрөтү* же *рилс* же *сторис* шилтемесин жөнөтүп, постту акысыз *жүктөп алыңыз*. ⚡️`,
    invalidLink: `Туура эмес шилтеме киргизилди ❌`,
    downloadFailed: `Контент жүктөлбөдү ☹️`,
    noContent: `Контент жабык болушу мүмкүн же платформа жүктөөгө уруксат бербейт 😕`,
    statsTitle: `📊 *Бот статистикасы*`,
    myStatsTitle: `📊 *Сиздин статистикаңыз*`,
    totalUsers: `👥 Бардык колдонуучулар`,
    totalVideos: `📹 Бардык видеолор`,
    success: `✅ Ийгиликтүү`,
    failed: `❌ Ийгиликсиз`,
    loading: `⏳ Жүктөлүүдө...`,
    successRate: `📈 Ийгилик деңгээли`,
    statsFailed: `Статистиканы алуу мүмкүн эмес.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nПост @topinstasaverbot аркылуу жүктөлдү`;
    },
    postUrlButton: `Пост шилтемеси`,
    retryButton: `🔄 Кайталоо`,
  },

  // Turkish
  tr: {
    welcome: `Insta Saver Bot'a hoş geldiniz! 🎉\n\nInstagram *resim* veya *reel* veya *story* bağlantısı gönderin ve gönderiyi ücretsiz *indirin*. ⚡️`,
    invalidLink: `Geçersiz bağlantı girildi ❌`,
    downloadFailed: `İçerik indirilemedi ☹️`,
    noContent: `İçerik gizli olabilir veya platform indirmeye izin vermiyor olabilir 😕`,
    statsTitle: `📊 *Bot İstatistikleri*`,
    myStatsTitle: `📊 *İstatistikleriniz*`,
    totalUsers: `👥 Toplam Kullanıcılar`,
    totalVideos: `📹 Toplam Videolar`,
    success: `✅ Başarılı`,
    failed: `❌ Başarısız`,
    loading: `⏳ Yükleniyor...`,
    successRate: `📈 Başarı Oranı`,
    statsFailed: `İstatistikler alınamadı.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nGönderi @topinstasaverbot üzerinden indirildi`;
    },
    postUrlButton: `Gönderi bağlantısı`,
    retryButton: `🔄 Tekrar dene`,
  },

  // Tajik
  tg: {
    welcome: `Ба Insta Saver Bot хуш омадед! 🎉\n\nПайванди Instagram *тасвир* ё *рилс* ё *сторӣ*-ро фиристед ва постро ройгон *боргирӣ* кунед. ⚡️`,
    invalidLink: `Пайванди нодуруст ворид шуд ❌`,
    downloadFailed: `Контент боргирӣ нашуд ☹️`,
    noContent: `Контент хусусӣ буда метавонад ё платформа боргириро иҷозат намедиҳад 😕`,
    statsTitle: `📊 *Омори бот*`,
    myStatsTitle: `📊 *Омори шумо*`,
    totalUsers: `👥 Ҳамаи корбарон`,
    totalVideos: `📹 Ҳамаи видеоҳо`,
    success: `✅ Муваффақ`,
    failed: `❌ Номуваффақ`,
    loading: `⏳ Боргирӣ шуда истодааст...`,
    successRate: `📈 Дараҷаи муваффақият`,
    statsFailed: `Омор гирифта нашуд.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nПост тавассути @topinstasaverbot боргирӣ шуд`;
    },
    postUrlButton: `Пайванди пост`,
    retryButton: `🔄 Такрор кардан`,
  },

  // Turkmen
  tk: {
    welcome: `Insta Saver Bot-a hoş geldiňiz! 🎉\n\nInstagram *surat* ýa-da *rils* ýa-da *story* baglanyşygyny iberip, posti mugt *ýükläň*. ⚡️`,
    invalidLink: `Nädogry baglanyşyk girizildi ❌`,
    downloadFailed: `Kontent ýüklenmedi ☹️`,
    noContent: `Kontent gizlin bolup biler ýa-da platforma ýüklemäge rugsat bermeýär 😕`,
    statsTitle: `📊 *Bot statistikasy*`,
    myStatsTitle: `📊 *Siziň statistikaňyz*`,
    totalUsers: `👥 Ähli ulanyjylar`,
    totalVideos: `📹 Ähli wideolar`,
    success: `✅ Üstünlikli`,
    failed: `❌ Şowsuz`,
    loading: `⏳ Ýüklenýär...`,
    successRate: `📈 Üstünlik derejesi`,
    statsFailed: `Statistikany almak başartmady.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPost @topinstasaverbot arkaly ýüklendi`;
    },
    postUrlButton: `Post baglanyşygy`,
    retryButton: `🔄 Gaýtadan synanyş`,
  },

  // Azerbaijani
  az: {
    welcome: `Insta Saver Bot-a xoş gəlmisiniz! 🎉\n\nInstagram *şəkil* və ya *reel* və ya *story* linkini göndərin və postu pulsuz *yükləyin*. ⚡️`,
    invalidLink: `Yanlış link daxil edildi ❌`,
    downloadFailed: `Kontent yüklənmədi ☹️`,
    noContent: `Kontent gizli ola bilər və ya platforma yükləməyə icazə vermir 😕`,
    statsTitle: `📊 *Bot statistikası*`,
    myStatsTitle: `📊 *Sizin statistikanız*`,
    totalUsers: `👥 Ümumi istifadəçilər`,
    totalVideos: `📹 Ümumi videolar`,
    success: `✅ Uğurlu`,
    failed: `❌ Uğursuz`,
    loading: `⏳ Yüklənir...`,
    successRate: `📈 Uğur dərəcəsi`,
    statsFailed: `Statistika əldə edilmədi.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPost @topinstasaverbot vasitəsilə yükləndi`;
    },
    postUrlButton: `Post linki`,
    retryButton: `🔄 Yenidən cəhd et`,
  },

  // Persian
  fa: {
    welcome: `به Insta Saver Bot خوش آمدید! 🎉\n\nلینک *تصویر* یا *ریلز* یا *استوری* اینستاگرام را ارسال کنید و پست را رایگان *دانلود* کنید. ⚡️`,
    invalidLink: `لینک نامعتبر وارد شد ❌`,
    downloadFailed: `دانلود محتوا ناموفق بود ☹️`,
    noContent: `محتوا ممکن است خصوصی باشد یا پلتفرم اجازه دانلود نمی‌دهد 😕`,
    statsTitle: `📊 *آمار ربات*`,
    myStatsTitle: `📊 *آمار شما*`,
    totalUsers: `👥 کل کاربران`,
    totalVideos: `📹 کل ویدیوها`,
    success: `✅ موفق`,
    failed: `❌ ناموفق`,
    loading: `⏳ در حال بارگذاری...`,
    successRate: `📈 نرخ موفقیت`,
    statsFailed: `دریافت آمار ناموفق بود.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nپست از طریق @topinstasaverbot دانلود شد`;
    },
    postUrlButton: `لینک پست`,
    retryButton: `🔄 تلاش مجدد`,
  },

  // Arabic
  ar: {
    welcome: `مرحبًا بك في Insta Saver Bot! 🎉\n\nأرسل رابط *صورة* أو *ريلز* أو *قصة* من Instagram و*قم بتنزيل* المنشور مجانًا. ⚡️`,
    invalidLink: `تم إدخال رابط غير صالح ❌`,
    downloadFailed: `فشل تنزيل المحتوى ☹️`,
    noContent: `قد يكون المحتوى خاصًا أو لا تسمح المنصة بالتنزيل 😕`,
    statsTitle: `📊 *إحصائيات البوت*`,
    myStatsTitle: `📊 *إحصائياتك*`,
    totalUsers: `👥 إجمالي المستخدمين`,
    totalVideos: `📹 إجمالي الفيديوهات`,
    success: `✅ نجح`,
    failed: `❌ فشل`,
    loading: `⏳ جاري التحميل...`,
    successRate: `📈 معدل النجاح`,
    statsFailed: `فشل في الحصول على الإحصائيات.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nتم تنزيل المنشور عبر @topinstasaverbot`;
    },
    postUrlButton: `رابط المنشور`,
    retryButton: `🔄 إعادة المحاولة`,
  },

  // Portuguese (Portugal)
  "pt-pt": {
    welcome: `Bem-vindo ao Insta Saver Bot! 🎉\n\nEnvie uma ligação de *imagem* ou *reel* ou *story* do Instagram e *transfira* a publicação gratuitamente. ⚡️`,
    invalidLink: `Ligação inválida introduzida ❌`,
    downloadFailed: `Falha ao transferir o conteúdo ☹️`,
    noContent: `O conteúdo pode ser privado ou a plataforma não permite a transferência 😕`,
    statsTitle: `📊 *Estatísticas do Bot*`,
    myStatsTitle: `📊 *As Suas Estatísticas*`,
    totalUsers: `👥 Total de Utilizadores`,
    totalVideos: `📹 Total de Vídeos`,
    success: `✅ Sucesso`,
    loading: `⏳ A carregar...`,
    failed: `❌ Falhou`,
    successRate: `📈 Taxa de Sucesso`,
    statsFailed: `Falha ao obter estatísticas.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPublicação transferida via @topinstasaverbot`;
    },
    postUrlButton: `Ligação da publicação`,
    retryButton: `🔄 Tentar novamente`,
  },

  // Portuguese (Brazil)
  "pt-br": {
    welcome: `Bem-vindo ao Insta Saver Bot! 🎉\n\nEnvie um link de *imagem* ou *reel* ou *story* do Instagram e *baixe* a publicação gratuitamente. ⚡️`,
    invalidLink: `Link inválido inserido ❌`,
    downloadFailed: `Falha ao baixar o conteúdo ☹️`,
    noContent: `O conteúdo pode ser privado ou a plataforma não permite o download 😕`,
    statsTitle: `📊 *Estatísticas do Bot*`,
    myStatsTitle: `📊 *Suas Estatísticas*`,
    totalUsers: `👥 Total de Usuários`,
    totalVideos: `📹 Total de Vídeos`,
    success: `✅ Sucesso`,
    failed: `❌ Falhou`,
    loading: `⏳ Carregando...`,
    successRate: `📈 Taxa de Sucesso`,
    statsFailed: `Falha ao obter estatísticas.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPublicação baixada via @topinstasaverbot`;
    },
    postUrlButton: `Link da publicação`,
    retryButton: `🔄 Tentar novamente`,
  },

  // Spanish
  es: {
    welcome: `¡Bienvenido a Insta Saver Bot! 🎉\n\nEnvía un enlace de *imagen* o *reel* o *historia* de Instagram y *descarga* la publicación gratis. ⚡️`,
    invalidLink: `Enlace inválido ingresado ❌`,
    downloadFailed: `Error al descargar el contenido ☹️`,
    noContent: `El contenido puede ser privado o la plataforma no permite la descarga 😕`,
    statsTitle: `📊 *Estadísticas del Bot*`,
    myStatsTitle: `📊 *Tus Estadísticas*`,
    totalUsers: `👥 Total de Usuarios`,
    totalVideos: `📹 Total de Videos`,
    success: `✅ Exitoso`,
    failed: `❌ Fallido`,
    loading: `⏳ Cargando...`,
    successRate: `📈 Tasa de Éxito`,
    statsFailed: `Error al obtener estadísticas.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPublicación descargada vía @topinstasaverbot`;
    },
    postUrlButton: `Enlace de publicación`,
    retryButton: `🔄 Reintentar`,
  },

  // French
  fr: {
    welcome: `Bienvenue sur Insta Saver Bot! 🎉\n\nEnvoyez un lien d'*image* ou de *reel* ou de *story* Instagram et *téléchargez* la publication gratuitement. ⚡️`,
    invalidLink: `Lien invalide saisi ❌`,
    downloadFailed: `Échec du téléchargement du contenu ☹️`,
    noContent: `Le contenu peut être privé ou la plateforme n'autorise pas le téléchargement 😕`,
    statsTitle: `📊 *Statistiques du Bot*`,
    myStatsTitle: `📊 *Vos Statistiques*`,
    totalUsers: `👥 Total des Utilisateurs`,
    totalVideos: `📹 Total des Vidéos`,
    success: `✅ Réussi`,
    failed: `❌ Échoué`,
    loading: `⏳ Chargement...`,
    successRate: `📈 Taux de Réussite`,
    statsFailed: `Échec de l'obtention des statistiques.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPublication téléchargée via @topinstasaverbot`;
    },
    postUrlButton: `Lien de publication`,
    retryButton: `🔄 Réessayer`,
  },

  // German
  de: {
    welcome: `Willkommen bei Insta Saver Bot! 🎉\n\nSenden Sie einen Instagram *Bild*- oder *Reel*- oder *Story*-Link und *laden* Sie die Publikation kostenlos herunter. ⚡️`,
    invalidLink: `Ungültiger Link eingegeben ❌`,
    downloadFailed: `Inhalt konnte nicht heruntergeladen werden ☹️`,
    noContent: `Der Inhalt ist möglicherweise privat oder die Plattform erlaubt kein Herunterladen 😕`,
    statsTitle: `📊 *Bot-Statistiken*`,
    myStatsTitle: `📊 *Ihre Statistiken*`,
    totalUsers: `👥 Gesamte Benutzer`,
    totalVideos: `📹 Gesamte Videos`,
    success: `✅ Erfolgreich`,
    failed: `❌ Fehlgeschlagen`,
    loading: `⏳ Laden...`,
    successRate: `📈 Erfolgsquote`,
    statsFailed: `Statistiken konnten nicht abgerufen werden.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nBeitrag über @topinstasaverbot heruntergeladen`;
    },
    postUrlButton: `Beitragslink`,
    retryButton: `🔄 Erneut versuchen`,
  },

  // Italian
  it: {
    welcome: `Benvenuto su Insta Saver Bot! 🎉\n\nInvia un link di *immagine* o *reel* o *storia* di Instagram e *scarica* la pubblicazione gratuitamente. ⚡️`,
    invalidLink: `Link non valido inserito ❌`,
    downloadFailed: `Impossibile scaricare il contenuto ☹️`,
    noContent: `Il contenuto potrebbe essere privato o la piattaforma non consente il download 😕`,
    statsTitle: `📊 *Statistiche del Bot*`,
    myStatsTitle: `📊 *Le Tue Statistiche*`,
    totalUsers: `👥 Totale Utenti`,
    totalVideos: `📹 Totale Video`,
    success: `✅ Riuscito`,
    failed: `❌ Fallito`,
    loading: `⏳ Caricamento...`,
    successRate: `📈 Tasso di Successo`,
    statsFailed: `Impossibile ottenere statistiche.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPubblicazione scaricata tramite @topinstasaverbot`;
    },
    postUrlButton: `Link pubblicazione`,
    retryButton: `🔄 Riprova`,
  },

  // Indonesian
  id: {
    welcome: `Selamat datang di Insta Saver Bot! 🎉\n\nKirim tautan *gambar* atau *reel* atau *story* Instagram dan *unduh* postingan secara gratis. ⚡️`,
    invalidLink: `Tautan tidak valid dimasukkan ❌`,
    downloadFailed: `Gagal mengunduh konten ☹️`,
    noContent: `Konten mungkin bersifat pribadi atau platform tidak mengizinkan pengunduhan 😕`,
    statsTitle: `📊 *Statistik Bot*`,
    myStatsTitle: `📊 *Statistik Anda*`,
    totalUsers: `👥 Total Pengguna`,
    totalVideos: `📹 Total Video`,
    success: `✅ Berhasil`,
    failed: `❌ Gagal`,
    loading: `⏳ Memuat...`,
    successRate: `📈 Tingkat Keberhasilan`,
    statsFailed: `Gagal mendapatkan statistik.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPostingan diunduh via @topinstasaverbot`;
    },
    postUrlButton: `Tautan postingan`,
    retryButton: `🔄 Coba lagi`,
  },

  // Hindi
  hi: {
    welcome: `Insta Saver Bot में आपका स्वागत है! 🎉\n\nInstagram *छवि* या *रील* या *स्टोरी* लिंक भेजें और पोस्ट को मुफ्त में *डाउनलोड* करें। ⚡️`,
    invalidLink: `अमान्य लिंक दर्ज किया गया ❌`,
    downloadFailed: `सामग्री डाउनलोड करने में विफल ☹️`,
    noContent: `सामग्री निजी हो सकती है या प्लेटफ़ॉर्म डाउनलोड की अनुमति नहीं देता 😕`,
    statsTitle: `📊 *बॉट आँकड़े*`,
    myStatsTitle: `📊 *आपके आँकड़े*`,
    totalUsers: `👥 कुल उपयोगकर्ता`,
    totalVideos: `📹 कुल वीडियो`,
    success: `✅ सफल`,
    failed: `❌ विफल`,
    loading: `⏳ लोड हो रहा है...`,
    successRate: `📈 सफलता दर`,
    statsFailed: `आँकड़े प्राप्त करने में विफल।`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nपोस्ट @topinstasaverbot के माध्यम से डाउनलोड की गई`;
    },
    postUrlButton: `पोस्ट लिंक`,
    retryButton: `🔄 पुनः प्रयास करें`,
  },

  // Ukrainian
  uk: {
    welcome: `Ласкаво просимо до Insta Saver Bot! 🎉\n\nНадішліть посилання на Instagram *зображення* або *рілс* або *сторіс* і *завантажте* пост безкоштовно. ⚡️`,
    invalidLink: `Введено недійсне посилання ❌`,
    downloadFailed: `Не вдалося завантажити контент ☹️`,
    noContent: `Контент може бути приватним або платформа не дозволяє завантаження 😕`,
    statsTitle: `📊 *Статистика бота*`,
    myStatsTitle: `📊 *Ваша статистика*`,
    totalUsers: `👥 Всього користувачів`,
    totalVideos: `📹 Всього відео`,
    success: `✅ Успішно`,
    failed: `❌ Невдало`,
    loading: `⏳ Завантаження...`,
    successRate: `📈 Рівень успіху`,
    statsFailed: `Не вдалося отримати статистику.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nПост завантажено через @topinstasaverbot`;
    },
    postUrlButton: `Посилання на пост`,
    retryButton: `🔄 Повторити спробу`,
  },

  // Polish
  pl: {
    welcome: `Witamy w Insta Saver Bot! 🎉\n\nWyślij link do *obrazu* lub *reel* lub *story* z Instagrama i *pobierz* post za darmo. ⚡️`,
    invalidLink: `Wprowadzono nieprawidłowy link ❌`,
    downloadFailed: `Nie udało się pobrać zawartości ☹️`,
    noContent: `Zawartość może być prywatna lub platforma nie zezwala na pobieranie 😕`,
    statsTitle: `📊 *Statystyki Bota*`,
    myStatsTitle: `📊 *Twoje Statystyki*`,
    totalUsers: `👥 Łączna liczba użytkowników`,
    totalVideos: `📹 Łączna liczba filmów`,
    success: `✅ Sukces`,
    failed: `❌ Niepowodzenie`,
    loading: `⏳ Ładowanie...`,
    successRate: `📈 Wskaźnik sukcesu`,
    statsFailed: `Nie udało się pobrać statystyk.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPost pobrany przez @topinstasaverbot`;
    },
    postUrlButton: `Link do postu`,
    retryButton: `🔄 Spróbuj ponownie`,
  },

  // Vietnamese
  vi: {
    welcome: `Chào mừng đến với Insta Saver Bot! 🎉\n\nGửi liên kết *hình ảnh* hoặc *reel* hoặc *story* Instagram và *tải xuống* bài đăng miễn phí. ⚡️`,
    invalidLink: `Liên kết không hợp lệ được nhập ❌`,
    downloadFailed: `Tải nội dung thất bại ☹️`,
    noContent: `Nội dung có thể ở chế độ riêng tư hoặc nền tảng không cho phép tải xuống 😕`,
    statsTitle: `📊 *Thống Kê Bot*`,
    myStatsTitle: `📊 *Thống Kê Của Bạn*`,
    totalUsers: `👥 Tổng Người Dùng`,
    totalVideos: `📹 Tổng Video`,
    success: `✅ Thành Công`,
    failed: `❌ Thất Bại`,
    loading: `⏳ Đang tải...`,
    successRate: `📈 Tỷ Lệ Thành Công`,
    statsFailed: `Không thể lấy thống kê.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nBài đăng được tải xuống qua @topinstasaverbot`;
    },
    postUrlButton: `Liên kết bài đăng`,
    retryButton: `🔄 Thử lại`,
  },

  // Thai
  th: {
    welcome: `ยินดีต้อนรับสู่ Insta Saver Bot! 🎉\n\nส่งลิงก์ *รูปภาพ* หรือ *รีล* หรือ *สตอรี่* Instagram และ *ดาวน์โหลด* โพสต์ฟรี ⚡️`,
    invalidLink: `ป้อนลิงก์ไม่ถูกต้อง ❌`,
    downloadFailed: `ดาวน์โหลดเนื้อหาไม่สำเร็จ ☹️`,
    noContent: `เนื้อหาอาจเป็นส่วนตัวหรือแพลตฟอร์มไม่อนุญาตให้ดาวน์โหลด 😕`,
    statsTitle: `📊 *สถิติบอท*`,
    myStatsTitle: `📊 *สถิติของคุณ*`,
    totalUsers: `👥 ผู้ใช้ทั้งหมด`,
    totalVideos: `📹 วิดีโอทั้งหมด`,
    success: `✅ สำเร็จ`,
    failed: `❌ ล้มเหลว`,
    loading: `⏳ กำลังโหลด...`,
    successRate: `📈 อัตราความสำเร็จ`,
    statsFailed: `ไม่สามารถรับสถิติได้`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nโพสต์ดาวน์โหลดผ่าน @topinstasaverbot`;
    },
    postUrlButton: `ลิงก์โพสต์`,
    retryButton: `🔄 ลองอีกครั้ง`,
  },

  // Korean
  ko: {
    welcome: `Insta Saver Bot에 오신 것을 환영합니다! 🎉\n\nInstagram *이미지* 또는 *릴* 또는 *스토리* 링크를 보내고 게시물을 무료로 *다운로드*하세요. ⚡️`,
    invalidLink: `잘못된 링크가 입력되었습니다 ❌`,
    downloadFailed: `콘텐츠 다운로드 실패 ☹️`,
    noContent: `콘텐츠가 비공개이거나 플랫폼에서 다운로드를 허용하지 않을 수 있습니다 😕`,
    statsTitle: `📊 *봇 통계*`,
    myStatsTitle: `📊 *귀하의 통계*`,
    totalUsers: `👥 전체 사용자`,
    totalVideos: `📹 전체 비디오`,
    success: `✅ 성공`,
    failed: `❌ 실패`,
    loading: `⏳ 로딩 중...`,
    successRate: `📈 성공률`,
    statsFailed: `통계를 가져오지 못했습니다.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\n게시물이 @topinstasaverbot을 통해 다운로드되었습니다`;
    },
    postUrlButton: `게시물 링크`,
    retryButton: `🔄 다시 시도`,
  },

  // Japanese
  ja: {
    welcome: `Insta Saver Botへようこそ！🎉\n\nInstagramの*画像*または*リール*または*ストーリー*のリンクを送信して、投稿を無料で*ダウンロード*してください。⚡️`,
    invalidLink: `無効なリンクが入力されました ❌`,
    downloadFailed: `コンテンツのダウンロードに失敗しました ☹️`,
    noContent: `コンテンツが非公開であるか、プラットフォームがダウンロードを許可していない可能性があります 😕`,
    statsTitle: `📊 *ボット統計*`,
    myStatsTitle: `📊 *あなたの統計*`,
    totalUsers: `👥 総ユーザー数`,
    totalVideos: `📹 総動画数`,
    success: `✅ 成功`,
    failed: `❌ 失敗`,
    loading: `⏳ 読み込み中...`,
    successRate: `📈 成功率`,
    statsFailed: `統計の取得に失敗しました。`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\n投稿は@topinstasaverbotを介してダウンロードされました`;
    },
    postUrlButton: `投稿リンク`,
    retryButton: `🔄 再試行`,
  },

  // Dutch
  nl: {
    welcome: `Welkom bij Insta Saver Bot! 🎉\n\nStuur een Instagram *afbeelding* of *reel* of *verhaal* link en *download* de publicatie gratis. ⚡️`,
    invalidLink: `Ongeldige link ingevoerd ❌`,
    downloadFailed: `Inhoud downloaden mislukt ☹️`,
    noContent: `Inhoud kan privé zijn of het platform staat downloaden niet toe 😕`,
    statsTitle: `📊 *Bot Statistieken*`,
    myStatsTitle: `📊 *Uw Statistieken*`,
    totalUsers: `👥 Totaal Gebruikers`,
    totalVideos: `📹 Totaal Video's`,
    success: `✅ Geslaagd`,
    failed: `❌ Mislukt`,
    loading: `⏳ Laden...`,
    successRate: `📈 Succespercentage`,
    statsFailed: `Statistieken ophalen mislukt.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPublicatie gedownload via @topinstasaverbot`;
    },
    postUrlButton: `Publicatielink`,
    retryButton: `🔄 Opnieuw proberen`,
  },

  // Romanian
  ro: {
    welcome: `Bun venit la Insta Saver Bot! 🎉\n\nTrimite un link de *imagine* sau *reel* sau *story* Instagram și *descarcă* postarea gratuit. ⚡️`,
    invalidLink: `Link invalid introdus ❌`,
    downloadFailed: `Descărcarea conținutului a eșuat ☹️`,
    noContent: `Conținutul poate fi privat sau platforma nu permite descărcarea 😕`,
    statsTitle: `📊 *Statistici Bot*`,
    myStatsTitle: `📊 *Statisticile Tale*`,
    totalUsers: `👥 Total Utilizatori`,
    totalVideos: `📹 Total Videoclipuri`,
    success: `✅ Succes`,
    failed: `❌ Eșuat`,
    loading: `⏳ Se încarcă...`,
    successRate: `📈 Rata de Succes`,
    statsFailed: `Obținerea statisticilor a eșuat.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPostare descărcată prin @topinstasaverbot`;
    },
    postUrlButton: `Link postare`,
    retryButton: `🔄 Încearcă din nou`,
  },

  // Czech
  cs: {
    welcome: `Vítejte v Insta Saver Bot! 🎉\n\nPošlete odkaz na Instagram *obrázek* nebo *reel* nebo *příběh* a *stáhněte* příspěvek zdarma. ⚡️`,
    invalidLink: `Zadán neplatný odkaz ❌`,
    downloadFailed: `Stažení obsahu se nezdařilo ☹️`,
    noContent: `Obsah může být soukromý nebo platforma neumožňuje stahování 😕`,
    statsTitle: `📊 *Statistiky Bota*`,
    myStatsTitle: `📊 *Vaše Statistiky*`,
    totalUsers: `👥 Celkem Uživatelů`,
    totalVideos: `📹 Celkem Videí`,
    success: `✅ Úspěch`,
    failed: `❌ Selhání`,
    loading: `⏳ Načítání...`,
    successRate: `📈 Míra Úspěšnosti`,
    statsFailed: `Získání statistik se nezdařilo.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nPříspěvek stažen přes @topinstasaverbot`;
    },
    postUrlButton: `Odkaz příspěvku`,
    retryButton: `🔄 Zkusit znovu`,
  },

  // Hungarian
  hu: {
    welcome: `Üdvözöljük az Insta Saver Bot-ban! 🎉\n\nKüldj egy Instagram *kép* vagy *reel* vagy *story* linket és *töltsd le* a bejegyzést ingyen. ⚡️`,
    invalidLink: `Érvénytelen hivatkozás megadva ❌`,
    downloadFailed: `A tartalom letöltése sikertelen ☹️`,
    noContent: `A tartalom lehet privát vagy a platform nem engedélyezi a letöltést 😕`,
    statsTitle: `📊 *Bot Statisztikák*`,
    myStatsTitle: `📊 *Statisztikáid*`,
    totalUsers: `👥 Összes Felhasználó`,
    totalVideos: `📹 Összes Videó`,
    success: `✅ Sikeres`,
    failed: `❌ Sikertelen`,
    loading: `⏳ Betöltés...`,
    successRate: `📈 Sikerességi Arány`,
    statsFailed: `A statisztikák lekérése sikertelen.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nBejegyzés letöltve @topinstasaverbot-on keresztül`;
    },
    postUrlButton: `Bejegyzés link`,
    retryButton: `🔄 Újrapróbálás`,
  },

  // Greek
  el: {
    welcome: `Καλώς ήρθατε στο Insta Saver Bot! 🎉\n\nΣτείλτε έναν σύνδεσμο *εικόνας* ή *reel* ή *ιστορίας* Instagram και *κατεβάστε* τη δημοσίευση δωρεάν. ⚡️`,
    invalidLink: `Εισήχθη μη έγκυρος σύνδεσμος ❌`,
    downloadFailed: `Αποτυχία λήψης περιεχομένου ☹️`,
    noContent: `Το περιεχόμενο μπορεί να είναι ιδιωτικό ή η πλατφόρμα δεν επιτρέπει τη λήψη 😕`,
    statsTitle: `📊 *Στατιστικά Bot*`,
    myStatsTitle: `📊 *Τα Στατιστικά Σας*`,
    totalUsers: `👥 Σύνολο Χρηστών`,
    totalVideos: `📹 Σύνολο Βίντεο`,
    success: `✅ Επιτυχία`,
    failed: `❌ Αποτυχία`,
    loading: `⏳ Φόρτωση...`,
    successRate: `📈 Ποσοστό Επιτυχίας`,
    statsFailed: `Αποτυχία λήψης στατιστικών.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nΗ δημοσίευση κατέβηκε μέσω @topinstasaverbot`;
    },
    postUrlButton: `Σύνδεσμος δημοσίευσης`,
    retryButton: `🔄 Δοκιμάστε ξανά`,
  },

  // Swedish
  sv: {
    welcome: `Välkommen till Insta Saver Bot! 🎉\n\nSkicka en Instagram *bild* eller *reel* eller *story* länk och *ladda ner* inlägget gratis. ⚡️`,
    invalidLink: `Ogiltig länk angiven ❌`,
    downloadFailed: `Misslyckades med att ladda ner innehåll ☹️`,
    noContent: `Innehållet kan vara privat eller plattformen tillåter inte nedladdning 😕`,
    statsTitle: `📊 *Bot-statistik*`,
    myStatsTitle: `📊 *Din Statistik*`,
    totalUsers: `👥 Totalt Användare`,
    totalVideos: `📹 Totalt Videor`,
    success: `✅ Framgång`,
    failed: `❌ Misslyckades`,
    loading: `⏳ Laddar...`,
    successRate: `📈 Framgångsfrekvens`,
    statsFailed: `Misslyckades med att hämta statistik.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nInlägg nedladdat via @topinstasaverbot`;
    },
    postUrlButton: `Inläggslänk`,
    retryButton: `🔄 Försök igen`,
  },

  // Danish
  da: {
    welcome: `Velkommen til Insta Saver Bot! 🎉\n\nSend et Instagram *billede* eller *reel* eller *historie* link og *download* indlægget gratis. ⚡️`,
    invalidLink: `Ugyldigt link indtastet ❌`,
    downloadFailed: `Download af indhold mislykkedes ☹️`,
    noContent: `Indholdet kan være privat eller platformen tillader ikke download 😕`,
    statsTitle: `📊 *Bot Statistik*`,
    myStatsTitle: `📊 *Din Statistik*`,
    totalUsers: `👥 Totalt Brugere`,
    totalVideos: `📹 Totalt Videoer`,
    success: `✅ Succes`,
    failed: `❌ Mislykket`,
    loading: `⏳ Indlæser...`,
    successRate: `📈 Succesrate`,
    statsFailed: `Kunne ikke hente statistik.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nIndlæg downloadet via @topinstasaverbot`;
    },
    postUrlButton: `Indlægslink`,
    retryButton: `🔄 Prøv igen`,
  },

  // Finnish
  fi: {
    welcome: `Tervetuloa Insta Saver Botiin! 🎉\n\nLähetä Instagram *kuva* tai *reel* tai *tarina* linkki ja *lataa* julkaisu ilmaiseksi. ⚡️`,
    invalidLink: `Virheellinen linkki syötetty ❌`,
    downloadFailed: `Sisällön lataus epäonnistui ☹️`,
    noContent: `Sisältö voi olla yksityinen tai alusta ei salli lataamista 😕`,
    statsTitle: `📊 *Botin Tilastot*`,
    myStatsTitle: `📊 *Sinun Tilastosi*`,
    totalUsers: `👥 Käyttäjiä Yhteensä`,
    totalVideos: `📹 Videoita Yhteensä`,
    success: `✅ Onnistui`,
    failed: `❌ Epäonnistui`,
    loading: `⏳ Ladataan...`,
    successRate: `📈 Onnistumisprosentti`,
    statsFailed: `Tilastojen hakeminen epäonnistui.`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\nJulkaisu ladattu @topinstasaverbot kautta`;
    },
    postUrlButton: `Julkaisulinkki`,
    retryButton: `🔄 Yritä uudelleen`,
  },

  // Chinese
  zh: {
    welcome: `欢迎使用Insta Saver Bot！🎉\n\n发送Instagram *图片*或*短视频*或*故事*链接，免费*下载*帖子。⚡️`,
    invalidLink: `输入的链接无效 ❌`,
    downloadFailed: `下载内容失败 ☹️`,
    noContent: `内容可能是私密的或平台不允许下载 😕`,
    statsTitle: `📊 *机器人统计*`,
    myStatsTitle: `📊 *您的统计*`,
    totalUsers: `👥 总用户数`,
    totalVideos: `📹 总视频数`,
    success: `✅ 成功`,
    failed: `❌ 失败`,
    loading: `⏳ 加载中...`,
    successRate: `📈 成功率`,
    statsFailed: `获取统计信息失败。`,
    postCaption: (title) => {
      const formatted = escapeMarkdown(title);
      return `${formatted}\n\n帖子通过@topinstasaverbot下载`;
    },
    postUrlButton: `帖子链接`,
    retryButton: `🔄 重试`,
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

  message += `${t.success}: ${stats.success}\n`;

  if (!isGlobal) {
    message += `${t.failed}: ${stats.failed}\n`;
    message += `${t.successRate}: ${successRate}%`;
  }

  return message;
};

module.exports = {
  languages,
  getUserLanguage,
  getTranslations,
  formatStatsMessage,
};
