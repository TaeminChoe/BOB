const mongoose = require("mongoose");
var Schema = mongoose.Schema;
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
  store_id: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId(),
  },
  address: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
  img_url: { type: String },
});

module.exports = mongoose.model("Store", storeSchema);
