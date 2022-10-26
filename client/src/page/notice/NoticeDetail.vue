<template>
  <div class="accordion">
    <p :class="this.isActive ? 'noticeTitle' : 'noticeTitleHide'">
      {{ list.title }}
    </p>
    <p :class="this.isActive ? 'noticeDesc' : 'noticeDescHide'">
      {{ list.desc }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    list: Object,
  },
};
</script>

<style>
.accordion {
  text-align: left;
}
.noticeTitle {
  font-weight: bold;
  margin-bottom: 1rem;
}
.noticeTitleHide {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.noticeDescHide {
  display: none;
}
</style>
