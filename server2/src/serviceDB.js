const User = require("./models/user");
/* 라우터의 요청을 받아 DB를 조회/조작하는 모듈입니다. */

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
  // const { id, pw, name, auth, date } = data;
  // const date = new Date().getTime().toString();
  const newUser = new User(data);
  return newUser.save({});
};
module.exports = {
  userFind,
  userFindOne,
  userSave,
};
