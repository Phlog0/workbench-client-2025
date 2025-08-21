import { ReactFlowNode } from "../../react-flow-node";
import { ReactFlowNodeId } from "../../react-flow-node-ids";

import { RfNodeType } from "../../rf-nodes-types";

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
