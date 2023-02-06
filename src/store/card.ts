import { defineStore } from "pinia";
import type { CardType } from "@/api/types";
import cardApi from "@/api/Card";

type cardState = {
  card: CardType | null;
};

export const usecardStore = defineStore("card", {
  state: (): cardState => {
    return {
      card: null,
    };
  },

  persist: true,
  actions: {
    async fetchCurrentCard() {
      this.card = await cardApi.card();
    },
  },
});
