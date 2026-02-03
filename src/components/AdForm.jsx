import { useState } from "react";
import MusicSelector from "./MusicSelector";

function AdForm({ onSubmit }) {
  const [campaignName, setCampaignName] = useState("");
  const [objective, setObjective] = useState("Traffic");
  const [adText, setAdText] = useState("");
  const [cta, setCta] = useState("");
  const [music, setMusic] = useState(null);
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (campaignName.trim().length < 3) {
      newErrors.campaignName = "Minimum 3 characters required";
    }

    if (!adText || adText.length > 100) {
      newErrors.adText = "Required (max 100 characters)";
    }

    if (!cta) {
      newErrors.cta = "CTA is required";
    }

    if (!music) {
      newErrors.music = "Please select a music option";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      campaignName,
      objective,
      adText,
      cta,
      music,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Ad</h2>

      <label>Campaign Name</label>
      <input
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
      />
      {errors.campaignName && (
        <div className="error-text">{errors.campaignName}</div>
      )}

      <label>Objective</label>
      <select
        value={objective}
        onChange={(e) => setObjective(e.target.value)}
      >
        <option value="Traffic">Traffic</option>
        <option value="Conversions">Conversions</option>
      </select>

      <label>Ad Text</label>
      <textarea
        value={adText}
        onChange={(e) => setAdText(e.target.value)}
      />
      {errors.adText && (
        <div className="error-text">{errors.adText}</div>
      )}

      <label>CTA</label>
      <input
        value={cta}
        onChange={(e) => setCta(e.target.value)}
      />
      {errors.cta && (
        <div className="error-text">{errors.cta}</div>
      )}

      <MusicSelector
        objective={objective}
        onMusicSelect={setMusic}
      />
      {errors.music && (
        <div className="error-text">{errors.music}</div>
      )}

      <button type="submit" style={{ marginTop: "10px" }}>
        Submit Ad
      </button>
    </form>
  );
}

export default AdForm;
