import type { RouteRecordName, RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import { PermissionEnum } from "@/config/permission.config";
import LoginView from "@/views/Login/index.vue";
import layoutView from "@/views/common/layout.vue";
import PageLayoutView from "@/views/common/PageLayout.vue";
//404
import NotFoundView from "@/views/Error/not-found.vue";
//403
import NotAllowed from "@/views/Error/not-allowed.vue";
import { useAppStore, usePermissionStore } from "@/store";

declare module "vue-router" {
  interface RouteMeta extends Record<string | number | symbol, undefined> {
    permission: string;
    icon?: string;
    title?: string;
  }
}

export const MENU_ROUTE_NAME = "menuRoot";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: MENU_ROUTE_NAME,
    component: layoutView,
    redirect: "home",
    children: [
      {
        name: "home",
        path: "home",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          permission: PermissionEnum.USER,
          title: "控制台",
          icon: "dashboard",
        },
      },
      {
        name: "user",
        path: "user",
        component: PageLayoutView,
        meta: {
          title: "用户",
          icon: "usergroup",
          permission: PermissionEnum.USER,
        },
        redirect: { name: "user-list" },
        children: [
          {
            name: "user-list",
            path: "list",
            component: () => import("@/views/User/index.vue"),
            meta: {
              title: "管理用户",
              icon: "user",
              permission: PermissionEnum.USER_LIST,
            },
          },
          {
            name: "role-list",
            path: "roles",
            component: () => import("@/views/User/roles.vue"),
            meta: {
              title: "角色管理",
              icon: "user",
              permission: PermissionEnum.ROLE_ROLES,
            },
          },
        ],
      },
      {
        name: "Card",
        path: "card",
        component: () => import("@/views/CardData/index.vue"),
        meta: {
          permission: PermissionEnum.USER,
          title: "Card管理",
          icon: "chart",
        },
      },
    ],
  },
  // 404
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
  //403
  { path: "/403", name: "not-allowed", component: NotAllowed },
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
const whiteList: Array<RouteRecordName | undefined | null> = [
  "login",
  "not-found",
  "not-allowed",
];

router.beforeEach((to, form, next) => {
  const appStore = useAppStore();
  if (!appStore.token) {
    whiteList.indexOf(to.name) !== -1
      ? next()
      : next(`/login?redirect=${to.path}`);
  }
  if (appStore.token && to.path === "/login") {
    next({ name: "home" });
  }

  //1. 判断token是否存在, 判断当前访问的域名是否合法
  //2. 不合法-  403页面
  if (to.name) {
    const permissionStore = usePermissionStore();
    const hasNoPermission = !permissionStore.permissionRouteNameList.includes(
      to.name
    );
    appStore.token &&
      hasNoPermission &&
      whiteList.indexOf(to.name) !== -1 &&
      next({ name: "not-allowed" });
  }
  next();
});

export default router;
