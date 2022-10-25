<template>
  <div class="accordion">
    <p class="noticeTitle">TITLE TITLE TITLE TITLE</p>
    <p :class="this.isActive ? 'noticeDesc' : 'noticeDescHide'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam et
      doloribus porro voluptatum? Earum eaque aut incidunt ducimus, eum in
      nostrum numquam tenetur odio voluptas deserunt, quas dolorum mollitia
      officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
      et doloribus porro voluptatum? Earum eaque aut incidunt ducimus, eum in
      nostrum numquam tenetur odio voluptas deserunt, quas dolorum mollitia
      officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
      et doloribus porro voluptatum? Earum eaque aut incidunt ducimus, eum in
      nostrum numquam tenetur odio voluptas deserunt, quas dolorum mollitia
      officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
      et doloribus porro voluptatum? Earum eaque aut incidunt ducimus, eum in
      nostrum numquam tenetur odio voluptas deserunt, quas dolorum mollitia
      officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
      et doloribus porro voluptatum? Earum eaque aut incidunt ducimus, eum in
      nostrum numquam tenetur odio voluptas deserunt, quas dolorum mollitia
      officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
      et doloribus porro voluptatum? Earum eaque aut incidunt ducimus, eum in
      nostrum numquam tenetur odio voluptas deserunt, quas dolorum mollitia
      officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
      et doloribus porro voluptatum? Earum eaque aut incidunt ducimus, eum in
      nostrum numquam tenetur odio voluptas deserunt, quas dolorum mollitia
      officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
      et doloribus porro voluptatum? Earum eaque aut incidunt ducimus, eum in
      nostrum numquam tenetur odio voluptas deserunt, quas dolorum mollitia
      officia?
    </p>
  </div>
</template>

<script>
export default {
  props: ["isActive"],
};
</script>

<style>
.accordion {
  text-align: left;
}
.noticeTitle {
  font-weight: bold;
}
.noticeDescHide {
  display: none;
}
</style>
