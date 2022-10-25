<template>
  <div class="template-layout">
    <div class="title-text">Notice</div>
    <div class="noNoticeWrap">
      <img src="@/assets/img/noGreen.png" />
      <div class="noNotice">No notices</div>
    </div>

    <NoticeList />
  </div>
</template>
<script>
import "@/assets/css/layout.css";
import NoticeList from "./NoticeList.vue";

export default {
  name: "NoticePage",
  components: {
    NoticeList,
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
