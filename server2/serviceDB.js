const User = require("./models/user");

/**
 * 전체 User 리스트 조회하기
 */
const getUserList = () => {
  return User.find({});
};

/** 특정 User 조회하기 */
const getUserDetail = (payload) => {
  const { id } = payload;
  return User.findOne({ id });
};

/** 신규 User 추가  */
const addUser = (data) => {
  const { id, pw, name, auth } = data;
  const date = new Date().getTime().toString();

  const newUser = new User({
    id,
    pw,
    name,
    date,
    auth,
  });

  return newUser.save({});
};
module.exports = {
  getUserList,
  getUserDetail,
  addUser,
};
