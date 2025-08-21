import { ReactFlowNode } from "../react-flow-node";
import { ReactFlowNodeId } from "../react-flow-node-ids";
import { RF_NODE_TYPES, RfNodeType } from "../rf-nodes-types";

export type TPowerTransformer1004Kv = ReactFlowNode<{}, RfNodeType["powerTransformer1004Kv"]> & {
  id: ReactFlowNodeId;
};

export const INITIAL_POWER_TRANSFORMER_METRICS = {
  width: 137,
  height: 393,
} as const;
