// backend/routes/volunteerRoutes.js
const express = require("express");
const Volunteer = require("./models/Volunteer");
const router = express.Router();

// Add a volunteer
router.post("/", async (req, res) => {
  const { name, email, phone, event } = req.body;

  const newVolunteer = new Volunteer({ name, email, phone, event });

  try {
    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding volunteer", error });
  }
});

// Get all volunteers
router.get("/", async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching volunteers", error });
  }
});

module.exports = router;
