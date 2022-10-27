<template>
  <div class="title-text"><div>Restaurant</div></div>
  <form class="content-layout" @submit.prevent="handleAddList">
    <input v-model="name" placeholder="Title" />
    <input v-model="address" placeholder="Address" />
    <input v-model="phone_number" placeholder="Number" />
    <input v-model="img_url" placeholder="IMG Link" />
    <input v-model="date" placeholder="Date" />
    <input v-model="description" placeholder="Description" />
    <button type="submit" class="submit-button bgcolor-green">SUBMIT</button>
  </form>
</template>

<script>
import { createStore } from "@/gql/service-api";

export default {
  name: "ListCreatePage",
  data() {
    return {
      name: "",
      address: "",
      phone_number: "",
      img_url: "",
      date: "",
      description: "",
    };
  },
  methods: {
    handleAddList() {
      if (
        this.name &&
        this.address &&
        this.phone_number &&
        this.img_url &&
        this.date &&
        this.description
      ) {
        let input = {
          phone_number: this.phone_number,
          name: this.name,
          img_url: this.img_url,
          description: this.description,
          date: this.date,
          address: this.address,
        };
        createStore({ input })
          .then((res) => {
            if (res.data.registStore.succeed) {
              this.$router.push("/restaurant");
            }
          })
          .catch((e) => {
            console.log("error", e);
          });
      } else {
        console.log("값을 다 채워야함");
      }
    },
  },
};
</script>
