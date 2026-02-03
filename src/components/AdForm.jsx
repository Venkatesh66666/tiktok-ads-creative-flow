import { useState } from "react";

function AdForm({ onSubmit }) {
  const [campaignName, setCampaignName] = useState("");
  const [objective, setObjective] = useState("Traffic");
  const [adText, setAdText] = useState("");
  const [cta, setCta] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (campaignName.trim().length < 3) {
      newErrors.campaignName =
        "Campaign name must be at least 3 characters";
    }

    if (!adText || adText.length > 100) {
      newErrors.adText =
        "Ad text is required and must be under 100 characters";
    }

    if (!cta) {
      newErrors.cta = "CTA is required";
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
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Ad</h2>

      <div>
        <label>Campaign Name</label>
        <input
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
        />
        {errors.campaignName && (
          <p style={{ color: "red" }}>{errors.campaignName}</p>
        )}
      </div>

      <div>
        <label>Objective</label>
        <select
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
        >
          <option value="Traffic">Traffic</option>
          <option value="Conversions">Conversions</option>
        </select>
      </div>

      <div>
        <label>Ad Text</label>
        <textarea
          value={adText}
          onChange={(e) => setAdText(e.target.value)}
        />
        {errors.adText && (
          <p style={{ color: "red" }}>{errors.adText}</p>
        )}
      </div>

      <div>
        <label>CTA</label>
        <input
          value={cta}
          onChange={(e) => setCta(e.target.value)}
        />
        {errors.cta && (
          <p style={{ color: "red" }}>{errors.cta}</p>
        )}
      </div>

      <button type="submit">Next</button>
    </form>
  );
}

export default AdForm;
