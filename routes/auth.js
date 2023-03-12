const express = require("express");
const router = express.Router();

const { signIn, signUp } = require("../controllers/auth");
const { userValidator } = require("../middleware/userValidator");

router.post("/signin", userValidator, signIn);
router.post("/signup", signUp);

module.exports = router;
