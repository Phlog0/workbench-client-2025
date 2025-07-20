import { Edge, OnNodesChange, OnEdgesChange, OnConnect, XYPosition, Viewport } from "@xyflow/react";
import { PossibleEdge, PossibleNode, TCell10Kv } from "@/shared/types";

export type TNodePosition = XYPosition;

// export type AllNodesPropertiesTypes = Omit<TCell10Kv | TSection10Kv, "type">

export type ReactFlowNodeIdSection10kv = `section-10-kv-${string | number}`;
export type ReactFlowNodeIdCell10Kv = `cell-10-kv-${string | number}`;
export type ReactFlowNodeIdFixatorContainer = `fixator-container-${string | number}`;
export type ReactFlowNodeIdFixator10Kv = `fixator-10-kv-${string | number}`;

export type ReactFlowNodeId =
  | ReactFlowNodeIdFixatorContainer
  | ReactFlowNodeIdCell10Kv
  | ReactFlowNodeIdSection10kv
  | ReactFlowNodeIdFixator10Kv;

// export type ProjectTheme = "light" | "dark";
export type ReactFlowNodesStoreState = {
  // nodes: (Node | PossibleNode)[];
  nodes: PossibleNode[];
  edges: PossibleEdge[];
  selectedNodeIds: ReactFlowNodeId[];
  viewport: Viewport;
  isSyncing: boolean;
  syncError: string | null;
  // projectTheme: ProjectTheme;
  // changeProjectTheme: (newTheme: ProjectTheme) => void;
};

export type ReactFlowNodesBaseActions = {
  onNodesChange: OnNodesChange<PossibleNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (payload: PossibleNode[] | ((nodes: PossibleNode[]) => PossibleNode[])) => void;
  setEdges: (edges: Edge[]) => void;
  setSelectedNodeId: (nodeIds: ReactFlowNodeId[]) => void;
  addNode: (node: PossibleNode) => void;
  removeNode: (nodeIds: ReactFlowNodeId[]) => void;
  setViewportSync: (viewport: Viewport) => void;
  syncProjectScheme: () => void;
  setAfterFetch: (nodes: PossibleNode[], edges: PossibleEdge[], viewport: Viewport) => void;
  resetState: () => void;
};

export type ReactFlowNodesPropertiesActions = {
  sortNodes: () => void;
  changeSelectPropery: ({
    nodeId,
    key1,
    value,
  }: {
    nodeId: ReactFlowNodeId;
    key1: keyof TCell10Kv["data"];
    value: TCell10Kv["data"][keyof TCell10Kv["data"]];
  }) => void;

  //todo Как работать с глубоковложенными объектами да так, чтобы всё можно было автоматизировать
  changeInputPropertyTCell10Kv: <
    K1 extends keyof TCell10Kv["data"],
    K2 extends keyof TCell10Kv["data"][K1],
  >({
    nodeId,
    keyOne,
    keyTwo,
    value,
  }: {
    nodeId: ReactFlowNodeId;
    keyOne: K1;
    keyTwo: K2;
    value: K2 extends null ? TCell10Kv["data"][K1] : TCell10Kv["data"][K1][K2];
  }) => void;
  selectReadyMadeSolution: <K1 extends keyof TCell10Kv["data"]>({
    nodeId,
    keyOne,
    value,
  }: {
    nodeId: ReactFlowNodeId;
    keyOne: K1;
    value: Record<string, string | number>;
  }) => void;
  // changeInputPropertyTCell10Kv: ({ nodeId, keyOne, keyTwo, value }: { nodeId: string, keyOne: NestedPropsTCell10KvKeys, keyTwo: NestedPropsTCell10Kv, value: string | number | boolean }) => void
  setMultipleProps: ({
    nodeId,
    options,
  }: {
    nodeId: ReactFlowNodeId;
    options: Partial<TCell10Kv>;
  }) => void;

  increaseSectionWidth: ({
    sectionId,
    fixatorContainerId,
  }: {
    sectionId: ReactFlowNodeId;
    fixatorContainerId: ReactFlowNodeId;
  }) => void;
  decreaseSectionWidth: ({
    sectionId,
    fixatorContainerId,
  }: {
    sectionId: ReactFlowNodeId;
    fixatorContainerId: ReactFlowNodeId;
  }) => void;
};

export type ReactFlowNodesSlice = ReactFlowNodesStoreState &
  ReactFlowNodesBaseActions &
  ReactFlowNodesPropertiesActions;
