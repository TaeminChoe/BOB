<template>
  <div class="template-layout">
    <div class="back-header">
      <img src="@/assets/img/Union.png" />
    </div>
    <div class="title-text"><div>Login</div></div>
    <div class="submit-layout">
      <input placeholder="ID" />
      <input placeholder="Password" />
      <button class="bgcolor-green" @click="handleClickLogin">NEXT</button>
      <button class="bgcolor-orange">REGISTER</button>
    </div>
  </div>
</template>

<script>
import "@/assets/css/layout.css";
export default {
  name: "LoginPage",
  methods: {
    handleClickLogin() {
      // window.localStorage.setItem("isLogin", true);
      this.$store.commit("setAuth", "client");
      this.$router.push("/");
    },
  },
  props: {},
  // mounted() {
  //   const isLogin = window.localStorage.getItem("isLogin");
  //   if (isLogin) {
  //     this.$router.replace("/");
  //   }
  // },
};
</script>
