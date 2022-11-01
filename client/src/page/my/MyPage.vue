<template>
  <router-view v-if="isReviewPage" />
  <slot v-if="isMyPage">
    <div class="title-text">
      <div>My Page</div>
    </div>
    <div class="content-layout">
      <button name="review" @click="handleGoPage">Review</button>
    </div>
  </slot>
</template>

<script>
export default {
  name: "MyPage",
  data() {
    return {
      reviews: [],
    };
  },
  computed: {
    /** 경로에 따른 화면 랜딩 */
    isMyPage() {
      return this.$route.matched.at(-1).path === "/my";
    },
    isReviewPage() {
      return this.$route.matched.at(-1).path === "/my/review";
    },
  },
  methods: {
    handleGoPage(e) {
      this.$router.push("my/" + e.target.name);
    },
  },
  created() {
    // this.getReviewData();
  },
};
</script>
