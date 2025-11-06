import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { ReactFlowNodesSlice } from "../types";

export const getSelectedNodeIds = (state: ReactFlowNodesSlice): ReactFlowNodeId[] =>
  state.selectedNodeIds;
