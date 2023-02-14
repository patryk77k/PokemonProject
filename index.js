require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const db = require("./db/db");
const pokemonRoute = require("./routes/pokemon");

app.use(cors());

db();

app.use("/", pokemonRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
