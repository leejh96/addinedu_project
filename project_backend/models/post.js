const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  content: String,
  createDate: Date,
});

module.exports = mongoose.model("post", postSchema);
