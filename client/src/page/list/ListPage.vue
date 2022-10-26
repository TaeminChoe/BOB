<template>
  <router-view v-if="!isList" />
  <div v-if="isList" class="title-text">
    <div>Restaurant</div>
    <button class="bgcolor-orange" @click="handleAddList">ADD LIST</button>
  </div>
  <div class="content-layout">
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
</template>

<script>
export default {
  name: "ListPage",
  computed: {
    /** 현재 경로가 List 화면인지 확인 */
    isList() {
      return this.$route.matched.at(-1).path === "/restaurant";
    },
  },
  methods: {
    handleAddList() {
      this.$router.push("/create");
    },
  },
};
</script>
