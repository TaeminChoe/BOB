<template>
  <div class="title-text">
    <div>Notice</div>
    <button
      v-if="this.$store.state.auth === 'admin'"
      class="bgcolor-orange"
      @click="addNotice"
    >
      Register
    </button>
  </div>
  <div class="noNoticeWrap" v-if="list.length === 0">
    <img src="@/assets/img/noGreen.png" />
    <div class="noNotice">No notices</div>
  </div>
  <NoticeList v-for="lists in list" v-bind:key="lists" v-bind:list="lists" />
</template>
<script>
import "@/assets/css/layout.css";
import NoticeList from "./NoticeList.vue";

export default {
  name: "NoticePage",
  data() {
    return {
      list: [
        {
          title: "testTitle1",
          desc: "testDesc1 testDesc1 testDesc1 testDesc1 testDesc1 testDesc1",
        },
        {
          title: "testTitle2",
          desc: "testDesc2 testDesc2 testDesc2 testDesc2 testDesc2 testDesc2 testDesc2 testDesc2 testDesc2 testDesc2 testDesc2 testDesc2",
        },
        {
          title:
            "testTitle3 testTitle3 testTitle3 testTitle3 testTitle3 testTitle3",
          desc: "testDesc3",
        },
      ],
    };
  },
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
