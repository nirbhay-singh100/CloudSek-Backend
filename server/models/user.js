const mongoose = require("mongoose");
const conn = require("../config/dbConn");

//
//
// Creating Schema for User Collection
//
//
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

//
//
// Using the above schema to create a collection in the database
//
//
const User = new mongoose.model("user", userSchema);
module.exports = User;
