const CLIENT_ID = "YOUR_CLIENT_ID";
const REDIRECT_URI = "http://localhost:5173/";
const SCOPES = "ads.read,ads.write";

export function initiateOAuth() {
  const authUrl = `https://www.tiktok.com/v2/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&response_type=code&scope=${SCOPES}&state=secure_state`;

  window.location.href = authUrl;
}

export function exchangeCodeForToken(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (code === "invalid") {
        reject(
          new Error("Invalid authorization code. Please re-connect TikTok.")
        );
      } else if (code === "expired") {
        reject(
          new Error("Authorization expired. Please reconnect your account.")
        );
      } else {
        resolve("mock_access_token_123456");
      }
    }, 1000);
  });
}
