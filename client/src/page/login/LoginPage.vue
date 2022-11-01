<template>
  <div class="title-text"><div>Login</div></div>
  <div class="content-layout">
    <input class="input-box" placeholder="ID" v-model="id" />
    <input class="input-box" placeholder="Password" v-model="pw" />
    <button class="submit-button bgcolor-green" @click="handleClickLogin">
      NEXT
    </button>
    <button class="submit-button bgcolor-orange" @click="handleGoSignup">
      REGISTER
    </button>
  </div>
</template>

<script>
import { setLoginLocalToken } from "@/helper/helper-storage";
// import { getAccountInfo } from "@/gql/service-api";
import { getAccountInfo } from "../../ApiService";

export default {
  name: "LoginPage",
  data() {
    return {
      id: "",
      pw: "",
    };
  },
  methods: {
    /** GQL 로그인 */
    handleClickLogin() {
      const { id, pw } = this;
      /** ID & PW 없을 입력하지 않았을 때  */
      if (!id || !pw) {
        alert("정보를 똑바로 입력하세요");
        return false;
      }
      getAccountInfo({
        id,
        pw,
      }).then((res) => {
        const result = res.data.login;
        // 아이디가 없거나 비밀번호가 틀렸거나
        if (!result) {
          alert("입력하신 정보에 해당하는 계정이 없습니다.");
        }
        // 로그인 성공
        else {
          const { auth } = result;
          this.$store.commit("setAuth", auth);
          this.$store.commit("setAccountInfo", result);

          setLoginLocalToken(result);
          this.$router.push("/");
        }
      });
    },

    /** 회원가입 화면 이동 */
    handleGoSignup() {
      this.$router.push("signup");
    },
  },
};
</script>
