const { DBConnect } = require("../DBConfig");

const resolvers = {
  Query: {
    getUserAll: async () => {
      const conn = await DBConnect();
      const query = "SELECT * FROM USER";

      const [rows, field] = await conn.query(query);
      conn.end();
      return rows;
    },
    getStoreAll: async () => {
      const conn = await DBConnect();
      const query = "SELECT * FROM STORE";

      const [rows, field] = await conn.query(query);
      conn.end();
      return rows;
    },
    getNoticeAll: async () => {
      const conn = await DBConnect();
      const query = "SELECT * FROM NOTICE";

      const [rows, field] = await conn.query(query);
      conn.end();
      return rows;
    },
    getUserByKey: async () => {},
    getStoreByKey: async () => {},
    getNoticeByKey: async () => {},
  },
};

module.exports = resolvers;
