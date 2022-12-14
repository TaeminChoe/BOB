import store from "@/store";
import { createWebHistory, createRouter } from "vue-router";
const routes = [
  // Vue 3.x 버전의 not-found 설정
  {
    path: "/:pathMatch(.*)*",
    redirect: "/not-found",
  },

  {
    path: "/",
    name: "template",
    component: () => import("../components/template/TemplateLayout"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../page/home/HomePage"),
        isMenu: true,
      },
      {
        path: "/not-found",
        name: "not-found",
        component: () => import("../page/NotFoundPage"),
      },
      {
        path: "/login",
        name: "login",
        meta: { authorization: [""] },
        component: () => import("../page/login/LoginPage.vue"),
      },
      {
        path: "/signup",
        name: "signup",
        meta: { authorization: [""] },
        component: () => import("../page/signup/SignupPage.vue"),
      },
      {
        path: "/restaurant",
        name: "restaurant",
        component: () => import("../page/list/ListPage"),
        children: [
          {
            path: "detail",
            name: "restaurant-detail",
            component: () => import("../page/detail/DetailPage"),
            query: { storeId: null },
          },
          {
            path: "add",
            name: "restaurant-add",
            component: () => import("../page/list/ListCreatePage"),
          },
        ],
      },
      {
        path: "/notice",
        name: "notice",
        component: () => import("../page/notice/NoticePage"),
        isMenu: true,
      },
      {
        path: "/addNotice",
        name: "addNotice",
        component: () => import("../page/notice/AddNoticePage"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("../page/my/MyPage"),
        // meta: { authorization: ["client", "admin"] },
        isMenu: true,
        children: [
          {
            path: "review",
            name: "my-review",
            component: () => import("../page/my/ReviewPage"),
            children: [],
          },
          {
            path: "experiment",
            name: "experiment",
            component: () => import("../page/my/ExperimentPage"),
            children: [],
          },
        ],
      },
      {
        path: "/admin",
        name: "admin",
        component: () => import("../page/admin/AdminPage"),
        meta: { authorization: ["admin"] },
        isMenu: true,
      },
      {
        path: "/detail",
        name: "detail",
        component: () => import("../page/detail/DetailPage"),
        isMenu: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/BOB/"),
  routes,
});

/** 권한에 따른 화면 이동 제한 설정 */
router.beforeEach((to, from, next) => {
  store.state.menuOpen = false;
  const { auth } = store.state;
  const allowAuths = to.meta.authorization ?? [];
  // CASE 1. 정상 접근
  if (allowAuths.length === 0 || allowAuths.includes(auth)) {
    next();
  }
  // CASE 2. 비정상 접근
  else {
    const targetPath = to.path; // 이동하려는 화면
    console.error("경로 접근 권한 없음 URL : ", targetPath);
    console.error("경로 접근 권한 없음 현재 auth : ", auth);
    console.error("경로 접근 권한 없음 허가된 Auth : ", allowAuths);
    // CASE 2-1. 로그인 상태에서 비회원 전용 화면 진입(로그인, 회원가입)
    if (allowAuths.length === 1 && allowAuths[0] === "") {
      console.error(
        "CASE 2-1. 로그인 상태에서 비회원 전용 화면 진입(로그인, 회원가입) : 홈으로 이동"
      );
      next("/home");
    }
    // CASE 2-2. 미로그인 상태에서 로근 전용 화면 진입
    else if (allowAuths.includes("client") && allowAuths.includes("admin")) {
      console.error("CASE 2-2. 미로그인 상태에서 로근 전용 화면 진입");
      next("/login");
    }
    // CASE 2-2. 그 외 기타 등등 모든 잘못된 접근
    else {
      console.error(
        "CASE 2-2. 그 외 기타 등등 모든 잘못된 접근 : not-found 페이지"
      );
      next("/not-found");
    }
  }
});

export default router;
