import { PossibleEdge } from "@/shared/react-flow/edges";
import { PossibleNode, ReactFlowNodeId } from "@/shared/react-flow/nodes";
import { TCell04Kv } from "@/shared/react-flow/nodes/cell-04kv/types";
import { TCell10Kv } from "@/shared/react-flow/nodes/cell-10kv/types";
import { RFNodeTypesValues } from "@/shared/react-flow/nodes/rf-nodes-types";
import { Edge, OnNodesChange, OnEdgesChange, OnConnect, Viewport } from "@xyflow/react";

export type ReactFlowNodesStoreState = {
  // nodes: (Node | PossibleNode)[];
  nodes: PossibleNode[];
  edges: PossibleEdge[];
  selectedNodeIds: ReactFlowNodeId[];
  selectedEdgeIds: ReactFlowNodeId[];
  viewport: Viewport;
  isSyncing: boolean;
  syncError: string | null;
  folderType: "" | RFNodeTypesValues;
  // projectTheme: ProjectTheme;
  // changeProjectTheme: (newTheme: ProjectTheme) => void;
};

export type ReactFlowNodesBaseActions = {
  onNodesChange: OnNodesChange<PossibleNode>;
  onEdgesChange: OnEdgesChange<PossibleEdge>;
  onConnect: OnConnect;
  setNodes: (payload: PossibleNode[] | ((nodes: PossibleNode[]) => PossibleNode[])) => void;
  setEdges: (payload: PossibleEdge[] | ((edges: PossibleEdge[]) => PossibleEdge[])) => void;
  setSelectedNodeId: (nodeIds: ReactFlowNodeId[]) => void;
  setSelectedEdgeId: (edgeIds: ReactFlowNodeId[]) => void;
  addNode: (node: PossibleNode) => void;
  removeNode: (nodeIds: ReactFlowNodeId[]) => void;
  removeEdge: (edgeIds: ReactFlowNodeId[]) => void;
  setViewportSync: (viewport: Viewport) => void;
  syncProjectScheme: () => void;
  setAfterFetch: (nodes: PossibleNode[], edges: PossibleEdge[], viewport: Viewport) => void;
};

export type ReactFlowNodesPropertiesActions = {
  sortNodes: () => void;
  changeSelectPropery: ({
    nodeId,
    key1,
    value,
  }: {
    nodeId: ReactFlowNodeId;
    key1: string;
    value: string | number;
  }) => void;

  changeInputPropertyTCell10Kv: ({
    nodeId,
    keyOne,
    keyTwo,
    value,
  }: {
    nodeId: ReactFlowNodeId;
    keyOne: string;
    keyTwo: string | null;
    value: number | boolean | string;
  }) => void;
  selectReadyMadeSolution: ({
    nodeId,
    keyOne,
    values,
  }: {
    nodeId: ReactFlowNodeId;
    keyOne: string;
    values: Record<string, string | number>;
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
  resetState: () => void;
  setFolderType: (value: "" | RFNodeTypesValues) => void;
};

export type ReactFlowNodesSlice = ReactFlowNodesStoreState &
  ReactFlowNodesBaseActions &
  ReactFlowNodesPropertiesActions;
