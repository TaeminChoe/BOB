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
