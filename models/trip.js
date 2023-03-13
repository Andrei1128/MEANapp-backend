const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  rating: { type: Number, required: true },
  expenses: { type: Number, required: true },
  notes: { type: String },
  image: { type: String },
});
const trip = mongoose.model("trip", tripSchema);

module.exports = trip;
