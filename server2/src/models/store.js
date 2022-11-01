const mongoose = require("mongoose");
/**
 * @name storeSchema
 * @description 제휴점에 대한 스키마입니다.
 * @param {String} store_id 제휴점 아이디
 * @param {String} address 제휴점 주소
 * @param {String} name 제휴점 이름
 * @param {String} date 제휴점 생성 날짜
 * @param {String} phone_number 제휴점 번호
 * @param {String} description 제휴점 설명
 * @param {String} img_url 이미지 경로
 */
const storeSchema = new mongoose.Schema({
  store_id: "string",
  address: "string",
  name: "string",
  date: "string",
  description: "string",
  img_url: "string",
});

module.exports = mongoose.model("Board", storeSchema);
