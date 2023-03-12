const express = require("express");
const router = express.Router();

const {
  getTrip,
  getTrips,
  updateTrip,
  deleteTrip,
  addTrip,
} = require("../controllers/trip");

const { guard } = require("../middleware/guard");
const { tripValidator } = require("../middleware/tripValidator");

router.get("/", guard, getTrips);
router.get("/:id", guard, getTrip);
router.post("/", guard, tripValidator, addTrip);
router.put("/:id", guard, tripValidator, updateTrip);
router.delete("/:id", guard, deleteTrip);

module.exports = router;
