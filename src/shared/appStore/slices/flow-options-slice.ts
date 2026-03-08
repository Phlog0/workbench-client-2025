import { LOCAL_STORAGE_KEYS } from "@/shared/constants";
import { FlowOptionsSlice, ImmerStateCreator } from "./types";

export const createFlowOptionsSlice: ImmerStateCreator<FlowOptionsSlice> = set => ({
  projectTheme: "light",
  changeProjectTheme: newTheme => {
    if (newTheme === "dark") {
      document.documentElement.classList.add(newTheme);
      localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, newTheme);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, "light");
    }
    set({ projectTheme: newTheme });
  },
});
