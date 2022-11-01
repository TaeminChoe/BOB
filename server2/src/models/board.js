const mongoose = require("mongoose");
var Schema = mongoose.Schema;
/**
 * @name boardSchema
 * @description 게시판 게시글에 대한 스키마입니다.
 * @param {String} board_id 게시글 아이디
 * @param {String} author 게시글 작성자
 * @param {String} date 게시글 작성날짜
 * @param {String} title 게시글 제목
 * @param {String} description 게시글 내용
 */
const boardSchema = new mongoose.Schema({
  board_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Board", boardSchema);
