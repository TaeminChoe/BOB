<template>
  <Header />
  <div class="content-container">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "TemplateLayout",
  components: {
    Header,
    Footer,
  },
  mounted() {
    if (this.$route.path === "/") this.$router.replace("/home");
  },
};
</script>

<style scoped>
.content-container {
  min-height: 80vh;
}
</style>
