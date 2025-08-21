import { ReactFlowNode } from "../../react-flow-node";
import { ReactFlowNodeId } from "../../react-flow-node-ids";
import { RfNodeType } from "../../rf-nodes-types";
import { TCell04KvData } from "./cell-04-kv-data";

export type TCell04Kv = ReactFlowNode<TCell04KvData, RfNodeType["cell04Kv"]> & {
  id: ReactFlowNodeId;
  parentId?: ReactFlowNodeId;
};
//& ExtendedNodeType;
