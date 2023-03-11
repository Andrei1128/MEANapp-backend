const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const tokenSchema = new mongoose.Schema({
  content: { type: String, unique: true },
});
const token = mongoose.model("token", tokenSchema);

module.exports = token;
