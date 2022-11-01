const mongoose = require("mongoose");

/**
 * @name userSchema
 * @description 유저 정보에 대한 스키마입니다.
 * @param {String} id 아이디
 * @param {String} pw 비밀번호
 * @param {String} name 이름
 * @param {String} auth 권한
 * @param {String} date 가입날짜
 */
const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  date: { type: Date, default: Date.now },
  pw: { type: String, required: true },
  name: { type: String, required: true },
  auth: { type: String, required: true },
});

// Create Model & Export
module.exports = mongoose.model("User", userSchema);
