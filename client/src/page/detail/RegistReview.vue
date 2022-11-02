<template>
  <div class="title-text">Review</div>
  <form @submit="onSubmit">
    <div class="file-box">
      <input
        id="input"
        type="file"
        :onChange="checkFile"
        class="upload-file"
        accept="image/*"
      />
      <!-- <span v-if="isFile">파일 첨부 완료!</span> -->
      <img
        for="input"
        v-if="isFile"
        :src="review.filePath"
        @click="uploadFile"
      />
      <label v-else for="input">파일 불러오기</label>
    </div>
    <div class="alert-text">
      <div v-if="isFile" style="color: #43d392">
        영수증 내용이 확인되었습니다
        <img src="@/assets/img/checkGreen.png" />
      </div>
      <div v-else style="color: #ff9551">
        영수증 이미지를 첨부 해 주십시오
        <img src="@/assets/img/noticeOrange.png" />
      </div>
    </div>
    <div v-if="isFile">
      <RatingBar
        title="맛"
        v-bind:onChange="changeRating"
        v-bind:rating="review.taste"
      />
      <RatingBar
        title="위생"
        v-bind:onChange="changeRating"
        v-bind:rating="review.clean"
      />
      <RatingBar
        title="분위기"
        v-bind:onChange="changeRating"
        v-bind:rating="review.mood"
      />
      <div class="comment">
        <p class="title">코멘트</p>
        <textarea v-model="review.comment" />
      </div>
      <button class="submit-button bgcolor-green">SUBMIT</button>
    </div>
  </form>
</template>

<script>
import RatingBar from "../../components/common/RatingBar";
export default {
  name: "RegistReview",
  data() {
    return {
      isFile: false,
      review: {
        filePath: "",
        taste: 0,
        clean: 0,
        mood: 0,
        comment: "",
      },
    };
  },
  methods: {
    uploadFile() {
      const input = document.getElementById("input");
      input.click();
    },
    onSubmit(e) {
      e.preventDefault();
      console.log("submit", this.review);
      // TODO: implement
      // api에 params값 태워 보내기
      // detail페이지로 이동
    },
    checkFile(e) {
      // file 업로드 로직
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);

      fileReader.onload = (e) => {
        this.review.filePath = e.target.result;
        this.isFile = true;
      };
    },
    changeRating(title, score) {
      console.log(title, score);
      switch (title) {
        case "맛":
          this.review.taste = score + 1;
          break;
        case "위생":
          this.review.clean = score + 1;
          break;
        case "분위기":
          this.review.mood = score + 1;
          break;
      }
    },
  },
  components: { RatingBar },
};
</script>

<style>
template {
  font-family: "Roboto", sans-serif;
}
.file-box {
  border: 2px solid black;
  margin-block: 1rem;
  width: calc(100% - 2rem);
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 10px;
  margin-bottom: 2rem;
}
.file-box input[type="file"] {
  /* 파일 필드 숨기기 */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.file-box label {
  padding: 4rem 6rem;
}
.file-box img {
  margin: 0.5rem;
  width: 80%;
  height: auto;
}
.alert-text div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
}
form {
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
}
form > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.comment {
  width: calc(100% - 4px);
  margin: 2rem 0;
}
.comment .title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.comment textarea {
  width: calc(100% - 2rem);
  height: 10rem;
  border: 2px solid black;
  border-radius: 10px;
  resize: none;
  padding: 1rem;
  font-weight: bold;
}
.submit-button {
  height: 4rem;
  width: 10rem;
  border: 2px solid black;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
}
</style>
