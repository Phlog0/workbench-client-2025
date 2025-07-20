import { StateCreator } from "zustand";
import { FlowOptionsSlice } from "./flow-options";
import { ReactFlowNodesSlice } from "./react-flow-nodes";

export type SharedSlice = ReactFlowNodesSlice & FlowOptionsSlice;

export type ImmerStateCreator<T> = StateCreator<
  SharedSlice,
  [["zustand/immer", never], never],
  [],
  T
>;
