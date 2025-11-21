import { ReactFlowNode } from "../shared/react-flow-node";
import { ReactFlowNodeId } from "../shared/react-flow-node-ids";
import { RfNodeType } from "../shared/rf-nodes-types";

// * ПОка что...
type TPowerTransformer3510KvData = {
  parameters?: Partial<{
    model: string;
    type: string;
    ratedCurrent: number;
    voltage: string;
    accuracyClass: string;
    ratedLoad: number;
    dynamicStability: number;
    thermalStability: number;
  }>;
};
export type TPowerTransformer3510Kv = ReactFlowNode<
  TPowerTransformer3510KvData,
  RfNodeType["powerTransformer3510Kv"]
> & {
  id: ReactFlowNodeId;
};
