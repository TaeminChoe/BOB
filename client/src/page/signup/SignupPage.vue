<template>
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
</template>

<script>
export default {
  name: "SignupPage",
  methods: {
    handleClickSignup() {
      this.$router.push("/");
    },
  },
};
</script>
