const MySQL = require("mysql2");
require("dotenv").config();

const {
  MYSQL_HOST = "",
  MYSQL_USERNAME = "",
  MYSQL_PASSWORD = "",
  MYSQL_DATABASE = "",
} = process.env;

// console.log(`
//   MYSQL_HOST : ${MYSQL_HOST}
//   MYSQL_USERNAME : ${MYSQL_USERNAME}
//   MYSQL_PASSWORD : ${MYSQL_PASSWORD}
//   MYSQL_DATABASE : ${MYSQL_DATABASE}
// `);

const connection = MySQL.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

const DBConfig = async () => {
  let conn, code;
  try {
    connection.connect();
    // connection.query(`SELECT DATABASE()`, (err, rows, fields) => {
    connection.query(`SELECT * FROM USER`, (err, rows, fields) => {
      if (!err) console.log("The solution is: ", rows);
      else console.log("Error while performing query.", err);
    });

    connection.end();
    console.log("Initialized!");
    code = 0;
  } catch (err) {
    code = 1;
  }
};

module.exports = {
  DBConfig,
};
