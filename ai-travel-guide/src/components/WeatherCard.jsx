import React from "react";
import "../style/WeatherCard.css";

const WeatherCard = ({ location, description, temperature, humidity, wind, icon }) => {
  return (
    <div className="weather-card">
      <h3>Weather in {location}</h3>
      <div className="weather-info">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
          className="weather-icon"
        />
        <div>
          <p className="temp">{Math.round(temperature)}°C</p>
          <p className="desc">
            {description
              .split(" ")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")}
          </p>
          <p className="extra">
            Humidity: {humidity}% | Wind: {Math.round(wind)} km/h
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
