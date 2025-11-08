import { ReactFlowNode, ReactFlowNodeId, RfNodeType } from "@/shared/react-flow/nodes/shared";
import { TFixatorSharedData } from "../../fixator-shared-data";

export type TFixator10Kv = ReactFlowNode<TFixatorSharedData, RfNodeType["fixator10Kv"]> & {
  id: ReactFlowNodeId;
  parentId: ReactFlowNodeId;
  draggable: false;
  deletable: false;
  className?: string;
};
