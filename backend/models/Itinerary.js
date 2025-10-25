const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  userPreferences: {
    destination: String,
    travelDates: String,
    interests: [String]
  },
  itinerary: Array, 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Itinerary', itinerarySchema);
