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
  id: "string",
  date: "string",
  pw: "string",
  name: "string",
  auth: "string",
});

// Create Model & Export
module.exports = mongoose.model("User", userSchema);
