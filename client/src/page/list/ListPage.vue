<template>
  <div class="template-layout">
    <div class="title-text">
      <div>Restaurant</div>
      <button class="bgcolor-orange" @click="handleAddList">ADD LIST</button>
    </div>
    <div class="list-layout">
      <div class="list-box">
        <div class="img-box">
          <img
            src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__480.jpg"
          />
        </div>
        <div class="text-box">
          <div class="list-title">레스토랑 이름영역입니다</div>
          <div class="list-discription">레스토랑 설명영역입니다</div>
        </div>
      </div>
      <div class="list-box">
        <div class="img-box">
          <img
            src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__480.jpg"
          />
        </div>
        <div class="text-box">
          <div class="list-title">레스토랑 이름영역입니다</div>
          <div class="list-discription">레스토랑 설명영역입니다</div>
        </div>
      </div>
      <div class="list-box">
        <div class="img-box">
          <img
            src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__480.jpg"
          />
        </div>
        <div class="text-box">
          <div class="list-title">레스토랑 이름영역입니다</div>
          <div class="list-discription">레스토랑 설명영역입니다</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/layout.css";
export default {
  name: "ListPage",
  methods: {
    handleAddList() {
      this.$router.push("/create");
    },
  },
};
</script>
