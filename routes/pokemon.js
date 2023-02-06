const express = require("express");
const router = express.Router();
const { getAllPokemon, getOnePokemon } = require("../controllers/pokemon");

router.route("/pokemon").get(getAllPokemon);
router.route("/pokemon/:id").get(getOnePokemon);

module.exports = router;
