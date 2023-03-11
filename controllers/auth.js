const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const token = jwt.sign({ foo: "bar" }, "shhhhh");
  const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
  const hash = bcrypt.hashSync(req.body.password, salt);
  const newUser = await user.create({ ...req.body, password: hash });
  res.json(newUser);
};
const signIn = async (req, res) => {
  const userFound = await user.findOne({ email: req.body.email });
  if (userFound && bcrypt.compareSync(req.body.password, userFound.password))
    res.json(userFound);
  else res.status(403).send("Wrong password!");
};

module.exports = {
  signUp,
  signIn,
};
