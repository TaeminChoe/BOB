<!-- 공통 : 헤더 컴포넌트입니다.-->
<template>
  <div>
    <div class="header-layout">
      <router-link to="/home" class="logo-container">
        <img src="@/assets/img/BOB.png" />
      </router-link>
      <img
        @click="handleClickMenu"
        src="@/assets/img/hamburger.png"
        class="set-right"
      />
    </div>
  </div>
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
/* .header-container {
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
} */
</style>
