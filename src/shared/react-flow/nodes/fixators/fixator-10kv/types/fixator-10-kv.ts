import { ReactFlowNode } from "../../../shared/react-flow-node";
import { ReactFlowNodeId } from "../../../shared/react-flow-node-ids";

import { RfNodeType } from "../../../shared/rf-nodes-types";

export type TFixator10KvData = Record<string, string | number>;
export type TFixator10Kv = ReactFlowNode<TFixator10KvData, RfNodeType["fixator10Kv"]> & {
  id: ReactFlowNodeId;
  parentId: ReactFlowNodeId;
  draggable: false;
  deletable: false;
  className?: string;
};
