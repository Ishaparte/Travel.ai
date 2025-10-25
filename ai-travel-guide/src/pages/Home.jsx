import React from "react";
import "../style/Home.css";
import FeatureCard from "../components/FeatureCard";"../components/FeatureCard"
import About from "../components/About";
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Travel.ai</h1>
      <p>
        Plan your next adventure effortlessly!  
        Use our AI-powered itinerary builder or explore our curated travel suggestions.
      </p>
      <div className="home-buttons">
        <a href="/itinerary" className="home-btn primary-btn">Create Itinerary</a>
        <a href="/suggested" className="home-btn secondary-btn">View Trips</a>
      </div>
      
      <FeatureCard />
      <About />
    </div>
  );
};

export default Home;
