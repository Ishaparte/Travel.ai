import React from "react";
import "../style/FeatureCard.css";

const features = [
  {
    title: "Smart Trip Planning",
    description:
      "Plan your dream vacation effortlessly with AI-powered itineraries tailored to your budget, preferences, and travel style.",
    image:
      "image1.avif",
  },
  {
    title: "Real-Time Weather Insights",
    description:
      "Stay updated with live weather forecasts to make informed travel decisions and pack perfectly for every destination.",
    image:
      "image2.avif",
  },
  {
    title: "Curated Recommendations",
    description:
      "Explore hidden gems, must-see attractions, and local favorites — all handpicked and updated regularly by our travel experts.",
    image:
      "image3.avif",
  },
  {
    title: "Seamless Experience",
    description:
      "Enjoy a sleek, user-friendly interface that lets you discover, plan, and book all in one place — without the hassle.",
    image:
      "image4.avif",
  },
];

const FeatureCard = () => {
  return (
    <section className="features-section">
      <h2> Our Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${
              index % 2 === 0 ? "left-layout" : "right-layout"
            }`}
          >
            <div className="feature-image">
              <img src={feature.image} alt={feature.title} />
            </div>
            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCard;
