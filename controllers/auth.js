const user = require("../models/user");
const tokenModel = require("../models/token");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  if (await user.findOne({ email: req.body.email }))
    return res.status(400).send("Email used!");
  const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
  const hash = bcrypt.hashSync(req.body.password, salt);
  const newUser = await user.create({ ...req.body, password: hash });
  const token = jwt.sign(
    { user: newUser, expiresIn: 1000 * 60 * 60 * 24 * process.env.JWT_EXPIRE },
    process.env.JWT_SECRET
  );
  await tokenModel.create({ content: token });
  res.json(token);
};
const signIn = async (req, res) => {
  const userFound = await user.findOne({ email: req.body.email });
  if (!userFound) res.status(401).send("Email not found!");
  else if (bcrypt.compareSync(req.body.password, userFound.password)) {
    const token = jwt.sign(
      {
        user: userFound,
        expiresIn: 1000 * 60 * 60 * 24 * process.env.JWT_EXPIRE,
      },
      process.env.JWT_SECRET
    );
    await tokenModel.create({ content: token });
    res.json(token);
  } else res.status(401).send("Wrong password!");
};

module.exports = {
  signUp,
  signIn,
};
