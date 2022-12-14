import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { providerAPI } from "./gql/provider-api";
import { providerDialog } from "./helper/helper-dialog";
import { providerLoading } from "./system/AxiosService";
import AxiosService from "./system/AxiosService";

providerAPI(store);
providerDialog(store);
providerLoading(store);
const app = createApp({
  setup() {
    app.config.globalProperties.axios = AxiosService;
  },

  render: () => h(App),
});

app.use(router).use(store).mount("#app");
// app.mount("#app");
