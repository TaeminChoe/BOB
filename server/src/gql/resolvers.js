const { resolveObjMapThunk } = require("graphql");
const { DBExecute } = require("../DBConfig");

const ERRORS = [
  {
    error: "ER_DUP_ENTRY",
    code: "400001",
    message: "중복된 아이디 입니다.",
  },
];

const leftPad = (value) => {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
};

const toStringByFormatting = (source, delimiter = "-") => {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(delimiter);
};

const initError = () => {
  return {
    error: "UNDEFINED ERROR",
    code: "999999",
    message: "파악되지 않은 오류",
  };
};

const resolvers = {
  Query: {
    // USER QUERY
    login: async (parent, args) => {
      console.log("BOB Login ...");
      const query = `SELECT * FROM USER WHERE id="${args.id}" && pw="${args.pw}"`;
      const result = await DBExecute(query);

      console.log(`Login ${result[0].length > 0 ? "success" : "fail"}`);
      return result[0][0];
    },

    // STORE QUERY
    stores: async () => {
      console.log("Get BOB stores ...");
      const query = "SELECT * FROM STORE";
      const result = await DBExecute(query);

      return result[0];
    },

    // NOTICE QUERY
    notices: async () => {
      console.log("Get BOB notices ...");
      const query = "SELECT * FROM NOTICE";
      const result = await DBExecute(query);

      return result[0];
    },
  },

  Mutation: {
    signUp: async (parent, args) => {
      const { id, m_date, pw, name, auth } = args.input;
      const date = toStringByFormatting(new Date(m_date));
      const query = `INSERT INTO USER(id, m_date, pw, name, auth) VALUES ("${id}", "${date}", "${pw}", "${name}", "${auth}")`;
      const result = await DBExecute(query);

      const succeed = !result.code;
      const errors = !result.code
        ? {}
        : ERRORS.find((error) => error.error === result.code) || initError();

      return {
        succeed,
        ...errors,
      };
    },
  },
};

module.exports = resolvers;
