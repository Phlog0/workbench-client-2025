import { ReactFlowNode } from "../../react-flow-node";
import { ReactFlowNodeId } from "../../react-flow-node-ids";

import { RfNodeType } from "../../rf-nodes-types";

export type TFixator04KvData = {};
export type TFixator04Kv = ReactFlowNode<TFixator04KvData, RfNodeType["fixator04Kv"]> & {
  id: ReactFlowNodeId;
  parentId: ReactFlowNodeId;
  draggable: false;
  deletable: false;
  className?: string;
};
