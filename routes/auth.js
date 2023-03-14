const express = require("express");
const router = express.Router();

const { signIn, signUp, logout } = require("../controllers/auth");
const { userValidator } = require("../middleware/userValidator");

router.post("/signin", userValidator, signIn);
router.post("/signup", userValidator, signUp);
router.delete("/logout", logout);

module.exports = router;
