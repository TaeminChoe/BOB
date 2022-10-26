<template>
  <div class="title-text"><div>Login</div></div>
  <div class="content-layout">
    <input placeholder="ID" v-model="id" />
    <input placeholder="Password" v-model="pw" />
    <button class="submit-button bgcolor-green" @click="handleClickLogin">
      NEXT
    </button>
    <button class="submit-button bgcolor-orange" @click="handleGoSignup">
      REGISTER
    </button>
  </div>
</template>

<script>
import "@/assets/css/layout.css";
import UserData from "@/mock/user";
import { setLoginLocalToken } from "@/helper/helper-storage";
export default {
  name: "LoginPage",
  data() {
    return {
      id: "",
      pw: "",
    };
  },
  methods: {
    /** To Do 양태욱: 해당 로그인 로직은 API 연동시 다시 구현해야됨 */
    handleClickLogin() {
      const { id, pw } = this;
      /** ID & PW 없을 입력하지 않았을 때  */
      if (!id || !pw) {
        alert("정보를 똑바로 입력하세요");
        return false;
      }

      const user = UserData.find((data) => data.id === id);
      // 아이디가 없거나 비밀번호가 틀렸거나
      if (!user || user.pw !== pw) {
        alert("입력하신 정보에 해당하는 계정이 없습니다.");
      }

      // 로그인 성공
      else {
        const { auth } = user;
        this.$store.commit("setAuth", auth ? auth : "client");
        this.$store.commit("setAccountInfo", user);

        // To Do 양태욱 : 현재는 토큰이 없기에 유저 정보를 모두 넘기지만 추후에는 토큰 값으로 수정해야됨
        setLoginLocalToken(user);
        this.$router.push("/");
      }
    },
    handleGoSignup() {
      this.$router.push("signup");
    },
  },
};
</script>
