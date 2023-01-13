import type { TokenRequest } from "@/api/types";
import type { StoreDefinition } from "pinia";
import { defineStore } from "pinia";
import TokenApi from "@/api/token";
import { useUserStore } from "./user";

type ArrayToken = {
  authorization: string;
};

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
      let Array_token = await TokenApi.createToken(loginForm);
      this.token = Array_token.authorization.token;
    },
    async logout(): Promise<void> {
      const userStore = useUserStore();
      this.token = "";
      userStore.$reset();
    },
  },
});
