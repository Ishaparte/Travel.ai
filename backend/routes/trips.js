const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.post("/suggest", async (req, res) => {
  const { theme } = req.body;

  const prompt = `
  You are a friendly travel recommender AI.
  Suggest 5 amazing travel destinations based on the theme: "${theme}".
  For each destination, include:
  - Destination name
  - One-line highlight
  - Best time to visit

  Format the output clearly in plain text like this example:
  1. Bali, Indonesia — Tropical beaches and temples. Best time: April–October.
  2. Paris, France — Romantic city of lights. Best time: April–June, September–October.
  3. ...
  `;

  try {
    const response = await axios.post(
      `${process.env.GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      }
    );

   
    const textResponse =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No travel suggestions generated.";

    const cleaned = textResponse
      .replace(/\*\*(.*?)\*\*/g, "$1") 
      .replace(/#+/g, "") 
      .trim();

    res.json({ suggestions: cleaned });
  } catch (error) {
    console.error("Error generating suggestions:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to generate suggestions" });
  }
});

module.exports = router;
