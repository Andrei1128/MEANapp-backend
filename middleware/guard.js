const jwt = require("jsonwebtoken");

function guard(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded.exp > Date.now()) return res.sendStatus(401);
  req.user = decoded;
  next();
}

module.exports = { guard };
