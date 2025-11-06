import { ReactFlowNode } from "../../../shared/react-flow-node";
import { ReactFlowNodeId } from "../../../shared/react-flow-node-ids";

import { RfNodeType } from "../../../shared/rf-nodes-types";

export type TFixator04KvData = Record<string, string | number>;
export type TFixator04Kv = ReactFlowNode<TFixator04KvData, RfNodeType["fixator04Kv"]> & {
  id: ReactFlowNodeId;
  parentId: ReactFlowNodeId;
  draggable: false;
  deletable: false;
  className?: string;
};
