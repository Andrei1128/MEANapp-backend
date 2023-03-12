const express = require("express");
const router = express.Router();

const { getProfile } = require("../controllers/profile");
const { guard } = require("../middleware/guard");

router.get("/", guard, getProfile);

module.exports = router;
