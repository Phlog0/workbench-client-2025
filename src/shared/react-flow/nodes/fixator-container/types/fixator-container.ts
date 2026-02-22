import { ReactFlowNode } from "../../shared/react-flow-node";

import { RfNodeType } from "../../shared/rf-nodes-types";

export type TFixatorContainerData = {
  width: number;
};

export type TFixatorContainer = ReactFlowNode<
  TFixatorContainerData,
  RfNodeType["fixatorContainer"]
>;
