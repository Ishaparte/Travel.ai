const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:city', async (req, res) => {
  const city = req.params.city;

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}&units=metric`);
    res.json(response.data);
  } catch (err) {
    res.status(500).send('Error fetching weather');
  }
});

module.exports = router;
