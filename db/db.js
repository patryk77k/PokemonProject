const mongoose = require("mongoose");

const db = async (req, res) => {
  try {
    const URI = process.env.URI_MONGODB;
    mongoose.set("strictQuery", true);
    mongoose.connect(URI);
    console.log("connected to db");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("could not connect to db");
  }
};

module.exports = db;
