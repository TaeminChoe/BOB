<template>
  <div class="title-text"><div>Notice</div></div>
  <div class="content-layout">
    <input class="input-box" placeholder="Title" v-model="title" />
    <input class="input-box" placeholder="Description" v-model="description" />
    <button class="submit-button bgcolor-green" @click="submitNotice">
      SUBMIT
    </button>
  </div>
</template>

<script>
import { createNotice } from "@/gql/service-api";

export default {
  name: "AddNoticePage",
  methods: {
    submitNotice() {
      const { description, title } = this;
      const payload = {
        date: new Date().getTime().toString(),
        description,
        title,
      };
      createNotice(payload);
      this.$router.push("/notice");
    },
  },
};
</script>
