import { initiateOAuth, exchangeCodeForToken } from "../services/oauth";
import { useEffect } from "react";

function OAuthButton({ setError, setToken }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const error = params.get("error");

    if (error) {
      setError("TikTok authorization failed. Please try again.");
      return;
    }

    if (code) {
      exchangeCodeForToken(code)
        .then((token) => {
          localStorage.setItem("tiktok_access_token", token);
          setToken(token);
          window.history.replaceState({}, document.title, "/");
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, []);

  return (
    <button onClick={initiateOAuth}>
      🔐 Connect TikTok Ads Account
    </button>
  );
}

export default OAuthButton;
