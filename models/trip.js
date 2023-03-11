const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const tripSchema = new mongoose.Schema({
  name: { type: String },
  country: { type: String },
  rating: { type: Number },
  expenses: { type: Number },
  notes: { type: String },
});
const trip = mongoose.model("trip", tripSchema);

module.exports = trip;
