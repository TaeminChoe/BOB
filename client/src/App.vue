<template>
  <div>
    <div v-if="backgroundOpen" class="prevent-click"></div>
    <LoadingWrap v-if="loadingOpen" />
    <ModalWrap v-if="modalOpen" />
    <router-view />
  </div>
</template>

<script>
import { getLoginLocalToken } from "@/helper/helper-storage";
import LoadingWrap from "@/components/common/LoadingWrap.vue";
import ModalWrap from "@/components/common/ModalWrap.vue";
export default {
  name: "App",
  computed: {
    backgroundOpen() {
      // 슬라이드 메뉴 or 모달 오픈 or API 연동시 로딩바와 함께 백그라운드 처리 오픈
      return (
        this.$store.state.menuOpen ||
        this.$store.state.loadingOpen ||
        this.$store.state.modal.open
      );
    },
    loadingOpen() {
      return this.$store.state.loadingOpen;
    },
    modalOpen() {
      return this.$store.state.modal.open;
    },
  },
  components: {
    LoadingWrap,
    ModalWrap,
  },

  /**
   * 앱 구동시 로그인 정보 조회
   * To Do : 저장된 토큰을 이용하여 로그인 정보 조회 API를 요청해야함
   * */
  mounted() {
    const user = getLoginLocalToken();

    if (user) {
      this.$store.commit("setAuth", user.auth ? user.auth : "client");
      this.$store.commit("setAccountInfo", user);
    }
  },
};
</script>

<style>
.prevent-click {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
}
</style>
