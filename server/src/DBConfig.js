const MySQL = require("mysql2/promise");
const {
  getUserInsertQuery,
  getStoreInsertQuery,
  getNoticeInsertQuery,
} = require("./db/dataInput");
require("dotenv").config();

const {
  MYSQL_HOST = "",
  MYSQL_USERNAME = "",
  MYSQL_PASSWORD = "",
  MYSQL_DATABASE = "",
} = process.env;

const DBConnect = async () => {
  return MySQL.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  });
};

// const DBExecute = async (conn, query) => {
//   conn.query(query, (err, rows, fields) => {
//     if(!err) return rows;
//     else return err;
//   }
// }

// const connection = MySQL.createConnection({
//   host: MYSQL_HOST,
//   user: MYSQL_USERNAME,
//   password: MYSQL_PASSWORD,
//   database: MYSQL_DATABASE,
// });

// const DBConfig = async () => {
//   let code;
//   const conn = DBConnect();
//   try {
//     console.log("Initialized!!!!");
//     // const query = getUserInsertQuery();
//     // console.log(query);
//     conn.query(`SHOW TABLES`, (err, rows, fields) => {
//       // connection.query(query, (err, rows, fields) => {
//       if (!err) console.log("The solution is: ", rows);
//       else console.log("Error while performing query.", err);
//     });

//     conn.end();
//     code = 0;
//   } catch (err) {
//     code = 1;
//   }
// };

module.exports = {
  DBConnect,
};
