import { NonPrimitiveKeys } from "../../primitive-keys";
import { ReactFlowNode } from "../../react-flow-node";
import { ReactFlowNodeId } from "../../react-flow-node-ids";
import { RfNodeType } from "../../rf-nodes-types";

export type TSection10KvData = {
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
export type TSection10Kv = ReactFlowNode<TSection10KvData, RfNodeType["section10Kv"]> & {
  id: ReactFlowNodeId;
};

export type TNonPrimitiveKeysTSection10KvDataKeys = Exclude<
  NonPrimitiveKeys<TSection10KvData>[keyof TSection10KvData],
  undefined
>;
