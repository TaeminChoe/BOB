// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    modalOpen: false,
    auth: null,
  },
  getters: {},
  mutations: {
    setModalOpen(state, value) {
      state.modalOpen = value;
    },
  },
});
