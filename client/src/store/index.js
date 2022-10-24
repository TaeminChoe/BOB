// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    menuOpen: false,
    modalOpen: false,
    auth: "",
  },
  getters: {},
  mutations: {
    setModalOpen(state, value) {
      state.modalOpen = value;
    },
    setAuth(state, value) {
      console.log("vuex-mutaion : setAuth", value);
      state.auth = value;
    },
  },
});
