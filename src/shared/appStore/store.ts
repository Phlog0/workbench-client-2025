import { createFlowOptionsSlice, createReactFlowNodesSlice } from "@/shared/appStore/slices";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { FlowOptionsSlice, ReactFlowNodesSlice } from "./slices/types";
import { devtools } from "zustand/middleware";
import { createAuthSlice } from "./slices/auth-slice/auth-slice";
import { AuthSlice } from "./slices/types/auth-state";
export const useBoundStore = create<FlowOptionsSlice & ReactFlowNodesSlice & AuthSlice>()(
  devtools(
    immer((...a) => ({
      ...createFlowOptionsSlice(...a),
      ...createReactFlowNodesSlice(...a),
      ...createAuthSlice(...a),
    }))
  )
);
