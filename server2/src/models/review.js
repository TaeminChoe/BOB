const mongoose = require("mongoose");
var Schema = mongoose.Schema;
/**
 * @name reviewSchema
 * @description 리뷰 스키마입니다.
 * @param {String} review_id 리뷰 고유 아이디
 * @param {String} user_id 리뷰 작성자 아이디
 * @param {String} store_id 리뷰 제휴점
 * @param {String} date 리뷰 작성날짜
 * @param {Object} rating 별점 집합
 * @param {Number} rating.taste 별점-맛
 * @param {Number} rating.clean 별점-청결
 * @param {Number} rating.mood 별점-분위기
 * @param {String} description 리뷰 내용
 */
const reviewSchema = new mongoose.Schema({
  review_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  user_id: { type: String, required: true },
  store_id: { type: String, required: true },
  date: { type: Date, default: Date.now },
  rating: { type: Object, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Review", reviewSchema);
