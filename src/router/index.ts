import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

import LoginView from "@/views/Login/index.vue";
import layoutView from "@/views/common/layout.vue"
import { useAppStore } from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
   name:"root",
   component: layoutView,
   redirect: "home",
   children: [
    {
      name: "home",
      path: "home",
      component: () => import("@/views/Home/index.vue"),
    }
   ]
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  strict: true,
  routes, // `routes: routes` 的缩写
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

//白名单
const whiteList = ["/login"];

router.beforeEach((to, form, next) => {
  const appStore = useAppStore();
  if (!appStore.token) {
    whiteList.indexOf(to.path) !== -1
      ? next()
      : next(`/login?redirect=${to.path}`);
  } 
  if (appStore.token && to.path === "/login") {
    next({name: "home"})
  }
  next()
});

export default router;
