import { ReactFlowNode } from "../shared/react-flow-node";
import { ReactFlowNodeId } from "../shared/react-flow-node-ids";
import { RfNodeType } from "../shared/rf-nodes-types";

export type ImageNodeData = {
  imageSrc?: string;
  rotation: number;
};

export type TImageNode = ReactFlowNode<ImageNodeData, RfNodeType["image"]> & {
  id: ReactFlowNodeId;
};
