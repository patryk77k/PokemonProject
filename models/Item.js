const mongoose = require("mongoose");

const { Schema } = mongoose;

const Item = new Schema({
  id: {
    type: String,
  },
  name: {
    type: Object,
  },
  type: {
    type: Array,
  },
  base: {
    type: Object,
  },
});

module.exports = mongoose.model("Item", Item);
