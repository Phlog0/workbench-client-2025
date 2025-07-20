import { ReactFlowNodesSlice } from "../types/react-flow-nodes";

export const initProjectSchemeSelector = (state: ReactFlowNodesSlice) => ({
  setSelectedNodeId: state.setSelectedNodeId,

  setNodes: state.setNodes,
  setEdges: state.setEdges,
  setViewportSync: state.setViewportSync,
});
