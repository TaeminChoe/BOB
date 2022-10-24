<template>
  <header class="footer-container">
    <div class="link-container">
      <router-link v-for="(menu, key) in menus" :key="key" :to="menu.route"
        ><b>{{ menu.name }}</b>
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
          name: "Home",
          route: "/home",
        },
        {
          name: "List",
          route: "/list",
        },
        {
          name: "Notice",
          route: "/notice",
        },
        {
          name: "My",
          route: "/my",
        },
      ],
    };
  },
};
</script>
<style>
.footer-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #415c82;
  display: flex;
}

.footer-container .link-container {
  width: 100%;
  display: flex;
}
.link-container a {
  padding: 0;
  width: 25%;
  border: none;
  background-color: #415c82;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
