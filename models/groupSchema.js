const mongoose = require("mongoose");

// Define schema
const Schema = mongoose.Schema;

const groupmodel = new Schema({
  groupName: {
    type: String,
    required: true,
    unique: true,
  },
  groupTopic: {
    type: String,
    required: true,
    unique: false,
  },
  groupID: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: String,
    required: true,
    unique: false,
  },
  members: {
    type: Array,
    required: true,
    unique: false,
  },
});

// Compile model from schema
const GroupModel = mongoose.model("GroupModel", groupmodel);

module.exports = { GroupModel };