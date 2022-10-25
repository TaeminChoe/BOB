<template>
  <div class="title-text"><div>Sign Up</div></div>
  <div class="content-layout">
    <input placeholder="Your Name" />
    <input placeholder="ID" />
    <input placeholder="Create Password" />
    <input placeholder="Check Password" />
    <button class="submit-button bgcolor-green" @click="handleClickSignup">
      NEXT
    </button>
  </div>
</template>

<script>
import { SIGN_UP } from "../../gql/queries";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

export default {
  name: "SignupPage",
  methods: {
    handleClickSignup() {
      const apolloClient = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://bob--server.herokuapp.com/graphql",
      });

      const { result, loading, error } = apolloClient.mutate({
        mutation: SIGN_UP,
        variables: {
          input: {
            id: "ahyva2121134t411",
            m_date: "2022-10-14",
            pw: "1234",
            name: "choe",
            auth: "client",
          },
        },
      });
      console.log(result, loading, error);
    },
  },
};
</script>
