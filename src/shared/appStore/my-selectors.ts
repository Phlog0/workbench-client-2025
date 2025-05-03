import { AppReactFlowBasicActions, AppState } from "./types";

export const reactFLowSelectors = (state: AppState & AppReactFlowBasicActions) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
    setSelectedNodeId: state.setSelectedNodeId,
    addNode: state.addNode,
    setNodes: state.setNodes
});


export const getThemeSelector = (state: AppState): "light" | "dark" => state.projectTheme


