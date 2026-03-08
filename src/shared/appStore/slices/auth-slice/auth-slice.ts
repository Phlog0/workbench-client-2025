import { $api } from "@/shared/api/services";
import { ImmerStateCreator } from "../types";
import { AuthSlice } from "../types/auth-state";
import { LOCAL_STORAGE_KEYS } from "@/shared/constants";
import axios from "axios";
import { BadAuthResponse } from "@/shared/api/types/auth-response";

export const createAuthSlice: ImmerStateCreator<AuthSlice> = set => ({
  isAuth: false,
  user: null,
  setAuth(val) {
    set({ isAuth: val });
  },
  setUser(val) {
    set({ user: val });
  },
  // async login(values) {
  //   try {
  //     const data = await $api.auth.login(values);
  //     localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, data.accessToken);
  //     localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ID, String(data.user.id));
  //     set({ isAuth: true, user: data.user });
  //   } catch (error) {
  //     if (error instanceof AxiosError) {
  //       console.error(error.message, error.response?.data);
  //     }
  //     console.error(error);
  //     set({ isAuth: false, user: null });
  //     localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
  //     localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_ID);
  //   }
  // },
  // async registration(values) {
  //   try {
  //     const data = await $api.auth.register(values);
  //     localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, data.accessToken);
  //     localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ID, String(data.user.id));
  //     set({ isAuth: true, user: data.user });
  //   } catch (error) {
  //     if (error instanceof AxiosError) {
  //       console.error(error.message, error.response?.data);
  //     }
  //     console.error(error);
  //     set({ isAuth: false, user: null });
  //     localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
  //     localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_ID);
  //   }
  // },
  // async logout() {
  //   await $api.auth.logout();
  //   localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
  //   localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_ID);
  //   set({ isAuth: false, user: null });
  // },
  async checkAuth() {
    try {
      const response = await $api.auth.verifyUser();

      set({ isAuth: true, user: response.user });
    } catch (error) {
      if (axios.isAxiosError<BadAuthResponse>(error)) {
        console.error(error.response?.data.message);
      }
      set({ isAuth: false, user: null });
      localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    }
  },
});
