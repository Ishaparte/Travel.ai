const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  destination: String,
  highlights: [String],
  bestTimeToVisit: String,
  imageUrl: String
});

module.exports = mongoose.model('Trip', tripSchema);
