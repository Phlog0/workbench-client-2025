import { useBoundStore } from "@/shared/appStore";

import { PossibleEdge } from "@/shared/react-flow/edges";
import { RF_NODE_TYPES } from "@/shared/react-flow/nodes/shared";

import { Connection } from "@xyflow/react";
import { useCallback } from "react";

const validConnectionsNodeTypes = [
  {
    from: { type: RF_NODE_TYPES.cell35Kv, connectionMode: "source" },
    to: { type: RF_NODE_TYPES.cell35Kv, connectionMode: "source" },
  },
  {
    from: { type: RF_NODE_TYPES.cell35Kv, connectionMode: "source" },
    to: { type: RF_NODE_TYPES.powerTransformer3510Kv, connectionMode: "target" },
  },
  {
    from: { type: RF_NODE_TYPES.powerTransformer3510Kv, connectionMode: "source" },
    to: { type: RF_NODE_TYPES.cell10Kv, connectionMode: "source" },
  },
  {
    from: { type: RF_NODE_TYPES.cell10Kv, connectionMode: "source" },
    to: { type: RF_NODE_TYPES.cell10Kv, connectionMode: "source" },
  },
  {
    from: { type: RF_NODE_TYPES.cell10Kv, connectionMode: "source" },
    to: { type: RF_NODE_TYPES.powerTransformer1004Kv, connectionMode: "target" },
  },
  {
    from: { type: RF_NODE_TYPES.powerTransformer1004Kv, connectionMode: "source" },
    to: { type: RF_NODE_TYPES.cell04Kv, connectionMode: "source" },
  },
  {
    from: { type: RF_NODE_TYPES.cell04Kv, connectionMode: "source" },
    to: { type: RF_NODE_TYPES.cell04Kv, connectionMode: "source" },
  },
];

export function useValidConnection() {
  const nodes = useBoundStore((state) => state.nodes);

  const isValidConnection = useCallback(
    (connection: PossibleEdge | Connection) => {
      if (connection.source === connection.target) {
        return false;
      }

      const sourceNode = nodes.find((node) => node.id === connection.source);
      const targetNode = nodes.find((node) => node.id === connection.target);
      console.log({ sourceNode: sourceNode?.handles });

      for (const validConnectionsNodeType of validConnectionsNodeTypes) {
        if (
          (sourceNode?.type === validConnectionsNodeType.from.type &&
            connection.sourceHandle?.endsWith(validConnectionsNodeType.from.connectionMode) &&
            targetNode?.type === validConnectionsNodeType.to.type &&
            connection.targetHandle?.endsWith(validConnectionsNodeType.to.connectionMode)) ||
          (sourceNode?.type === validConnectionsNodeType.to.type &&
            connection.sourceHandle?.endsWith(validConnectionsNodeType.to.connectionMode) &&
            targetNode?.type === validConnectionsNodeType.from.type &&
            connection.targetHandle?.endsWith(validConnectionsNodeType.from.connectionMode))
        )
          return true;
      }
      return false;
    },
    [nodes],
  );
  return isValidConnection;
}
