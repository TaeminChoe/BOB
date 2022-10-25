import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import { LOGIN, SIGN_UP } from "./queries";

const Apollo = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://bob--server.herokuapp.com/graphql",
});

/** 회원가입 요청 */
const createUser = (param) => {
  Apollo.mutate({
    mutation: SIGN_UP,
    variables: {
      input: param,
    },
  });
};

/** 로그인 요청 */
const getAccountInfo = (param) => {
  Apollo.query({
    query: LOGIN,
    variables: param,
  });
};

export { createUser, getAccountInfo };
