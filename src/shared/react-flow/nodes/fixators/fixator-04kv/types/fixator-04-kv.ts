import { ReactFlowNode, ReactFlowNodeId, RfNodeType } from "@/shared/react-flow/nodes/shared";
import { TFixatorSharedData } from "../../fixator-shared-data";

export type TFixator04Kv = ReactFlowNode<TFixatorSharedData, RfNodeType["fixator04Kv"]> & {
  id: ReactFlowNodeId;
  parentId: ReactFlowNodeId;
  draggable: false;
  deletable: false;
  className?: string;
};
