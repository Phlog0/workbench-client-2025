import { ReactFlowNode, ReactFlowNodeId, RfNodeType } from "@/shared/react-flow/nodes/shared";
import { TTypeOfVoltage0610Kv } from "@/shared/react-flow/nodes/shared/type-of-voltage";

export type TSection10KvData = {
  width: number;
  typeOfVoltage: TTypeOfVoltage0610Kv;
  model?: {
    climaticVersion?: string;
    model?: string;
    manufacturer?: string;
    material?: string;
    crossSection?: number;
    permissibleCurrent?: number;
    typeOfIsolation?: string;
  };
};
export type TSection10Kv = ReactFlowNode<TSection10KvData, RfNodeType["section10Kv"]> & {
  id: ReactFlowNodeId;
};
