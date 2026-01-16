// Axios
const axios = require("axios");

// Social Downloader API config
const ILKey = process.env.INSTA_LOOTER_KEY;
const ILHost = process.env.INSTA_LOOTER_HOST;
const ILApiUrl = process.env.INSTA_LOOTER_API_URL;

const fetchReelByInstaLooter = async (url) => {
  try {
    const response = await axios(ILApiUrl, {
      method: "GET",
      params: { url },
      headers: { "x-rapidapi-key": ILKey, "x-rapidapi-host": ILHost },
    });

    // Single video
    if (typeof response.data.video_url === "string") {
      return {
        url,
        error: false,
        type: "single",
        source: "instagram",
        title: "Instagram Video 📹",
        medias: [{ url: response.data.video_url, type: "video" }],
      };
    }

    // Single video
    if (typeof response.data.display_url === "string") {
      return {
        url,
        error: false,
        type: "single",
        source: "instagram",
        title: "Images may be limited due to download issues 😕",
        medias: [{ url: response.data.display_url, type: "image" }],
      };
    }

    return null;
  } catch {
    return null;
  }
};

module.exports = { fetchReelByInstaLooter };
