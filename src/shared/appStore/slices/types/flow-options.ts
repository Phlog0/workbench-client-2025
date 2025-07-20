export type ProjectTheme = "light" | "dark";

export type FlowOptionsStoreState = {
  projectTheme: ProjectTheme;
};

export type FlowOptionsStoreActions = {
  changeProjectTheme: (newTheme: ProjectTheme) => void;
};

export type FlowOptionsSlice = FlowOptionsStoreState & FlowOptionsStoreActions;
