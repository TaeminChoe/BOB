<!-- 공통 : 헤더 컴포넌트입니다.-->
<template>
  <header class="header-container">
    <div class="logo-container">
      <img src="https://www.pineone.com/images/logo.png" />
    </div>
    <div class="menu-container">
      <div class="menu-item hover-text" v-for="(menu, key) in menus" :key="key">
        <router-link :to="menu.route"
          ><b>{{ menu.name }}</b>
        </router-link>
      </div>
    </div>
    <div class="logout pointer hover-text" @click="handleClickLogout">
      <b>로그아웃</b>
    </div>
  </header>
</template>

<script>
export default {
  name: "TemplateHeader",
  data() {
    return {
      menus: [
        {
          name: "Home",
          route: "/home",
        },
        {
          name: "Skill",
          route: "/skill",
        },
        {
          name: "login",
          route: "/login",
        },
        {
          name: "admin",
          route: "/admin",
        },
      ],
    };
  },
  methods: {
    handleClickLogout() {
      this.$router.push("/login");
      this.$store.commit("setAuth", "");
      // this.$store.commit("setModalOpen", true);
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

.header-container .menu-container {
  display: flex;
  margin-left: 100px;
  width: 100%;
}

.menu-container .menu-item {
  margin-left: 40px;
}

.header-container .logout {
  width: 200px;
  font-size: 18px;
}
</style>
