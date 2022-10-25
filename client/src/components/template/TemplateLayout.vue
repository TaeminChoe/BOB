<template>
  <div>
    <Header />
    <SlideMenu />
    <div class="content-container">
      <router-view />
    </div>
    <Navigation />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Navigation from "./Navigation.vue";
import SlideMenu from "./SlideMenu.vue";
export default {
  name: "TemplateLayout",
  components: {
    Header,
    Navigation,
    SlideMenu,
  },
  mounted() {
    if (this.$route.path === "/") this.$router.replace("/home");
  },
  updated() {
    if (this.$route.path === "/") this.$router.replace("/home");
  },
};
</script>

<style scoped>
.content-container {
  min-height: 80vh;
}
</style>
