const User = require("./models/user");
const Board = require("./models/board");
const Store = require("./models/store");
const Review = require("./models/review");

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

// 상세 게시물 조회
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
/* ----------Store Start --------- */
// 전체 제휴점 조회
const storeFind = () => {
  return Store.find({});
};

// 상세 제휴점 조회
const storeFindOne = (payload) => {
  const { store_id } = payload;
  return Store.findOne({ store_id });
};

// 제휴점 생성
const storeSave = (data) => {
  const newStore = new Store(data);
  return newStore.save({});
};

/* ----------Store End --------- */
/* ----------Review Start --------- */
// 특정 리뷰 조회
const reviewFind = (payload) => {
  const { search_type, search_value } = payload;
  return Review.find().where(search_type).equals(search_value);
};
// 리뷰 생성
const reviewSave = (payload) => {
  const newReview = new Review(payload);
  return newReview.save({});
};

// 리뷰 삭제
const reviewRemove = (payload) => {
  const { review_id } = payload;
  return Review.remove().where("review_id").equals(review_id);
};
/* ----------Review End --------- */
module.exports = {
  userFind,
  userFindOne,
  userSave,
  boardFind,
  boardFindOne,
  boardSave,
  storeFind,
  storeFindOne,
  storeSave,
  reviewSave,
  reviewFind,
  reviewRemove,
};
