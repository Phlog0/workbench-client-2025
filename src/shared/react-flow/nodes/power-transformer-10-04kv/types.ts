import { ReactFlowNode } from "../shared/react-flow-node";
import { ReactFlowNodeId } from "../shared/react-flow-node-ids";
import { RfNodeType } from "../shared/rf-nodes-types";

// * ПОка что...
type TPowerTransformer1004KvData = {
  parameters?: Partial<{
    model: string;
    type: string;
    power: number;
    voltage: string;
    losses: string;
    noLoadCurrent: number;
    shortCircuitVoltage: number;
    connectionType: string;
  }>;
};
export type TPowerTransformer1004Kv = ReactFlowNode<
  TPowerTransformer1004KvData,
  RfNodeType["powerTransformer1004Kv"]
> & {
  id: ReactFlowNodeId;
};
