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
import { getNotice } from "@/gql/service-api";

export default {
  name: "NoticePage",
  data() {
    return {
      list: [],
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
  created() {
    getNotice().then((res) => {
      this.list = res.data.notices;
    });
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
