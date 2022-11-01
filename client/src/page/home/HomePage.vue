<template>
  <div class="title-text">
    <div>MOST POPULAL</div>
  </div>
  <div class="content-layout">
    <div class="main-box" @click="handleGoDetail">
      <div class="img-box">
        <img
          src="https://i.pinimg.com/564x/07/3c/30/073c301c2691a0c8bf2e526d780fe652.jpg"
        />
      </div>
      <div class="text-box">
        <div class="main-title">Me Piatche</div>
        <div class="main-discription">
          서울 강남구 압구정로80길 19-2 삼영빌딩 1, 2층
        </div>
      </div>
    </div>
    <div class="title-text">
      <div>What's New</div>
    </div>
    <!-- 콘텐츠 main-box -->
    <div class="main-box">
      <div class="img-box">
        <img
          src="https://i.pinimg.com/564x/13/77/cd/1377cd2499c869dbf87c72fa79964327.jpg"
        />
      </div>
      <div class="text-box">
        <div class="main-title">SCOPA THE CHEF</div>
        <div class="main-discription">
          서울 강남구 압구정로80길 19-2 삼영빌딩 1, 2층
        </div>
      </div>
    </div>
    <div class="main-box">
      <div class="img-box">
        <img
          src="https://i.pinimg.com/564x/76/aa/98/76aa982d6024c7c7944721c09f865fba.jpg"
        />
      </div>
      <div class="text-box">
        <div class="main-title">한가위 식당</div>
        <div class="main-discription">
          서울 강남구 압구정로80길 19-2 삼영빌딩 1, 2층
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    handleGoDetail() {
      this.$router.push("restaurant/detail");
    },
  },
  mounted() {
    this.axios.get().then((res) => {
      console.log("test ", res);
    });
  },
};
</script>
