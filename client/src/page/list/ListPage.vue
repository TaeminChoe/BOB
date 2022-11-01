<template>
  <router-view v-if="isListAddPage" />
  <slot v-if="isListPage">
    <div class="title-text">
      <div>Restaurant</div>
      <button
        v-if="$store.state.auth == 'admin'"
        class="bgcolor-orange"
        @click="handleAddList"
      >
        ADD LIST
      </button>
    </div>
    <div class="content-layout">
      <div
        class="list-box"
        v-for="(list, index) in lists"
        @click="handleGoDetail(index)"
        :key="list.store_id"
      >
        <div
          class="trash-btn"
          v-if="$store.state.auth == 'admin'"
          @click="handleDelList($event, index)"
        >
          <img src="@/assets/img/trash.png" />
        </div>
        <div class="img-box">
          <img class="list-img" :src="list.img_url" />
        </div>
        <div class="text-box">
          <div class="list-title">
            {{ list.name }}
          </div>
          <div class="list-discription">{{ list.description }}</div>
        </div>
      </div>
    </div>
  </slot>
</template>

<script>
import { deleteStore, getStore } from "@/gql/service-api";

export default {
  name: "ListPage",
  data() {
    return {
      lists: [],
    };
  },
  computed: {
    /** 경로에 따른 화면 랜딩 */
    isListPage() {
      return this.$route.matched.at(-1).path === "/restaurant";
    },
    isListAddPage() {
      return this.$route.matched.at(-1).path === "/restaurant/add";
    },
  },
  methods: {
    getListData() {
      getStore().then((res) => {
        console.log("getStoreData", res.data.stores);
        this.lists = res.data.stores;
      });
    },
    handleAddList() {
      this.$router.push("restaurant/add");
    },
    handleDelList(event, index) {
      let deleteStoreId = this.lists[index].store_id;
      deleteStoreId = String(deleteStoreId);
      deleteStore({ deleteStoreId }).then((res) => {
        if (res.data.deleteStore.succeed) {
          this.getListData();
        }
      });
      event.stopPropagation();
    },
    handleGoDetail(index) {
      let store = this.lists[index].store_id;
      this.$router.push({ name: "detail", query: { store } });
    },
    titleSubstring(text) {
      let maxLength = 30;
      if (text.length < maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
    disSubstring(text) {
      let maxLength = 120;
      if (text.length < maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
  },
  created() {
    this.getListData();
  },
};
</script>
