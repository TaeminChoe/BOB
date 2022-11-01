import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/layout.css";
import AxiosService from "./AxiosService";


const app = createApp({
  setup() {
app.config.globalProperties.axios = AxiosService

  },

  render: () => h(App),
});

app.use(router).use(store).mount("#app");