function userValidator(req, res, next) {
  const user = req.body;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(user.email) && user.password.length >= 8) {
    next();
  } else res.res.status(400).send("Validators required!");
}

module.exports = { userValidator };
