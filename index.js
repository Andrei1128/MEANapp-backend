require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/trip", require("./routes/trip"));
app.use("/auth", require("./routes/auth"));
app.use("/profile", require("./routes/profile"));

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
