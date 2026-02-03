import OAuthButton from "./components/OAuthButton";
import ErrorBanner from "./components/ErrorBanner";
import { useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("tiktok_access_token")
  );

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h1>TikTok Ads Creative Flow</h1>

      {error && <ErrorBanner message={error} />}

      {!token ? (
        <OAuthButton setError={setError} setToken={setToken} />
      ) : (
        <p style={{ color: "green" }}>
          ✅ TikTok Ads account connected
        </p>
      )}
    </div>
  );
}

export default App;
