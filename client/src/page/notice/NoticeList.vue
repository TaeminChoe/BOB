<template>
  <div class="notice-layout">
    <button class="deleteBtn" @click="deleteNotice(list.notice_id)">
      <img
        v-if="this.$store.state.auth === 'admin'"
        src="@/assets/img/trash.png"
      />
    </button>
    <div class="accordion-div">
      <div class="btnWrap">
        <button @click="toggle" class="toggleBtn">
          <img :src="isActive ? openList : closeList" />
        </button>
      </div>
      <transition
        name="myAccordion"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        class="accordion"
      >
        <NoticeDetail v-bind:isActive="isActive" v-bind:list="list" />
      </transition>
    </div>
  </div>
</template>

<script>
import NoticeDetail from "./NoticeDetail.vue";
import { deleteNotice } from "@/gql/service-api";

export default {
  name: "NoticeList",
  props: {
    list: Object,
  },
  data() {
    return {
      isActive: false,
      openList: require("@/assets/img/open.png"),
      closeList: require("@/assets/img/close.png"),
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    beforeEnter: function (el) {
      el.style.height = "0";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function (el) {
      el.style.height = "0";
    },
    deleteNotice(id) {
      deleteNotice(id);
      window.location.reload(true);
    },
  },
  components: {
    NoticeDetail: NoticeDetail,
  },
};
</script>

<style>
.accordion-div {
  border: 1px solid black;
  border-radius: 8px;
  padding: 1rem;
}
.btnWrap {
  display: flex;
  justify-content: center;
  float: right;
}
.toggleBtn {
  background: none;
  border: none;
}
.notice-layout {
  width: 92.5%;
  display: flex;
  flex-flow: column;
  margin-bottom: 1rem;
}
.notice-layout:last-child {
  margin-bottom: 6rem;
}
.deleteBtn {
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  padding-top: 20px;
  z-index: 10;
}
</style>
