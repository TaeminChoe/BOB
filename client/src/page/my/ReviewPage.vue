<template>
  <div class="title-text">
    <div>Review</div>
  </div>
  <div class="content-layout">
    <div class="list-box">
      <!-- <img
        class="trash-btn"
        v-if="$store.state.auth == 'admin'"
        src="@/assets/img/trash.png"
        @click="handleDelReview"
      /> -->
      <img
        class="trash-btn"
        v-if="$store.state.auth == ''"
        src="@/assets/img/trashGreen.png"
        @click="handleDelReview"
      />
      <div class="reciept-img-box">
        <img
          class="list-img"
          src="http://cmsimg.newstomato.com/news/8/2018/12/2018-12-17/201812161728110.jpg"
        />
        <div class="date-text">2022.11.01</div>
      </div>
      <div class="reciept-text-box">
        <div class="list-title">레스토랑이름</div>
        <div class="list-discription">적은 리뷰가 보여지는 공간입니다</div>
        <div class="review-box">차트영역</div>
      </div>
    </div>
    <div class="list-box">
      <!-- <img
        class="trash-btn"
        v-if="$store.state.auth == 'admin'"
        src="@/assets/img/trash.png"
        @click="handleDelReview"
      /> -->
      <img
        class="trash-btn"
        v-if="$store.state.auth == ''"
        src="@/assets/img/trashGreen.png"
        @click="handleDelReview"
      />
      <div class="reciept-img-box">
        <img
          class="list-img"
          src="https://file.mk.co.kr/meet/neds/2019/06/image_readtop_2019_409883_15603084023784973.jpg"
        />
        <div class="date-text">2022.11.01</div>
      </div>
      <div class="reciept-text-box">
        <div class="list-title">레스토랑이름</div>
        <div class="list-discription">적은 리뷰가 보여지는 공간입니다</div>
        <div class="review-box">차트영역</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPage",
  data() {
    return {
      reviews: [],
    };
  },
  methods: {
    getReviewData() {},
    handleDelReview() {
      console.log("유저 / 어드민 구분해서 삭제 요청 보내기");
      // handleDelReview(event, index) {
      // let deleteStoreId = this.reviews[index].store_id;
      // deleteStoreId = String(deleteStoreId);
      // deleteStore({ deleteStoreId }).then((res) => {
      //   if (res.data.deleteStore.succeed) {
      //     this.getReviewData();
      //   }
      // });
      // event.stopPropagation();
    },
  },
  created() {
    // this.getReviewData();
  },
};
</script>
