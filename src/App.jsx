import { useState } from "react";
import OAuthButton from "./components/OAuthButton";
import ErrorBanner from "./components/ErrorBanner";
import AdForm from "./components/AdForm";
import { submitAd } from "./services/tiktokApi";

function App() {
  const [error, setError] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("tiktok_access_token")
  );
  const [submitted, setSubmitted] = useState(false);

  async function handleAdSubmit(adData) {
    setError(null);
    try {
      await submitAd(adData, token);
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div
      style={{
        background: "#ffffff",
        width: "420px",
        padding: "28px",
        borderRadius: "14px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        TikTok Ads Creative Flow
      </h1>

      {error && <ErrorBanner message={error} />}

      {!token && (
        <OAuthButton setError={setError} setToken={setToken} />
      )}

      {token && !submitted && (
        <AdForm onSubmit={handleAdSubmit} />
      )}

      {submitted && (
        <p
          style={{
            textAlign: "center",
            color: "green",
            fontWeight: "600",
          }}
        >
          ✅ Ad submitted successfully
        </p>
      )}
    </div>
  );
}

export default App;
