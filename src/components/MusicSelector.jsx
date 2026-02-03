import { useState } from "react";

function MusicSelector({ objective, onMusicSelect }) {
  const [type, setType] = useState("");
  const [musicId, setMusicId] = useState("");
  const [error, setError] = useState(null);

  function handleTypeChange(e) {
    const value = e.target.value;
    setType(value);
    setMusicId("");
    setError(null);

    if (value === "none" && objective === "Conversions") {
      setError("Music is required for Conversion campaigns.");
    }
  }

  function validateAndSubmit() {
    if (type === "existing" && !musicId) {
      setError("Please enter a valid Music ID.");
      return;
    }

    if (type === "upload") {
      const generatedId = "MOCK_MUSIC_" + Date.now();
      onMusicSelect({ type, musicId: generatedId });
      return;
    }

    if (type === "none" && objective === "Conversions") {
      setError("Music is required for Conversion campaigns.");
      return;
    }

    onMusicSelect({ type, musicId: musicId || null });
  }

  return (
    <div>
      <h3>Music Selection</h3>

      <select value={type} onChange={handleTypeChange}>
        <option value="">Select Music Option</option>
        <option value="existing">Existing Music ID</option>
        <option value="upload">Upload / Custom Music</option>
        <option value="none">No Music</option>
      </select>

      {type === "existing" && (
        <input
          placeholder="Enter Music ID"
          value={musicId}
          onChange={(e) => setMusicId(e.target.value)}
        />
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="button" onClick={validateAndSubmit}>
        Save Music
      </button>
    </div>
  );
}

export default MusicSelector;
