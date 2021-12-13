const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  createDate: Date,
});

module.exports = mongoose.model("user", userSchema);
