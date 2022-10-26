<template>
  <router-view v-if="!isList" />
  <slot v-else>
    <div class="title-text">
      <div>Restaurant</div>
      <button
        v-if="$store.state.auth == 'admin'"
        class="bgcolor-orange"
        @click="handleAddList"
      >
        ADD LIST
      </button>
    </div>
    <div class="content-layout">
      <div class="list-box" @click="handleGoDetail">
        <img
          class="trash-btn"
          v-if="$store.state.auth == 'admin'"
          src="@/assets/img/trash.png"
          @click="handleDelList"
        />
        <div class="img-box">
          <img
            class="list-img"
            src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__480.jpg"
          />
        </div>
        <div class="text-box">
          <div class="list-title">
            {{ titleSubstring }}
          </div>
          <div class="list-discription">{{ disSubstring }}</div>
        </div>
      </div>
    </div>
  </slot>
</template>

<script>
export default {
  name: "ListPage",
  data: function () {
    return {
      titleStr:
        "Restaurant Title 세줄이상 말줄임 적용 테스트 입니다dlqslslsekskeksdflsdlkfsdkl",
      disStr:
        "레스토랑 설명영역 말줄임 적용 테스트 입니다dlqslslsekskeksdflsdlkfsdkl레스토랑 설명영역 말줄임 적용 테스트 입니다dlqslslsekskeksdflsdlkfsdkl레스토랑 설명영역 말줄임 적용 테스트 입니다dlqslslsekskeksdflsdlkfsdkl레스토랑 설명영역 말줄임 적용 테스트 입니다dlqslslsekskeksdflsdlkfsdkl",
    };
  },
  computed: {
    /** 현재 경로가 List 화면인지 확인 */
    isList() {
      console.log(this.$route.matched.at(-1).path === "/restaurant");
      return this.$route.matched.at(-1).path === "/restaurant";
    },
    titleSubstring: function () {
      let maxLength = 30;
      if (this.titleStr.length < maxLength) {
        return this.titleStr;
      }
      return this.titleStr.substring(0, maxLength) + "...";
    },
    disSubstring: function () {
      let maxLength = 120;
      if (this.disStr.length < maxLength) {
        return this.disStr;
      }
      return this.disStr.substring(0, maxLength) + "...";
    },
  },
  methods: {
    handleAddList() {
      this.$router.push("restaurant/add");
    },
    handleDelList(e) {
      console.log("delete list func", e);
    },
    handleGoDetail() {
      this.$router.push("restaurant/detail");
    },
  },
};
</script>
