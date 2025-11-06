import { ProjectId } from "@/shared/api/types";
import { PossibleEdge } from "@/shared/react-flow/edges";
import {
  PossibleNode,
  ReactFlowNodeId,
  TNonPrimitiveDataKeysPossibleNode,
  TPrimitiveDataKeysPossibleNode,
} from "@/shared/react-flow/nodes/shared";

import { RFNodeTypesValues } from "@/shared/react-flow/nodes/shared/rf-nodes-types";
import { OnNodesChange, OnEdgesChange, OnConnect, Viewport } from "@xyflow/react";

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
  projectId?: ProjectId;
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
  changeSelectPropery: <T extends TPrimitiveDataKeysPossibleNode>({
    nodeId,
    key1,
    value,
  }: {
    nodeId: ReactFlowNodeId;
    key1: keyof T;
    value: T[keyof T];
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
  selectReadyMadeSolution: <T extends TNonPrimitiveDataKeysPossibleNode>({
    nodeId,
    keyOne,
    values,
  }: {
    nodeId: ReactFlowNodeId;
    keyOne: keyof T;
    values: T[keyof T];
  }) => void;
  // changeInputPropertyTCell10Kv: ({ nodeId, keyOne, keyTwo, value }: { nodeId: string, keyOne: NestedPropsTCell10KvKeys, keyTwo: NestedPropsTCell10Kv, value: string | number | boolean }) => void
  setMultipleProps: <T1 extends PossibleNode, T2 extends PossibleNode["data"]>({
    nodeId,
    properties,
    nodeDataFlag,
  }: {
    nodeId: ReactFlowNodeId;
    nodeDataFlag?: boolean;
    properties: Partial<T1> | Partial<T2>;
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
  setProjectId: (projectId: ProjectId) => void;
};

export type ReactFlowNodesSlice = ReactFlowNodesStoreState &
  ReactFlowNodesBaseActions &
  ReactFlowNodesPropertiesActions;
