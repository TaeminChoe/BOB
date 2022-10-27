<template>
  <div class="title-text">
    <div>{{ list.name }}</div>
  </div>
  <div class="content-layout">
    <div class="main-box">
      <div class="img-box">
        <img :src="list.img_url" />
      </div>
      <div class="detail-box">
        <img src="@/assets/img/pin.png" class="icon-img" />
        <div class="detail-title">
          {{ list.address }}
        </div>
      </div>
      <div class="detail-box">
        <img src="@/assets/img/phone.png" class="icon-img" />
        <div class="detail-title">{{ list.phone_number }}</div>
      </div>
    </div>
    <div class="discription-box">
      {{ list.description }}
    </div>
  </div>
</template>

<script>
import { getStoreDetail } from "@/gql/service-api";

export default {
  name: "DetailPage",
  data() {
    return {
      list: {},
    };
  },
  created() {
    let storeId = this.$route.query.store;
    if (!storeId) {
      this.$router.push({ name: "not-found" });
    } else {
      getStoreDetail({ storeId }).then((res) => {
        this.list = res.data.store;
      });
    }
  },
};
</script>
