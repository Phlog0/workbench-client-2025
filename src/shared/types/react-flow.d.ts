import { Node, Edge } from "reactflow";
import { PossibleNode } from "./react-flow-node-types";

declare module "@xyflow/react" {
  export type OnSelectionChangeParams<N = PossibleNode> = {
    nodes: N[];
    edges: Edge[];
  };

  export function useOnSelectionChange<N extends Node = PossibleNode>(
    options: UseOnSelectionChangeOptions<N>
  ): void;
}
