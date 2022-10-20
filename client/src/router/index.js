import store from "@/store";
import { createWebHistory, createRouter } from "vue-router";
// import TemplateLayout from "../components/template/TemplateLayout";

// import MainPagein from "../components/views/MainPage";
// import SkillPage from "../components/views/SkillPage";
// import ProjectPage from "../components/views/project/ProjectPage";
// import ProjectDetailPage from "../components/views/project/ProjectDetailPage";
// import ProjectListPage from "../components/views/project/ProjectListPage";
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../page/login/LoginPage.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../page/signup/SignupPage.vue"),
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
        path: "/notice",
        name: "notice",
        component: () => import("../page/notice/NoticePage"),
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/** 권한에 따른 제약 설정 */
router.beforeEach((to, from, next) => {
  const { auth } = store.state;
  console.log(auth, to.meta.authorization);

  next();
});

export default router;
