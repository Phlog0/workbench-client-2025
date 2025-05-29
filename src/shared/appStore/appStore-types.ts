import { Edge, OnNodesChange, OnEdgesChange, OnConnect } from "@xyflow/react";
import { PossibleNode, TCell10Kv } from "./react-flow-node-types";
import { AllNodesPropertiesTypes } from "./properties-types";
export type TNodePosition = {
  x: number;
  y: number;
};

// export type AllNodesPropertiesTypes = Omit<TCell10Kv | TSection10Kv, "type">
export type ReactFLowNodeId = string;
export type SelectedNodeId = ReactFLowNodeId;

export type ProjectTheme = "light" | "dark";
export type AppState = {
  // nodes: (Node | PossibleNode)[];
  nodes: PossibleNode[];
  edges: Edge[];
  selectedNodeIds: SelectedNodeId[];
  projectTheme: ProjectTheme;
  changeProjectTheme: (newTheme: ProjectTheme) => void;
};

export type AppReactFlowBasicActions = {
  onNodesChange: OnNodesChange<PossibleNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (payload: PossibleNode[] | ((nodes: PossibleNode[]) => PossibleNode[])) => void;
  setEdges: (edges: Edge[]) => void;
  setSelectedNodeId: (nodeIds: SelectedNodeId[]) => void;
  addNode: (node: PossibleNode) => void;
  removeNode: (nodeIds: ReactFLowNodeId[]) => void;
};

export type KeyOneTCell10Kv = keyof TCell10Kv;

export type AppPropertiesAction = {
  sortNodes: () => void;
  changeSelectPropery: <K extends keyof AllNodesPropertiesTypes>({
    nodeId,
    prop,
    value,
  }: {
    nodeId: SelectedNodeId;
    prop: K;
    value: AllNodesPropertiesTypes[K];
  }) => void;

  //todo Как работать с глубоковложенными объектами да так, чтобы всё можно было автоматизировать
  changeInputPropertyTCell10Kv: ({
    nodeId,
    keyOne,
    keyTwo,
    value,
  }: {
    nodeId: ReactFLowNodeId;
    keyOne: KeyOneTCell10Kv;
    keyTwo: string | null;
    value: any;
  }) => void;
  selectReadyMadeSolution: ({
    nodeId,
    keyOne,
    value,
  }: {
    nodeId: ReactFLowNodeId;
    keyOne: KeyOneTCell10Kv;
    value: any;
  }) => void;
  // changeInputPropertyTCell10Kv: ({ nodeId, keyOne, keyTwo, value }: { nodeId: string, keyOne: NestedPropsTCell10KvKeys, keyTwo: NestedPropsTCell10Kv, value: string | number | boolean }) => void
  setMultipleProps: ({
    nodeId,
    options,
  }: {
    nodeId: ReactFLowNodeId;
    options: Partial<TCell10Kv>;
  }) => void;

  increaseSectionWidth: ({
    sectionId,
    fixatorContainerId,
  }: {
    sectionId: ReactFLowNodeId;
    fixatorContainerId: ReactFLowNodeId;
  }) => void;
  decreaseSectionWidth: ({
    sectionId,
    fixatorContainerId,
  }: {
    sectionId: ReactFLowNodeId;
    fixatorContainerId: ReactFLowNodeId;
  }) => void;
};
