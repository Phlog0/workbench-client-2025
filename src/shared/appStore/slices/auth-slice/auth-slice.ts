import { $api } from "@/shared/api/services";
import { ImmerStateCreator } from "../types";
import { AuthSlice } from "../types/auth-state";
import { LOCAL_STORAGE_KEYS } from "@/shared/constants";
import axios, { AxiosError } from "axios";
import { BadAuthResponse } from "@/shared/api/types/auth-response";

export const createAuthSlice: ImmerStateCreator<AuthSlice> = (set) => ({
  isAuth: false,
  user: null,
  setAuth(val) {
    set({ isAuth: val });
  },
  setUser(val) {
    set({ user: val });
  },
  async login(values) {
    try {
      const data = await $api.auth.login(values);
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, data.accessToken);
      set({ isAuth: true, user: data.user });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.message, error.response?.data);
      }
      console.error(error);
    }
  },
  async registration(values) {
    try {
      const data = await $api.auth.register(values);
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, data.accessToken);
      set({ isAuth: true, user: data.user });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.message, error.response?.data);
      }
      console.error(error);
    }
  },
  async logout() {
    await $api.auth.logout();
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    set({ isAuth: false, user: null });
  },
  async checkAuth() {
    try {
      const response = await $api.auth.checkAuth();
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, response.data.accessToken);
      set({ isAuth: true, user: response.data.user });
    } catch (error) {
      if (axios.isAxiosError<BadAuthResponse>(error)) {
        console.error(error.response?.data.message);
      }
    }
  },
});
