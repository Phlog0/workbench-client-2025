import { FlowOptionsSlice } from "../types";
import { ProjectTheme } from "../types/";

export const getThemeSelector = (state: FlowOptionsSlice): ProjectTheme => state.projectTheme;
