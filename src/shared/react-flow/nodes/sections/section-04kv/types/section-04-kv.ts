import { ReactFlowNode, ReactFlowNodeId, RfNodeType } from "@/shared/react-flow/nodes/shared";

export type TSection04KvData = {
  width: number;

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
export type TSection04Kv = ReactFlowNode<TSection04KvData, RfNodeType["section04Kv"]> & {
  id: ReactFlowNodeId;
};
