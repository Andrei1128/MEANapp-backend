function tripValidator(req, res, next) {
  const trip = req.body;
  const regex = /^[1-5]$/;
  if (
    trip.name.length >= 6 &&
    trip.country.length >= 4 &&
    regex.test(trip.rating) &&
    trip.expenses >= 0
  )
    next();
  else res.status(400).send("Validators required!");
}

module.exports = { tripValidator };
