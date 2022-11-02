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
      <div class="dounut-box">
        <div
          class="circle-box"
          :style="{
            background: `conic-gradient(
                  white ${whitePercent}%,
                  #43d392 ${whitePercent}% ${greenPercent}%
                )
                `,
          }"
        >
          <div class="text-box">{{ averageScore }}</div>
        </div>
      </div>
      <!-- <div class="reciept-img-box">
        <img
          class="list-img"
          src="http://cmsimg.newstomato.com/news/8/2018/12/2018-12-17/201812161728110.jpg"
        />
        <div class="date-text">2022.11.01</div>
      </div> -->
      <div class="reciept-desc-box">
        <div class="list-title">레스토랑이름</div>
        <div class="list-discription">적은 리뷰가 보여지는 공간입니다</div>
        <div class="review-box">
          <div class="review-list">
            <div class="review-text">맛</div>
            <input
              class="review-range"
              type="range"
              :value="tasteScore"
              max="5"
              disabled
            />
            <div class="review-value">{{ tasteScore }}</div>
          </div>
          <div class="review-list">
            <div class="review-text">위생</div>
            <input
              class="review-range"
              type="range"
              :value="cleanScore"
              max="5"
              disabled
            />
            <div class="review-value">{{ cleanScore }}</div>
          </div>
          <div class="review-list">
            <div class="review-text">분위기</div>
            <input
              class="review-range"
              type="range"
              :value="moodScore3"
              max="5"
              disabled
            />
            <div class="review-value">{{ moodScore }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-box">
      <img
        class="trash-btn"
        v-if="$store.state.auth == ''"
        src="@/assets/img/trash.png"
        @click="handleDelReview"
      />
      <div class="reciept-img-box">
        <img
          class="list-img"
          src="http://cmsimg.newstomato.com/news/8/2018/12/2018-12-17/201812161728110.jpg"
        />
        <div class="date-text">2022.11.01</div>
      </div>
      <div class="reciept-desc-box">
        <div class="list-title">레스토랑이름</div>
        <div class="list-discription">적은 리뷰가 보여지는 공간입니다</div>
        <div class="review-box">
          <div class="review-list">
            <div class="review-text">맛</div>
            <input
              class="review-range"
              type="range"
              value="5"
              max="5"
              disabled
            />
            <div class="review-value">5</div>
          </div>
          <div class="review-list">
            <div class="review-text">위생</div>
            <input
              class="review-range"
              type="range"
              value="1"
              max="5"
              disabled
            />
            <div class="review-value">1</div>
          </div>
          <div class="review-list">
            <div class="review-text">분위기</div>
            <input
              class="review-range"
              type="range"
              value="3"
              max="5"
              disabled
            />
            <div class="review-value">3</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPage",
  data() {
    return {
      reviews: [{ tasteScore: 0, cleanScore: 0, moodScore: 0 }],
      averageScore: 0,
      whitePercent: 0,
      greenPercent: 0,
    };
  },
  methods: {
    getReviewData() {
      //리뷰 데이터 가져오는 api 호출 예정
      this.tasteScore = 5;
      this.cleanScore = 1;
      this.moodScore = 3;

      this.chartCacul();
    },
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
    chartCacul() {
      this.averageScore = parseInt(
        (this.tasteScore + this.cleanScore + this.moodScore) / 3
      );
      this.greenPercent = this.averageScore * 20;
      this.whitePercent = 100 - this.averageScore * 20;
    },
  },
  created() {
    this.getReviewData();
  },
};
</script>
