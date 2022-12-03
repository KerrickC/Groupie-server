const mongoose = require("mongoose");

// Define schema
const Schema = mongoose.Schema;

const usermodel = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: {
    type: String,
    required: true,
    unique: false,
  },
  ownedGroups: {
    type: Array,
    required: true,
    unique: false,
  },
  memberGroups: {
    type: Array,
    required: true,
    unique: false,
  },
  verified: {
    type: Boolean,
    required: true,
    unique: false,
  },
});

// Compile model from schema
const UserModel = mongoose.model("UserModel", usermodel);

module.exports = { UserModel };
