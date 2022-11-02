<template>
  <div class="title-text"><div>Sign Up</div></div>
  <div class="content-layout">
    <input class="input-box" placeholder="Your Name" v-model="name" />
    <input class="input-box" placeholder="ID" v-model="id" />
    <button class="submit-button bgcolor-green" @click="handleClickIdCheck">
      중복확인
    </button>
    <input class="input-box" placeholder="Create Password" v-model="pw" />
    <input class="input-box" placeholder="Check Password" v-model="pwConfirm" />
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
import { createAccountInfo, getUserDetail } from "@/system/ApiService";
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
          pw,
          name,
          auth: "client",
        };

        createAccountInfo(payload)
          .then((res) => {
            console.log("회원가입 res", res);
          })
          .catch((e) => console.error(e));
      }
    },

    // 입력값 유효성 검사
    handleValidation() {
      const { id, name, pw, pwConfirm } = this;
      if (!id || !name || !pw || !pwConfirm) return "정보 입력 공백";
      else if (pw !== pwConfirm) return "패스워드 확인이 불일치합니다.";
      else return "";
    },
    // 아이디 중복확인
    handleClickIdCheck() {
      const { id } = this;
      getUserDetail({ id });
    },
  },
};
</script>
