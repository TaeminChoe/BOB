<template>
  <Slide
    right
    :isOpen="this.$store.state.menuOpen"
    @openMenu="openMenu"
    @closeMenu="closeMenu"
  >
    <div>
      <h1>계정 정보 영역</h1>
      <br />
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
    <div class="logout" @click="handleClickLogout">로그아웃</div>
  </Slide>
</template>

<script>
import { Slide } from "vue3-burger-menu";
export default {
  name: "SlideMenu",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.$store.state.menuOpen = true;
    },
    closeMenu() {
      this.$store.state.menuOpen = false;
    },
    handleClickLogout() {
      this.$store.commit("setAuth", "");
      this.$store.state.menuOpen = false;
      this.$router.push("/login");
    },
  },
  components: {
    Slide,
  },
};
</script>
