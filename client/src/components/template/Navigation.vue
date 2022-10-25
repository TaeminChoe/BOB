<template>
  <header class="footer-container">
    <div class="link-container">
      <router-link v-for="(menu, key) in menus" :key="key" :to="menu.route">
        <img v-if="menu.name === $route.name" :src="menu.imgNowSrc" />
        <img v-if="menu.name !== $route.name" :src="menu.imgSrc" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "TemplateNavigation",
  data() {
    return {
      menus: [
        {
          name: "home",
          route: "/home",
          imgSrc: require("@/assets/img/home.png"),
          imgNowSrc: require("@/assets/img/homeRed.png"),
        },
        {
          name: "list",
          route: "/list",
          imgSrc: require("@/assets/img/list.png"),
          imgNowSrc: require("@/assets/img/listRed.png"),
        },
        {
          name: "notice",
          route: "/notice",
          imgSrc: require("@/assets/img/notice.png"),
          imgNowSrc: require("@/assets/img/noticeRed.png"),
        },
        {
          name: "my",
          route: "/my",
          imgSrc: require("@/assets/img/my.png"),
          imgNowSrc: require("@/assets/img/myRed.png"),
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.name);
  },
};
</script>
