const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  createDate: { type: Date, required: true },
});
//첫번째 인수 collection 이름 기본이 복수형이라 users로 저장됨
module.exports = mongoose.model("user", userSchema);
