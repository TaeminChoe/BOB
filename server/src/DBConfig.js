const MySQL = require("mysql2/promise");
require("dotenv").config();

/**
 * DB에 접근할 수 있는 객체를 생성합니다.
 * DB와 연결해 통신하는 시간이 있기 때문에 비동기적으로 사용해야합니다.
 * promise기반으로 되어 있기 때문에 await문법을 활용하면 됩니다.
 */

const {
  MYSQL_HOST = "",
  MYSQL_USERNAME = "",
  MYSQL_PASSWORD = "",
  MYSQL_DATABASE = "",
} = process.env;

const info = {
  host: MYSQL_HOST,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
};

const DBExecute = async (query) => {
  console.log(`query: ${query}`);
  const conn = await MySQL.createConnection(info);
  const result = await conn.query(query);
  await conn.end();
  return result;
};

module.exports = {
  DBExecute,
};
