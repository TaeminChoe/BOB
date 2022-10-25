<template>
  <div class="title-text"><div>Restaurant</div></div>
  <div class="content-layout">
    <input placeholder="Title" />
    <input placeholder="Address" />
    <input placeholder="Number" />
    <input placeholder="IMG Link" />
    <input placeholder="Description" />
    <button class="submit-button bgcolor-green" @click="handleAddList">
      SUBMIT
    </button>
  </div>
</template>

<script>
export default {
  name: "ListCreatePage",
  methods: {
    handleAddList() {
      console.log("list 등록");
      this.$router.push("/restaurant");
    },
  },
};
</script>
