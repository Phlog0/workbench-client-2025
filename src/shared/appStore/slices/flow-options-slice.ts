import { FlowOptionsSlice, ImmerStateCreator } from "./types";

export const createFlowOptionsSlice: ImmerStateCreator<FlowOptionsSlice> = (set) => ({
  projectTheme: "light",
  changeProjectTheme: (newTheme) => set((state) => (state.projectTheme = newTheme)),
});
