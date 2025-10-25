import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaGlobeAsia } from "react-icons/fa";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-brand">
          <h3>Travel.ai</h3>
          <p>Discover. Explore. Experience.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/suggested-trips">Suggested Trips</a></li>
            <li><a href="/itinerary">Plan Trip</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        
        <div className="footer-social">
          <h4>Connect with Us</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AI Travel Guide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
