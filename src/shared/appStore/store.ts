import { createFlowOptionsSlice, createReactFlowNodesSlice } from "@/shared/appStore/slices";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { FlowOptionsSlice, ReactFlowNodesSlice } from "./slices/types";
import { devtools } from "zustand/middleware";
export const useBoundStore = create<FlowOptionsSlice & ReactFlowNodesSlice>()(
  devtools(
    immer((...a) => ({
      ...createFlowOptionsSlice(...a),
      ...createReactFlowNodesSlice(...a),
    })),
  ),
);
