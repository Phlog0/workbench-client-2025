import { ReactFlowNode } from "../../react-flow-node";
import { ReactFlowNodeId } from "../../react-flow-node-ids";
import { RfNodeType } from "../../rf-nodes-types";

export type TSection04KvData = {
  width: number;
};
export type TSection04Kv = ReactFlowNode<TSection04KvData, RfNodeType["section04Kv"]> & {
  id: ReactFlowNodeId;
};
