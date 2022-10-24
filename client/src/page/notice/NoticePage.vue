<template>
  <div>
    <div>Notice</div>
    <div>No notices</div>

    <NoticeList />
  </div>
</template>
<script>
import NoticeList from "./NoticeList.vue";

export default {
  name: "NoticePage",
  components: {
    NoticeList,
  },
};
</script>
