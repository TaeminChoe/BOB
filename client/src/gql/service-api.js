import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import { LOGIN, SIGN_UP } from "./queries";

const Apollo = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://bob--server.herokuapp.com/graphql",
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache", // 반대 "cache-only" - 그냥 이거 아예 지우면 캐시 되는듯함
    },
  },
});

/** 회원가입 요청 */
const createUser = (param) => {
  return Apollo.mutate({
    mutation: SIGN_UP,
    variables: {
      input: param,
    },
  });
};

/** 로그인 요청 */
const getAccountInfo = (param) => {
  return Apollo.query({
    query: LOGIN,
    variables: param,
  });
};

/** 업소 조회 요청 */
const getStore = (param) => {
  console.log(param);
};

/** 업소 생성 요청 */
const createStore = (param) => {
  console.log(param);
};

/** 업소 수정 요청 */
const updateStore = (param) => {
  console.log(param);
};

/** 공지사항 조회 요청 */
const getNotice = (param) => {
  console.log(param);
};

/** 공지사항 생성 요청 */
const createNotice = (param) => {
  console.log(param);
};

/** 공지사항 삭제 요청 */
const deleteNotice = (param) => {
  console.log(param);
};

export {
  getStore,
  createStore,
  updateStore,
  getAccountInfo,
  createUser,
  getNotice,
  createNotice,
  deleteNotice,
};
