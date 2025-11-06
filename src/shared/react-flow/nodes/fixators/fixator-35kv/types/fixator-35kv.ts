import { ReactFlowNode } from "../../../shared/react-flow-node";
import { ReactFlowNodeId } from "../../../shared/react-flow-node-ids";

import { RfNodeType } from "../../../shared/rf-nodes-types";

export type TFixator35KvData = Record<string, string | number>;
export type TFixator35Kv = ReactFlowNode<TFixator35KvData, RfNodeType["fixator35Kv"]> & {
  id: ReactFlowNodeId;
  parentId: ReactFlowNodeId;
  draggable: false;
  deletable: false;
  className?: string;
};
