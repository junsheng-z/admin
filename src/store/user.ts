import { defineStore } from "pinia";
import type {UserType } from "@/api/types"
import UserApi from "@/api/user"
type userState = {
    currentUser: UserType | null
} 

export const useUserStore = defineStore("user",{
    state: ():userState  => {
        return {
            currentUser: null
        }
    },

    persist: true,
    actions: {
        async fetchCurrentUser() {
            this.currentUser = await UserApi.me();
        }
    }
})