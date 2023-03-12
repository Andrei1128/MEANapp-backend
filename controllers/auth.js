const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
  const hash = bcrypt.hashSync(req.body.password, salt);
  const newUser = await user.create({ ...req.body, password: hash });
  const token = jwt.sign(newUser, process.env.JWT_SECRET, {
    expiresIn: 1000 * 60 * 60 * 24 * process.env.JWT_EXPIRE,
  });
  res.json(token);
};
const signIn = async (req, res) => {
  const userFound = await user.findOne({ email: req.body.email });
  if (userFound && bcrypt.compareSync(req.body.password, userFound.password)) {
    const token = jwt.sign(
      { userFound: userFound.email },
      process.env.JWT_SECRET,
      {
        expiresIn: 1000 * 60 * 60 * 24 * process.env.JWT_EXPIRE,
      }
    );
    res.json(token);
  } else res.status(400).send("Wrong password!");
};

module.exports = {
  signUp,
  signIn,
};
