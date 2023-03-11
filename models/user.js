const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
});
const user = mongoose.model("user", userSchema);

module.exports = user;
