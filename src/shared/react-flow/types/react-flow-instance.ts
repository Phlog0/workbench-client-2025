import { ReactFlowInstance, ReactFlowJsonObject } from "@xyflow/react";
import { PossibleNode } from "../nodes";
import { PossibleEdge } from "../edges";

export type RFJsonObject = ReactFlowJsonObject<PossibleNode, PossibleEdge>;
export type RFInstance = ReactFlowInstance<PossibleNode, PossibleEdge>;
