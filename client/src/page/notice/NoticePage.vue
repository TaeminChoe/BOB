<template>
  <div class="title-text">
    <div>Notice</div>
    <button class="bgcolor-orange" @click="addNotice">Register</button>
  </div>
  <div class="noNoticeWrap">
    <img src="@/assets/img/noGreen.png" />
    <div class="noNotice">No notices</div>
  </div>
  <NoticeList />
</template>
<script>
import "@/assets/css/layout.css";
import NoticeList from "./NoticeList.vue";

export default {
  name: "NoticePage",
  components: {
    NoticeList,
  },
  methods: {
    addNotice() {
      this.$router.push("/addNotice");
    },
  },
};
</script>
<style>
.noNoticeWrap {
  padding: 2rem;
  text-align: center;
}
.noNotice {
  font-size: 36px;
  color: #43d392;
  padding: 1rem;
}
</style>
