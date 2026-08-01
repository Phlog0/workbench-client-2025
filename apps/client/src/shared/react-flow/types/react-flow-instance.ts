import { ReactFlowInstance, ReactFlowJsonObject } from "@xyflow/react";
import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { PossibleEdge } from "../edges";

export type RFJsonObject = ReactFlowJsonObject<PossibleNode, PossibleEdge>;

// ! нужен ли он в коде?
export type RFInstance = ReactFlowInstance<PossibleNode, PossibleEdge>;
