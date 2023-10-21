const { Sede } = require("../../models");

const registerSede = async (req, res) => {
  try {
    const newSede = req.body;
    await Sede.create(newSede);
    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { registerSede };
