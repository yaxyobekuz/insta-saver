// URL ni tozalash (query parametrlarni olib tashlash)
const cleanUrl = (rawUrl) => {
  try {
    const urlObj = new URL(
      rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`
    );
    return `${urlObj.origin}${urlObj.pathname}`.replace(/\/$/, "");
  } catch {
    return rawUrl.split("?")[0].replace(/\/$/, "");
  }
};

// Platform va media turi aniqlovchi funksiya
const detectPlatform = (url) => {
  if (typeof url !== "string") return { success: false };
  const trimmedUrl = url.trim();
  const cleaned = cleanUrl(trimmedUrl);

  // Instagram
  const instagramPattern =
    /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/(p|reel|reels|tv|stories)\/([A-Za-z0-9_-]+)/i;
  const instagramMatch = trimmedUrl.match(instagramPattern);
  if (instagramMatch) {
    const type = instagramMatch[1].toLowerCase();
    let mediaType = "post";

    if (type === "reel") mediaType = "video";
    else if (type === "reels") mediaType = "video";
    else if (type === "tv") mediaType = "video";
    else if (type === "stories") mediaType = "story";
    else if (type === "p") mediaType = "post";

    return {
      success: true,
      platform: "Instagram",
      mediaType: mediaType,
      postType: type,
      cleanedUrl: cleaned,
      shortcode: instagramMatch[2],
    };
  }

  // TikTok
  const tiktokPattern =
    /(?:https?:\/\/)?(?:www\.|vm\.|vt\.)?tiktok\.com\/(@[\w.-]+\/video\/\d+|[\w-]+)/i;
  const tiktokShortPattern =
    /(?:https?:\/\/)?(?:vm\.|vt\.)tiktok\.com\/([\w]+)/i;
  if (
    false &&
    (tiktokPattern.test(trimmedUrl) || tiktokShortPattern.test(trimmedUrl))
  ) {
    return {
      success: true,
      platform: "TikTok",
      mediaType: "video",
      postType: "video",
      cleanedUrl: cleaned,
    };
  }

  // YouTube
  const youtubePattern =
    /(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/i;
  const youtubeMatch = trimmedUrl.match(youtubePattern);
  if (youtubeMatch && false) {
    const isShort = trimmedUrl.includes("/shorts/");
    return {
      success: true,
      platform: "YouTube",
      mediaType: "video",
      postType: isShort ? "short" : "video",
      cleanedUrl: cleaned,
      videoId: youtubeMatch[1],
    };
  }

  // Twitter / X
  const twitterPattern =
    /(?:https?:\/\/)?(?:www\.|mobile\.)?(?:twitter\.com|x\.com)\/([\w]+)\/status\/(\d+)/i;
  const twitterMatch = trimmedUrl.match(twitterPattern);
  if (twitterMatch && false) {
    return {
      success: true,
      platform: "Twitter/X",
      mediaType: "post",
      postType: "tweet",
      cleanedUrl: cleaned,
      username: twitterMatch[1],
      tweetId: twitterMatch[2],
    };
  }

  // LinkedIn
  const linkedinPattern =
    /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/posts\/([\w-]+)/i;
  if (linkedinPattern.test(trimmedUrl) && false) {
    return {
      success: true,
      platform: "LinkedIn",
      mediaType: "post",
      postType: "post",
      cleanedUrl: cleaned,
    };
  }

  return {
    success: false,
    providedUrl: trimmedUrl,
  };
};

module.exports = { detectPlatform };
