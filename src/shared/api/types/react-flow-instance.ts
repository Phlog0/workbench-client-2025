import { PossibleEdge, PossibleNode } from "@/shared/types";
import { ReactFlowInstance, ReactFlowJsonObject } from "@xyflow/react";

export type RFJsonObject = ReactFlowJsonObject<PossibleNode, PossibleEdge>;
export type RFInstance = ReactFlowInstance<PossibleNode, PossibleEdge>;
