// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    menuOpen: false,
    modalOpen: false,
    loadingOpen: false,
    auth: "",
    accountInfo: null,
  },
  getters: {},
  mutations: {
    // 모달 오픈
    setModalOpen(state, value) {
      state.modalOpen = value;
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
