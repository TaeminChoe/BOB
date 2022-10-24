<!-- 공통 : 헤더 컴포넌트입니다.-->
<template>
  <header class="header-container">
    <router-link to="/home" class="logo-container">
      <img src="https://www.pineone.com/images/logo.png" />
    </router-link>
    <div @click="handleClickMenu">햄버거로고</div>
  </header>
</template>

<script>
export default {
  name: "TemplateHeader",
  methods: {
    handleClickMenu() {
      this.$store.state.menuOpen = true;
    },
  },
};
</script>

<style>
.header-container {
  width: 100%;
  height: 75px;
  background-color: #415c82;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 22px;
}

.header-container .logo-container {
  margin-left: 20px;
}

.hamburger-container {
  font-size: 12px;
}
</style>
