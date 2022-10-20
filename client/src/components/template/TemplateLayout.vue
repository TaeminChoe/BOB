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
    const isLogin = window.localStorage.getItem("isLogin");
    if (isLogin) {
      if (this.$route.fullPath === "/") this.$router.replace("/home");
    } else {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
.content-container {
  min-height: 80vh;
}
</style>
