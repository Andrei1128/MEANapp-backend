const trip = require("../models/trip");

const getTrip = async (req, res) => {
  const foundTrip = await trip.findById(req.params.id);
  res.json(foundTrip);
};
const getTrips = async (req, res) => {
  const trips = await trip.find({});
  res.json(trips);
};
const addTrip = async (req, res) => {
  const newTrip = new trip(req.body);
  await newTrip.save();
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
