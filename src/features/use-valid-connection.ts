import { useBoundStore } from "@/shared/appStore";
import { PossibleEdge } from "@/shared/react-flow/edges";
import { RF_NODE_TYPES } from "@/shared/react-flow/nodes/shared";

import { Connection } from "@xyflow/react";
import { useCallback } from "react";

const validConnectionsNodeTypes = [
  {
    from: RF_NODE_TYPES.cell10Kv,
    to: RF_NODE_TYPES.powerTransformer1004Kv,
  },
  {
    from: RF_NODE_TYPES.powerTransformer1004Kv,
    to: RF_NODE_TYPES.cell04Kv,
  },
];

export function useValidConnection() {
  const nodes = useBoundStore((state) => state.nodes);
  const isValidConnection = useCallback(
    (connection: PossibleEdge | Connection) => {
      if (connection.source === connection.target) {
        return false;
      }
      console.log(connection.source, connection.target);
      const sourceNode = nodes.find((node) => node.id === connection.source);
      const targetNode = nodes.find((node) => node.id === connection.target);
      console.log({ sourceNode: sourceNode, targetNode: targetNode });
      for (const { from, to } of validConnectionsNodeTypes) {
        if (
          (sourceNode?.type === from && targetNode?.type === to) ||
          (targetNode?.type === from && sourceNode?.type === to)
        )
          return true;
      }
      return false;
    },
    [nodes],
  );
  return isValidConnection;
}
