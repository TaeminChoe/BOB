import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client/core";

/**
 * @description API 요청 모듈을 세팅하는 파일입니다.
 * @author YangTaeWook
 */

let store = null;

const providerAPI = (_store) => {
  store = _store;
};
export { providerAPI };

const httpLink = new HttpLink({
  uri: "https://bob--server.herokuapp.com/graphql",
});

/**
 * 1. API 요청 시작 전 세팅(Header,Loading 등)
 * 2. API 응답 후 세팅 (Loading Close 등)
 */
const authMiddleware = new ApolloLink((operation, forward) => {
  store.commit("setLoadingOpen", true);
  operation.setContext(({ headers = {} }) => ({
    // 헤더 설정
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || "authorization",
    },
  }));

  return forward(operation).map((data) => {
    // API 응답 후 처리
    store.commit("setLoadingOpen", false);
    return data;
  });
});

const Apollo = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache", // 반대 "cache-only" - 그냥 이거 아예 지우면 캐시 되는듯함
    },
  },
});

export default Apollo;
