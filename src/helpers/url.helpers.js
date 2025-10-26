// Instagram URL validator
const isValidInstagramUrl = (url) => {
  if (!url || typeof url !== "string") {
    return false;
  }

  const trimmedUrl = url.trim();

  // Instagram URL pattern
  const instagramPattern =
    /^(https?:\/\/)?(www\.)?(instagram\.com|instagr\.am)\/(p|reel|tv|stories)\/[A-Za-z0-9_-]+\/?/i;

  return instagramPattern.test(trimmedUrl);
};

// Instagram URL formatter
const formatInstagramUrl = (url) => {
  if (!url || typeof url !== "string") {
    return null;
  }

  let trimmedUrl = url.trim();

  // Remove protocol if exists
  trimmedUrl = trimmedUrl.replace(/^https?:\/\//, "");

  // Remove www. if exists
  trimmedUrl = trimmedUrl.replace(/^www\./, "");

  // Check if it's an Instagram URL
  if (
    trimmedUrl.startsWith("instagram.com/") ||
    trimmedUrl.startsWith("instagr.am/")
  ) {
    // Normalize to instagram.com
    const normalizedUrl = trimmedUrl.replace(/^instagr\.am/, "instagram.com");

    // Original formatted URL (without kk)
    const originalUrl = `https://www.${normalizedUrl}`;

    // Custom formatted URL (with kk)
    const customUrl = `https://www.${normalizedUrl.replace(
      /^instagram\.com/,
      "kkinstagram.com"
    )}`;

    return {
      custom: customUrl,
      original: originalUrl,
    };
  }

  return null;
};

module.exports = { formatInstagramUrl, isValidInstagramUrl };
