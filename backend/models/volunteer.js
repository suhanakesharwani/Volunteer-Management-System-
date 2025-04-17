// backend/models/Volunteer.js
const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  event: { type: String, required: true },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
