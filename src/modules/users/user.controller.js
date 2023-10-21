const { User } = require("../../models");

const registerUser = async (req, res) => {
  try {
    const newUser = req.body;
    await User.create(newUser);
    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { registerUser };
