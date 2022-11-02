<template>
  <router-view />
</template>

<script>
import { getStore } from "@/gql/service-api";

export default {
  name: "ListPage",
  data() {
    return {
      lists: [],
    };
  },
  computed: {},
  methods: {
    getListData() {
      getStore().then((res) => {
        console.log("getStoreData", res.data.stores);
        this.lists = res.data.stores;
      });
    },
  },
  created() {
    // this.getListData();
  },
};
</script>
