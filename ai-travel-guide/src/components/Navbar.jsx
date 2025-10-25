import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => navigate("/")}>
        <img src="/logo.png" alt="Logo" className="logo-image" />
        Travel.ai
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/itinerary"
            className={location.pathname === "/itinerary" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Itinerary Builder
          </Link>
        </li>

        <li>
          <Link
            to="/suggested"
            className={location.pathname === "/suggested" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Suggested Trips
          </Link>
        </li>

        
        <div className="mobile-auth">
          {user ? (
            <>
              <span className="nav-username">Welcome, {user.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="auth-link" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/signup" className="auth-link signup-btn" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </ul>

      
      <div className="nav-auth">
        {user ? (
          <>
            <span className="nav-username">Welcome, {user.name}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="auth-link">
              Login
            </Link>
            <Link to="/signup" className="auth-link signup-btn">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
