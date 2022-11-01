<template>
  <router-view v-if="isReviewPage" />
  <slot v-if="isMyPage">
    <div class="title-text">
      <div>My Page</div>
    </div>
    <div class="content-layout">
      <div class="mypage-box">
        <div class="account-name">Admin</div>
        <div class="account-id">Admin@pineone.com</div>
      </div>
      <div class="mypage-box" name="review" @click="handleGoReview">
        작성리뷰확인
      </div>
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
    handleGoReview() {
      this.$router.push("my/review");
    },
  },
};
</script>
