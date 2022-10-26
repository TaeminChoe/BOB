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
    // 회원가입 버튼 클릭 이벤트
    handleClickSignup() {
      const { id, name, pw } = this;
      const valid = this.handleValidation();
      if (valid) {
        alert(valid);
      } else {
        const payload = {
          id,
          date: new Date().getTime().toString(),
          pw,
          name,
          auth: "client",
        };
        createUser(payload).then((res) => {
          const { message, succeed } = res.data.signUp;
          // CASE1. 회원가입 성공
          if (succeed) {
            this.$router.push("login");
          }
          // CASE2. 회원가입 실패
          else {
            alert(message);
          }
        });
      }
    },

    // 입력값 유효성 검사
    handleValidation() {
      const { id, name, pw, pwConfirm } = this;
      if (!id || !name || !pw || !pwConfirm) return "정보 입력 공백";
      else if (pw !== pwConfirm) return "패스워드 확인이 불일치합니다.";
      else return "";
    },
  },
};
</script>
