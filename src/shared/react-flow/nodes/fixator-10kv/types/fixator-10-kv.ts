import { ReactFlowNode } from "../../react-flow-node";
import { ReactFlowNodeId } from "../../react-flow-node-ids";

import { RfNodeType } from "../../rf-nodes-types";

export type TFixator10KvData = {};
export type TFixator10Kv = ReactFlowNode<TFixator10KvData, RfNodeType["fixator10Kv"]> & {
  id: ReactFlowNodeId;
  parentId: ReactFlowNodeId;
  draggable: false;
  deletable: false;
  className?: string;
};
