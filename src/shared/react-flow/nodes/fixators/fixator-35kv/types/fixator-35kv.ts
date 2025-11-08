import { ReactFlowNode, ReactFlowNodeId, RfNodeType } from "@/shared/react-flow/nodes/shared";
import { TFixatorSharedData } from "../../fixator-shared-data";

export type TFixator35Kv = ReactFlowNode<TFixatorSharedData, RfNodeType["fixator35Kv"]> & {
  id: ReactFlowNodeId;
  parentId: ReactFlowNodeId;
  draggable: false;
  deletable: false;
  className?: string;
};
