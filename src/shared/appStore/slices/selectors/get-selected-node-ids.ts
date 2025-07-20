import { ReactFlowNodeId, ReactFlowNodesSlice } from "../types";

export const getSelectedNodeIds = (state: ReactFlowNodesSlice): ReactFlowNodeId[] =>
  state.selectedNodeIds;
