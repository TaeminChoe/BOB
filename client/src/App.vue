<template>
  <div>
    <div v-if="isOpen" class="prevent-click"></div>
    <router-view />
  </div>
</template>

<script>
import { getLoginLocalToken } from "@/helper/helper-storage";
export default {
  name: "App",
  computed: {
    isOpen() {
      return this.$store.state.menuOpen;
    },
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
  z-index: 100;
}
</style>
