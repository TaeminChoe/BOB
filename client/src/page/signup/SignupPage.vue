<template>
  <div class="title-text"><div>Sign Up</div></div>
  <div class="content-layout">
    <input placeholder="Your Name" v-model="name" />
    <input placeholder="ID" v-model="id" />
    <input placeholder="Create Password" v-model="pw" />
    <input placeholder="Check Password" v-model="pwConfirm" />
    <button class="submit-button bgcolor-green" @click="handleClickSignup">
      NEXT
    </button>
  </div>
</template>

<script>
/**
 * To Do 작성 : 양태욱
 * 1. pw check
 * 2. m_date 논의 후 양식 결정
 * 3. 입력값 유효 검사
 */
import { createUser } from "@/gql/service-api";
export default {
  name: "SignupPage",
  data() {
    return {
      id: "",
      name: "",
      pw: "",
      pwConfirm: "",
    };
  },
  methods: {
    handleClickSignup() {
      const { id, name, pw } = this;
      const payload = {
        id,
        m_date: new Date().getTime().toString(),
        pw,
        name,
        auth: "client",
      };
      createUser(payload);
    },
  },
};
</script>
