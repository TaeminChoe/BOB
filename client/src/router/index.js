import store from "@/store";
import { createWebHistory, createRouter } from "vue-router";
const routes = [
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
    path: "/",
    name: "template",
    component: () => import("../components/template/TemplateLayout"),
    meta: { authorization: ["admin", "client"] },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../page/home/HomePage"),
        meta: { authorization: ["admin", "client"] },
        isMenu: true,
      },
      {
        path: "/notice",
        name: "notice",
        component: () => import("../page/notice/NoticePage"),
        meta: { authorization: ["admin", "client"] },
        isMenu: true,
      },
      {
        path: "/admin",
        name: "admin",
        component: () => import("../page/admin/AdminPage"),
        meta: { authorization: ["admin"] },
        isMenu: true,
      },
    ],
  },
  // Vue 3.x 버전의 not-found 설정
  {
    path: "/:pathMatch(.*)*",
    redirect: "/not-found",
  },
  {
    path: "/not-found",
    name: "not-found",
    component: () => import("../page/NotFoundPage"),
  },
];

const router = createRouter({
  history: createWebHistory("/BOB/"),
  routes,
});

/** 권한에 따른 제약 설정 */
router.beforeEach((to, from, next) => {
  console.log("ytw to", to);
  next();
  const { auth } = store.state;
  const allowAuths = to.meta.authorization ?? [];
  // // console.log(allowAuths);
  if (allowAuths.length === 0) {
    next();
  } else if (!allowAuths.includes(auth)) {
    console.error("경로 접근 권한 없음");
    const targetPath = to.path;
    if (targetPath === "/login" || targetPath === "/signup")
      next({ path: "home" });
    else if (auth === "") next({ path: "login" });
    else next({ path: "not-found" });
  } else {
    next();
  }
});

export default router;
