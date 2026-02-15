import { ReactFlowNode } from "../../../shared/react-flow-node";
import { ReactFlowNodeId } from "../../../shared/react-flow-node-ids";
import { RfNodeType } from "../../../shared/rf-nodes-types";
import { TCell10KvData } from "../../cell-10kv/types";
// import { TCell04KvData } from "./cell-04-kv-data";

export type TCell04Kv = ReactFlowNode<
  Omit<TCell10KvData, "typeOfVoltage">,
  RfNodeType["cell04Kv"]
> & {
  id: ReactFlowNodeId;
  parentId?: ReactFlowNodeId;
};
//& ExtendedNodeType;
