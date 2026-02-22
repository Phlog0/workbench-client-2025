import { FlowOptionsSlice, ImmerStateCreator } from "./types";

export const createFlowOptionsSlice: ImmerStateCreator<FlowOptionsSlice> = set => ({
  projectTheme: "light",
  changeProjectTheme: newTheme => {
    if (newTheme === "dark") {
      document.documentElement.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    set({ projectTheme: newTheme });
  },
});
