import { ReactFlowNodesSlice } from "../types/react-flow-nodes";

export const reactFlowBaseSelector = (state: ReactFlowNodesSlice) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setSelectedNodeId: state.setSelectedNodeId,
  addNode: state.addNode,
  setNodes: state.setNodes,
  setEdges: state.setEdges,
});
