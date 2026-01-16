// Axios
const axios = require("axios");

// Social Downloader API config
const SDKey = process.env.SOCIAL_DOWN_KEY;
const SDHost = process.env.SOCIAL_DOWN_HOST;
const SDApiUrl = process.env.SOCIAL_DOWN_API_URL;

const fetchContentBySocialDown = async (url) => {
  try {
    const response = await axios.post(
      SDApiUrl,
      { url },
      { headers: { "x-rapidapi-key": SDKey, "x-rapidapi-host": SDHost } }
    );

    if (response.data.error) return null;

    return response.data;
  } catch {
    return null;
  }
};

module.exports = { fetchContentBySocialDown };
