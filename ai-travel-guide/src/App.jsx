import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ItineraryBuilder from "./components/ItineraryBuilder";
import SuggestedTrips from "./components/SuggestedTrips";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/itinerary" element={<ItineraryBuilder />} />
        <Route path="/suggested" element={<SuggestedTrips />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
