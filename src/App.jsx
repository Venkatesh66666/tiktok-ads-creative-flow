import { useState } from "react";
import OAuthButton from "./components/OAuthButton";
import ErrorBanner from "./components/ErrorBanner";
import AdForm from "./components/AdForm";

function App() {
  const [error, setError] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("tiktok_access_token")
  );
  const [adData, setAdData] = useState(null);

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h1>TikTok Ads Creative Flow</h1>

      {error && <ErrorBanner message={error} />}

      {!token && (
        <OAuthButton setError={setError} setToken={setToken} />
      )}

      {token && !adData && (
        <AdForm onSubmit={setAdData} />
      )}

      {adData && (
        <p style={{ color: "green" }}>
          Ad details saved successfully
        </p>
      )}
    </div>
  );
}

export default App;
