const mongoose = require("mongoose");

const medSchema = new mongoose.Schema({
  authorization_holder: {
    type: String,
  },
  cis_code: {
    type: String,
  },
  composition: [Object],
  generic_groups: [String],
  iab: [Object],
  iab_improvements: [Object],
  id: {
    type: Number,
  },
  presentations: [Object],
  title: {
    type: String,
  },
});

module.exports = mongoose.model("Med", medSchema);
