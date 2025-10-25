import React, { useState } from "react";
import axios from "axios";
import "../style/ItineraryBuilder.css";
import WeatherCard from "../components/WeatherCard";

const ItineraryBuilder = () => {
  const [destination, setDestination] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [interests, setInterests] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setItinerary("");
    setWeather(null);
    setWeatherError(false);

    try {
     
      const response = await axios.post("http://localhost:5000/api/itinerary/generate", {
        destination,
        travelDates,
        interests: interests.split(",").map((i) => i.trim()),
      });
      setItinerary(response.data.itinerary);

      
      try {
        const weatherResponse = await axios.get(`http://localhost:5000/api/weather/${destination}`);
        setWeather(weatherResponse.data);
      } catch (err) {
        console.warn("Weather not found for this location.");
        setWeatherError(true);
      }
    } catch (err) {
      console.error(" Error generating itinerary:", err);
      alert("Error generating itinerary. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="itinerary-container">
      <h2> Create Your Personalized Itinerary</h2>

      <form className="itinerary-form" onSubmit={handleSubmit}>
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            placeholder="Enter city or country"
          />
        </label>

        <label>
          Travel Dates:
          <input
            type="text"
            value={travelDates}
            onChange={(e) => setTravelDates(e.target.value)}
            required
            placeholder="e.g., 3 days, July 10–13"
          />
        </label>

        <label>
          Interests (comma separated):
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
            placeholder="e.g., adventure, food, culture"
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Itinerary"}
        </button>
      </form>

      {loading && <p className="loading"> Generating your itinerary...</p>}

      {weather && (
  <div className="weather-section">
    <h3>Current Weather in {destination}</h3>
    <WeatherCard
      location={destination}
      description={weather.weather[0].description}
      temperature={weather.main.temp}
      humidity={weather.main.humidity}
      wind={weather.wind.speed}
      icon={weather.weather[0].icon}
    />
  </div>
)}

      {weatherError && (
        <p className="weather-error">⚠ Unable to fetch weather for this location.</p>
      )}

      
      {itinerary && (
        <div className="itinerary-output">
          <h3> Your Itinerary:</h3>
          <div className="itinerary-text">
            {itinerary.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItineraryBuilder;
