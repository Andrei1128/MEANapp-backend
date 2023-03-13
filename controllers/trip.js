const trip = require("../models/trip");
const user = require("../models/user");

const getTrip = async (req, res) => {
  const foundTrip = await trip.findById(req.params.id);
  res.json(foundTrip);
};
const getTrips = async (req, res) => {
  userFound = await user.findOne({ _id: req.user.user._id }).populate("trips");
  res.json(userFound.trips);
};
const addTrip = async (req, res) => {
  const userFound = await user.findOne({ _id: req.user.user._id });
  const newTrip = new trip(req.body);
  await newTrip.save();
  userFound.trips.push(newTrip);
  await userFound.save();
  res.json(newTrip);
};
const updateTrip = async (req, res) => {
  await trip.findByIdAndUpdate(req.params.id, req.body);
  res.json();
};
const deleteTrip = async (req, res) => {
  await trip.findByIdAndDelete(req.params.id);
  res.json();
};

module.exports = {
  getTrip,
  getTrips,
  addTrip,
  updateTrip,
  deleteTrip,
};
