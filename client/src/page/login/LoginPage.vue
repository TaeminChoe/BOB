<template>
  <div>
    <div>로그인 페이지입니다.</div>
    <div><label>아이디</label><input /></div>
    <div><label>비밀번호</label><input /></div>
    <button @click="handleClickLogin">로그인하기</button>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  methods: {
    handleClickLogin() {
      window.localStorage.setItem("isLogin", true);
      this.$router.push("/");
    },
  },
  props: {},
  mounted() {
    const isLogin = window.localStorage.getItem("isLogin");
    if (isLogin) {
      this.$router.replace("/");
    }
  },
};
</script>
