import { ReactFlowNode, ReactFlowNodeId, RfNodeType } from "@/shared/react-flow/nodes/shared";

export type TSection35KvData = {
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
export type TSection35Kv = ReactFlowNode<TSection35KvData, RfNodeType["section35Kv"]> & {
  id: ReactFlowNodeId;
};
