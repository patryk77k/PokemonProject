const Item = require("../models/Item");

const getAllPokemon = async (req, res) => {
  try {
    const allPokemon = await Item.find();
    res.status(201).send(allPokemon);
  } catch (err) {
    console.log(err.message);
  }
};

const getOnePokemon = async (req, res) => {
  const { id } = req.params;
  const onePokemon = await Item.findById(id);
  res.status(200).send(onePokemon);
  try {
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { getAllPokemon, getOnePokemon };
