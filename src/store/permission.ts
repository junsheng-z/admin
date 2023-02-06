import { defineStore } from "pinia";
import type { RouteRecordName, RouteRecordRaw } from "vue-router";
import { MENU_ROUTE_NAME, routes } from "@/router";
type PermissionStore = {
  routes: Array<RouteRecordRaw>;
};

const fiterRoutes = (
  routes: Array<RouteRecordRaw>,
  permissions: Array<string>
) => {
  return routes.filter((route: RouteRecordRaw) => {
    if (route.children) {
      route.children = fiterRoutes(route.children, permissions);
    }
    // 1.没有定义meta路由 ： !route.meta
    // 2.没有定义meta里面permission !route.meta.permission
    // 3.permission是否存在与当前permission里面 权限检验
    return (
      !route.meta ||
      (route.meta && !route.meta.permission) ||
      (route.meta.permission && permissions.indexOf(route.meta.permission))
    );
  });
};


const buildPermissionRoutesNameList = (routes: Array<RouteRecordRaw>) => {
  const nameList: Array<RouteRecordName> = [];

  routes.forEach((route: RouteRecordRaw) => {
    if(route.children) {
      nameList.push(...buildPermissionRoutesNameList(route.children));
    }
    if(route.name) {
      nameList.push(route.name)
    }
  });
  return nameList
}


export const usePermissionStore = defineStore("permission", {
  state(): PermissionStore {
    return {
      routes: [],
    };
  },
  persist: true,
  actions: {
    generateRoutes(permissions: Array<string>) {
      this.routes = fiterRoutes(routes, permissions);
    },
  },
  getters: {
    menuRoutes(): Array<RouteRecordRaw> | undefined {
      return this.routes.find(
        (route: RouteRecordRaw) => route.name === MENU_ROUTE_NAME
      )?.children;
    },
    permissionRouteNameList(): Array<RouteRecordName> {
      return this.routes ? buildPermissionRoutesNameList(this.routes) : [];
    }
  },

});
