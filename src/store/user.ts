import { defineStore } from "pinia";
import type { UserType } from "@/api/types";
import UserApi from "@/api/user";
import { usePermissionStore } from "./permission";
type userState = {
  currentUser: UserType | null;
};

export const useUserStore = defineStore("user", {
  state: (): userState => {
    return {
      currentUser: null,
    };
  },

  persist: true,
  actions: {
    async fetchCurrentUser() {
      this.currentUser = await UserApi.me();
      const permissions = this.currentUser.data.user.permissions;

      //超级管理员
      usePermissionStore().generateRoutes(permissions);
    },
  },
});
