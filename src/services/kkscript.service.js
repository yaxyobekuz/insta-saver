// Axios
const axios = require("axios");

const toKkInstagram = (url) => {
  if (typeof url !== "string") return "";

  const trimmed = url.trim();

  if (!trimmed) return "";

  const replaced = trimmed
    .replace(
      /^https?:\/\/(www\.)?instagram\.com\//i,
      "https://kkinstagram.com/"
    )
    .replace(
      /^https?:\/\/(www\.)?kkinstagram\.com\//i,
      "https://kkinstagram.com/"
    );

  const noHash = replaced.split("#")[0];
  const [base, query = ""] = noHash.split("?");
  const baseWithSlash = base.endsWith("/") ? base : `${base}/`;

  const params = new URLSearchParams(query);
  params.set("_kk", "1");

  return `${baseWithSlash}?${params.toString()}`;
};

const fetchReelByKKScript = async (url) => {
  try {
    const response = await axios(toKkInstagram(url));
    if (typeof response.data.url !== "string") return null;
    return {
      url,
      error: false,
      type: "single",
      source: "instagram",
      title: "Instagram Reel",
      medias: [{ url: response.data.url, type: "video" }],
    };
  } catch {
    return null;
  }
};

module.exports = { fetchReelByKKScript };
