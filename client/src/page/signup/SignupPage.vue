<template>
  <div class="template-layout">
    <div class="header-layout">
      <img src="@/assets/img/BOB.png" />
      <img src="@/assets/img/hamburger.png" class="set-right" />
    </div>
    <div class="title-text"><div>Sign Up</div></div>
    <div class="content-layout">
      <input placeholder="Your Name" />
      <input placeholder="ID" />
      <input placeholder="Create Password" />
      <input placeholder="Check Password" />
      <button class="submit-button bgcolor-green" @click="handleClickSignup">
        NEXT
      </button>
    </div>
  </div>
</template>

<script>
import "@/assets/css/layout.css";

export default {
  name: "SignupPage",
  methods: {
    handleClickSignup() {
      this.$router.push("/");
    },
  },
};
</script>
