<template>
  <Slide right>
    <div>
      <h1>계정 정보 영역</h1>
      <br />
    </div>
    <a id="home" href="#">
      <span>Home</span>
    </a>
    <a id="test1" href="#">
      <span>test1</span>
    </a>
    <a id="test2" href="#">
      <span>test2</span>
    </a>
    <a id="test3" href="#">
      <span>test3</span>
    </a>
  </Slide>
</template>

<script>
import { Slide } from "vue3-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`
export default {
  name: "SlideMenu",
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {},
  components: {
    Slide,
  },
};
</script>

<style scoped></style>
