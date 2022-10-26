<!-- 로딩 컴포넌트입니다. -->
<template>
  <div class="loading-container">
    <div class="loading-box"></div>
  </div>
</template>
<script>
export default {
  name: "LoadingWrap",
};
</script>
<style>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.loading-container .loading-box {
  width: 20vw;
  height: 20vw;
  border: 5px solid red;
  border-top-color: black;
  border-right-color: white;
  border-bottom-color: blue;
  border-radius: 50%;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-duration: 1s;
}

@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
