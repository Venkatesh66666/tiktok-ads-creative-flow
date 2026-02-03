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
  const [loading, setLoading] = useState(false);

  async function handleAdSubmit(adData) {
    setError(null);
    setLoading(true);

    try {
      await submitAd(adData, token);
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h1>TikTok Ads Creative Flow</h1>

      {error && <ErrorBanner message={error} />}

      {!token && (
        <OAuthButton setError={setError} setToken={setToken} />
      )}

      {token && !submitted && (
        <AdForm onSubmit={handleAdSubmit} loading={loading} />
      )}

      {submitted && (
        <p style={{ color: "green" }}>
          ✅ Ad submitted successfully
        </p>
      )}
    </div>
  );
}

export default App;
