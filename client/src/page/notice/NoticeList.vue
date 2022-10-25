<template>
  <div class="content-layout">
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
        <NoticeDetail v-bind:isActive="isActive" />
      </transition>
    </div>
  </div>
</template>

<script>
import NoticeDetail from "./NoticeDetail.vue";

export default {
  name: "NoticeList",
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
.content-layout {
  padding-bottom: 1rem !important;
}
</style>
