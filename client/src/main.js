import { createApp, provide, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { providerAPI } from "./gql/provider-api";
import { providerDialog } from "./helper/helper-dialog";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "<https://bob--server.herokuapp.com/graphql>",
});

providerAPI(store);
providerDialog(store);
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router).use(store).mount("#app");
// app.mount("#app");
