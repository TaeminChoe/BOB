<!-- 로딩 컴포넌트입니다. -->
<template>
  <div class="modal-container">
    <div class="draw-box">
      <div class="modal-header">모달 헤더</div>
      <div class="modal-description">{{ getDescription }}</div>
      <div class="modal-buttons">
        <button @click="closeModal">확인</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalWrap",
  computed: {
    getDescription() {
      return this.$store.state.modal.description;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("setModalClose");
    },
  },
};
</script>
<style>
.modal-container {
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

.modal-container .draw-box {
  width: 80vw;
  height: 80vw;
  background-color: white;
}
</style>
