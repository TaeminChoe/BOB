// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    menuOpen: false,
    modal: {
      open: false,
      description: "",
    },
    loadingOpen: false,
    auth: "",
    accountInfo: null,
  },
  getters: {},
  mutations: {
    // 모달 오픈
    setModalOpen(state, options) {
      state.modal = { open: true, description: options.description };
    },
    // 모달 클로즈
    setModalClose(state) {
      state.modal = { open: false, description: null };
    },
    // 로딩 오픈
    setLoadingOpen(state, value) {
      state.loadingOpen = value;
    },
    // 권한 설정
    setAuth(state, value) {
      console.log("vuex-mutaion : setAuth", value);
      state.auth = value;
    },
    // 로그인
    setAccountInfo(state, value) {
      state.accountInfo = value;
    },
  },
});
