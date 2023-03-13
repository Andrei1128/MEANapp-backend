const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  trips: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "trip",
    },
  ],
});
const user = mongoose.model("user", userSchema);

module.exports = user;
