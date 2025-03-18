import { AppState } from "./types";

export const reactFLowSelectors = (state: AppState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
    setSelectedNodeId: state.setSelectedNodeId,
    addNode: state.addNode,
});


export const getThemeSelector = (state: AppState): "light" | "dark" => state.projectTheme


