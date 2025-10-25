const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.post("/generate", async (req, res) => {
  const { destination, travelDates, interests } = req.body;

  const prompt = `
  You are an expert AI travel planner.
  Create a detailed, engaging travel itinerary for ${destination} for ${travelDates}.
  The traveler is interested in: ${interests.join(", ")}.

  Please write the itinerary in natural, human-readable paragraphs,
  organized day-wise (Day 1, Day 2, etc.).
  Include morning, afternoon, and evening activities with short descriptions.
  Do NOT return it in JSON or any code format.
  `;

  try {
    const response = await axios.post(
      `${process.env.GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }
    );

    const textResponse =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";

    
    const cleanedText = textResponse.replace(/\*\*(.*?)\*\*/g, "$1").replace(/#/g, "");

    res.json({ itinerary: cleanedText });
  } catch (error) {
    console.error("Error generating itinerary:", error.response?.data || error.message);
    res.status(500).json({
      message: "Error generating itinerary",
      error: error.message,
    });
  }
});

module.exports = router;
