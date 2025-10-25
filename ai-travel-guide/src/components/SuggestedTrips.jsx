import React, { useState } from "react";
import axios from "axios";
import "../style/SuggestedTrips.css";
import FeatureCard from "./FeatureCard";
import About from "./About";

const SuggestedTrips = () => {
  const [theme, setTheme] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSuggest = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuggestions("");

    try {
      const res = await axios.post("http://localhost:5000/api/trips/suggest", { theme });
    
      setSuggestions(res.data.suggestions || "No suggestions found.");
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      alert("Failed to get suggestions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="suggested-container">
      <h2>Explore Curated & AI-Generated Trips</h2>

      <form onSubmit={handleSuggest} className="suggest-form">
        <input
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="Enter a theme (e.g. adventure, romantic, cultural)"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Suggest Trips"}
        </button>
      </form>

      {loading && <p className="loading">Fetching suggestions...</p>}

      {!loading && suggestions && (
        <div className="suggestions-box">
          <pre>{suggestions}</pre>
        </div>
      )}
      <FeatureCard />
      <About />
    </div>
  );
};

export default SuggestedTrips;
