const { resolveObjMapThunk } = require("graphql");
const { DBExecute } = require("../DBConfig");

const ERRORS = [
  {
    error: "ER_DUP_ENTRY",
    code: "400001",
    message: "중복된 아이디 입니다.",
  },
  {
    error: "ER_BAD_FIELD_ERROR",
    code: "400002",
    message: "필드명 확인 바랍니다.",
  },
  {
    error: "BAD_USER_INPUT",
    code: "400003",
    message: "필드명 혹은 데이터타입 확인 바랍니다.",
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
    store: async (parent, args) => {
      console.log(`get store id : ${args.id}`);
      const query = `SELECT * FROM STORE WHERE store_id="${args.id}"`;
      const result = await DBExecute(query);

      return result[0][0];
    },
    stores: async () => {
      console.log("Get BOB stores ...");
      const query = "SELECT * FROM STORE";
      const result = await DBExecute(query);

      return result[0];
    },

    // NOTICE QUERY
    notice: async (parent, args) => {
      console.log(`get notice id : ${args.id}`);
      const query = `SELECT * FROM NOTICE WHERE notice_id="${args.id}"`;
      const result = await DBExecute(query);

      return result[0][0];
    },
    notices: async () => {
      console.log("Get BOB notices ...");
      const query = "SELECT * FROM NOTICE";
      const result = await DBExecute(query);

      return result[0];
    },
  },

  Mutation: {
    // USER Mutation
    signUp: async (parent, args) => {
      const { id, date, pw, name, auth } = args.input;
      const time = new Date(date);
      const query = `INSERT INTO USER(id, date, pw, name, auth) VALUES ("${id}", "${time.getTime()}", "${pw}", "${name}", "${auth}")`;
      console.log(`Sign up ${id} ...`);
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

    // STORE Mutation
    registStore: async (parent, args) => {
      const { address, name, date, phone_number, description, img_url } =
        args.input;
      const time = new Date(date);
      const query = `INSERT INTO STORE(address, name, date, phone_number, description, img_url) VALUES ("${address}", "${name}", "${time.getTime()}", "${phone_number}", "${description}", "${img_url}")`;
      console.log(`Regist store : ${name}...`);
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
    deleteStore: async (parent, args) => {
      const query = `DELETE FROM STORE WHERE store_id="${args.id}"`;
      console.log(`Delete store : ${args.id}...`);
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

    // NOTICE Mutation
    registNotice: async (parent, args) => {
      const { date, description, title } = args.input;
      const time = new Date(date);
      const query = `INSERT INTO NOTICE(date, description, title) VALUES ("${time.getTime()}", "${description}", "${title}")`;
      console.log(`Regist notice : ${title}...`);
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
    deleteNotice: async (parent, args) => {
      const query = `DELETE FROM NOTICE WHERE notice_id="${args.id}"`;
      console.log(`Delete notice : ${args.id}...`);
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
