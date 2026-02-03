export function submitAd(adData, token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!token) {
        reject({ type: "auth", message: "OAuth token expired. Please reconnect TikTok." });
        return;
      }

      if (adData.music?.type === "existing" && adData.music.musicId === "INVALID") {
        reject({ type: "music", message: "Invalid Music ID. Please check and try again." });
        return;
      }

      if (adData.geoRestricted) {
        reject({
          type: "geo",
          message: "TikTok Ads API is not available in your region.",
        });
        return;
      }

      resolve({ success: true });
    }, 1200);
  });
}
