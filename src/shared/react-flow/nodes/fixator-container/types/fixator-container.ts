import { ReactFlowNode } from "../../shared/react-flow-node";
import { ReactFlowNodeId } from "../../shared/react-flow-node-ids";

import { RfNodeType } from "../../shared/rf-nodes-types";

export type TFixatorContainerData = {
  width: number;
};

export type TFixatorContainer = Omit<
  ReactFlowNode<TFixatorContainerData, RfNodeType["fixatorContainer"]>,
  "parentId"
> & {
  id: ReactFlowNodeId;
  parentId: ReactFlowNodeId; // теперь точно string, без undefined
  draggable: false;
  deletable: false;
};
