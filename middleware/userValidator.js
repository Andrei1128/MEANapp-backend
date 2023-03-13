function userValidator(req, res, next) {
  const user = req.body;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(user.email) && user.password.length >= 8) {
    next();
  } else res.status(401).send("Eroare");
}

module.exports = { userValidator };
