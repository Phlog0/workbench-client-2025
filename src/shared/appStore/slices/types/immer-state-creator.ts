import { StateCreator } from "zustand";
import { FlowOptionsSlice } from "./flow-options";
import { ReactFlowNodesSlice } from "./react-flow-nodes";
import { AuthSlice } from "./auth-state";

export type SharedSlice = ReactFlowNodesSlice & FlowOptionsSlice & AuthSlice;

export type ImmerStateCreator<T> = StateCreator<
  SharedSlice,
  [["zustand/immer", never], never],
  [],
  T
>;
