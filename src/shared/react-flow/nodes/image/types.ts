import { ReactFlowNode } from "../react-flow-node";
import { ReactFlowNodeId } from "../react-flow-node-ids";
import { RfNodeType } from "../rf-nodes-types";

export type ImageNodeData = {
  imageSrc?: string;
  rotation: number;
};

export type TImageNode = ReactFlowNode<ImageNodeData, RfNodeType["image"]> & {
  id: ReactFlowNodeId;
};
