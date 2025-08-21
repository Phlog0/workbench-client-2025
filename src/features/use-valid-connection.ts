import { PossibleEdge } from "@/shared/react-flow/edges";

import { Connection } from "@xyflow/react";
import { useCallback } from "react";

// const validConnectionsNodeTypes = [
//   {
//     from: RF_NODE_TYPES.cell10Kv,
//     to: RF_NODE_TYPES.powerTransformer1004Kv,
//   },
// ];

export function useValidConnection() {
  const isValidConnection = useCallback((connection: PossibleEdge | Connection) => {
    if (connection.source === connection.target) {
      return false;
    } else return true;

    // for (const { from, to } of validConnectionsNodeTypes) {
    //   if (fromNode?.type === from && toNode?.type === to) return true;
    // }
  }, []);
  return isValidConnection;
}
