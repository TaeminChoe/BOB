const notice = require("../../data/notice.json");
const store = require("../../data/store.json");
const user = require("../../data/user.json");

/**
 * 더미 데이터를 db에 넣기 위한 임시 함수들입니다.
 * 이후 삭제될 예정입니다.
 * json파일의 데이터를 가져와 SQL로 변환하여 DB에 넣는 코드입니다.
 */

// notice insert query

const getNoticeInsertQuery = () => {
  const noticeQuery = "INSERT INTO NOTICE(title, description, date) VALUES ";

  const values = notice
    .map(({ title, description, date }) => {
      const time = new Date(date);
      return `("${title}", "${description}", "${time.getTime()}")`;
    })
    .join(", ");

  return noticeQuery.concat(values);
};

// store insert query

const getStoreInsertQuery = () => {
  const storeQuery =
    "INSERT INTO STORE(name, address, phone_number, date, description, img_url) VALUES ";

  const values = store
    .map(({ name, address, phone_number, date, description, img_url }) => {
      const time = new Date(date);
      return `("${name}", "${address}", "${phone_number}", "${time.getTime()}", "${description}", "${img_url}")`;
    })
    .join(", ");

  return storeQuery.concat(values);
};

// user insert query

const getUserInsertQuery = () => {
  const userQuery = "INSERT INTO USER(id, date, pw, name, auth) VALUES ";

  const values = user
    .map(({ id, date, pw, name, auth }) => {
      const time = new Date(date);
      return `("${id}", "${time.getTime()}", "${pw}", "${name}", "${auth}")`;
    })
    .join(", ");

  return userQuery.concat(values);
};

module.exports = {
  getNoticeInsertQuery,
  getUserInsertQuery,
  getStoreInsertQuery,
};

//
// INSERT INTO USER(id, m_date, pw, name, auth) VALUE (1, 2, 3, 5, 6);

// INSERT INTO dbo.dept (deptno, dname, loc)
// VALUES (70, 'DBA TEAM', 'YEOKSAM'), (80, 'DESIGN TEAM', 'GANGNAM')
