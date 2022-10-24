<template>
  <div class="template-layout">
    <div class="title-text"><div>Restaurant</div></div>
    <div class="content-layout">
      <input placeholder="Title" />
      <input placeholder="Address" />
      <input placeholder="Number" />
      <input placeholder="IMG Link" />
      <input placeholder="Description" />
      <button class="bgcolor-green" @click="handleAddList">SUBMIT</button>
    </div>
  </div>
</template>

<script>
import "@/assets/css/layout.css";

export default {
  name: "ListCreatePage",
  methods: {
    handleAddList() {
      console.log("list 등록");
      this.$router.push("/list");
    },
  },
};
</script>
