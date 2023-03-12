const getProfile = (req, res) => {
  res.json(req.user.user);
};

module.exports = {
  getProfile,
};
