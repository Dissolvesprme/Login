import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/index.vue"),
    meta: {
      title: "登录",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !localStorage.getItem("token")) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
