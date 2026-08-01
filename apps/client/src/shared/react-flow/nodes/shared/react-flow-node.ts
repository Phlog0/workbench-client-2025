import { Node } from "@xyflow/react";

export type ReactFlowNode<D extends Record<string, unknown>, T extends string> = Node<D, T>;

// export type ExtendedNodeType = Record<
//   string,
//   string | number | boolean | Record<string, string | number | boolean>
// >;
