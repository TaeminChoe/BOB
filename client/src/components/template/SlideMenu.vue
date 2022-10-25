<template>
  <Slide right :isOpen="isOpen" @openMenu="openMenu" @closeMenu="closeMenu">
    <div class="account-info">
      <router-link to="/login" v-if="!isLogined" class="no-account"
        >로그인을 해주세요</router-link
      >
      <div v-if="isLogined" @click="handleClickUserInfo" class="have-account">
        <p class="account-name">{{ user.name }}</p>
        <p class="account-id">{{ user.id }}</p>
      </div>
    </div>
    <a id="home" href="#">
      <span>Home</span>
    </a>
    <a id="test1" href="#">
      <span>test1</span>
    </a>
    <a id="test2" href="#">
      <span>test2</span>
    </a>
    <a id="test3" href="#">
      <span>test3</span>
    </a>
    <div v-if="isLogined" class="logout" @click="handleClickLogout">
      로그아웃
    </div>
  </Slide>
</template>

<script>
import { Slide } from "vue3-burger-menu";
import { removeLoginLocalToken } from "@/helper/helper-storage";
export default {
  name: "SlideMenu",
  computed: {
    isOpen() {
      return this.$store.state.menuOpen;
    },
    isLogined() {
      return !!this.$store.state.accountInfo;
    },
    user() {
      return this.$store.state.accountInfo;
    },
  },
  methods: {
    openMenu() {
      this.$store.state.menuOpen = true;
    },
    closeMenu() {
      this.$store.state.menuOpen = false;
    },
    handleClickUserInfo() {
      this.$router.push("/my");
    },
    handleClickLogout() {
      this.$store.commit("setAuth", "");
      this.$store.commit("setAccountInfo", null);
      this.$store.state.menuOpen = false;
      removeLoginLocalToken();
      this.$router.push("/login");
    },
  },
  components: {
    Slide,
  },
};
</script>
<style scoped>
.account-info {
  width: 250px;
  padding: 0 0 20px 0;
}

.account-info .account-name {
  font-size: 30px;
  font-weight: bold;
  color: white;
}
.account-info .account-id {
  font-size: 24px;
}

.account-info .no-account {
  font-weight: bold;
  font-size: 26px;
}
</style>
