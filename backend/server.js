const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/itinerary', require('./routes/itinerary'));
app.use('/api/trips', require('./routes/trips'));
app.use('/api/weather', require('./routes/weather'));
app.use('/api/auth', require('./routes/auth'));


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(5000, () => console.log('Server running on port 5000'));
