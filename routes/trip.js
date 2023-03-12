const express = require("express");
const router = express.Router();

const {
  getTrip,
  getTrips,
  updateTrip,
  deleteTrip,
  addTrip,
} = require("../controllers/trip");

const { auth } = require("../middleware/auth");

router.get("/", auth, getTrips);
router.get("/:id", getTrip);
router.post("/", addTrip);
router.put("/:id", updateTrip);
router.delete("/:id", deleteTrip);

module.exports = router;
