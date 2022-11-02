<!-- 로딩 컴포넌트입니다. -->
<template>
  <div class="modal-container">
    <div v-if="getDescription === 'SUCCESS'" class="draw-box bgcolor-green">
      <div class="modal-description">{{ getDescription }}</div>
      <div @click="closeModal" class="modal-buttons">CONTINUE</div>
    </div>
    <div v-else-if="getDescription === 'FAIL'" class="draw-box bgcolor-orange">
      <div class="modal-description">{{ getDescription }}</div>
      <div @click="closeModal" class="modal-buttons">CONTINUE</div>
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
  height: 60vw;
  border-radius: 8px;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.modal-container .draw-box .modal-description {
  height: 3rem;
  margin-top: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
}
.modal-container .draw-box .modal-buttons {
  width: 75%;
  height: 2.5rem;
  margin: 2rem 0;
  background: white;
  border: 2px solid black;
  text-align: center;
  line-height: 3;
  font-weight: 700;
  font-size: 0.7rem;
}

.bgcolor-green {
  background-color: #43d392;
}
.bgcolor-orange {
  background-color: #ff9551;
}
.bgcolor-mint {
  background-color: #b9fff8;
}
</style>
