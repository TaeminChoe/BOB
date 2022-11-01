const User = require("./models/user");
const Board = require("./models/board");

/**
 * @name serviceDB
 * @file 라우터의 요청을 받아 DB를 조회/조작하는 모듈입니다.
 */

/* ----------User Start --------- */
/* 전체 User 리스트 조회하기 */
const userFind = () => {
  return User.find({});
};

/* 특정 User 조회하기 */
const userFindOne = (payload) => {
  const { id } = payload;
  return User.findOne({ id });
};

// 신규 User 추가
const userSave = (data) => {
  const newUser = new User(data);
  return newUser.save({});
};

/* ----------User End --------- */
/* ----------Board Start --------- */
// 전체 게시물 조회
const boardFind = () => {
  return Board.find({});
};

const boardFindOne = (payload) => {
  const { board_id } = payload;
  return Board.findOne({ board_id });
};

// 게시물 작성
const boardSave = (data) => {
  const newBoard = new Board(data);
  return newBoard.save({});
};

/* ----------Board End --------- */
module.exports = {
  userFind,
  userFindOne,
  userSave,
  boardFind,
  boardFindOne,
  boardSave,
};
