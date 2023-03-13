const jwt = require("jsonwebtoken");
const tokenModel = require("../models/token");

const guard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  const tokenFound = await tokenModel.findOne({ content: token });
  if (tokenFound) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.expiresIn > Date.now()) return res.sendStatus(401);
    req.user = decoded;
    next();
  } else return res.sendStatus(401);
};

module.exports = { guard };
