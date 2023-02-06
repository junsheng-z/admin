import type { TokenRequest } from "@/api/types";
import { defineStore } from "pinia";
import TokenApi from "@/api/token";
import { useUserStore } from "./user";

type tokenType = {
  token: any;
  menuCollapse: boolean;
};

export const useAppStore = defineStore("counter", {
  state: (): tokenType => {
    return {
      token: "",
      menuCollapse: false,
    };
  },
  persist: true,
  actions: {
    async login(loginForm: TokenRequest): Promise<void> {
      const Array_token: any = await TokenApi.createToken(loginForm);
      this.token = Array_token.authorization.token;
    },
    async logout(): Promise<void> {
      const userStore = useUserStore();
      this.token = "";
      userStore.$reset();
    },
  },
});
