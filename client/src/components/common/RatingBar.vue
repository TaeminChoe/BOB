<template>
  <div class="inner">
    <div class="title">{{ title }}</div>
    <div class="star-rating">
      <div
        class="star"
        v-for="index in 5"
        :key="index"
        @click="onChange(title, index)"
      >
        <span v-if="index < rating">
          <img src="@/assets/img/starFill.png" />
        </span>
        <span v-if="index >= rating">
          <img src="@/assets/img/starEmpty.png" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingBar",
  props: {
    title: String,
    rating: Number,
    onChange: Function,
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style>
template {
  font-family: "Roboto", sans-serif;
}
.inner {
  width: 80%;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1.5rem;
}
.inner .title {
}
.star-rating {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.6rem;
}
</style>
