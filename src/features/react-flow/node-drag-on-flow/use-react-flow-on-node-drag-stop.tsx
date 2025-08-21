import { ReactMouseEvent } from "../types";
import { useReactFlow } from "@xyflow/react";

import { useCallback } from "react";
import { useBoundStore } from "@/shared/appStore";
import { PossibleNode, RF_NODE_TYPES } from "@/shared/react-flow/nodes";
const cellFixatorPairs = [
  { cellType: RF_NODE_TYPES.cell10Kv, fixatorType: RF_NODE_TYPES.fixator10Kv },
  { cellType: RF_NODE_TYPES.cell04Kv, fixatorType: RF_NODE_TYPES.fixator04Kv },
];
export function useReactFlowOnNodeDragStop() {
  // const [fixatorIdState, setFixatorIdState] = useState<string | null | undefined>(null);
  const nodes = useBoundStore((state) => state.nodes);
  const cells = nodes.filter((item) => item.type === "Cell10Kv") || [];
  const { getIntersectingNodes } = useReactFlow();
  const setNodes = useBoundStore((state) => state.setNodes);
  const setMultipleProps = useBoundStore((state) => state.setMultipleProps);
  // const childOfFixator = useGetNodeChildrenIds(fixatorIdState)
  const onReactFlowNodeDragStop = useCallback(
    (_: ReactMouseEvent, node: PossibleNode) => {
      const intersec = getIntersectingNodes(node);
      if (!intersec.length) return;
      for (const { cellType, fixatorType } of cellFixatorPairs) {
        if (node.type === cellType) {
          const fixatorId = intersec?.find((item) => item.type === fixatorType)?.id;
          if (fixatorId) {
            const childOfFixator = cells.find((item) => item.parentId === fixatorId);

            if (childOfFixator !== undefined) return;

            setMultipleProps({
              nodeId: node.id,
              options: {
                draggable: false,
                // expandParent: true,
                parentId: fixatorId,
                position: {
                  x: -142,
                  y: 0,
                },
              },
            });

            setNodes((ns) =>
              ns.map((n) => ({
                ...n,
                className: "",
              })),
            );
          }
        }
      }
    },

    [cells],
  );
  return { onReactFlowNodeDragStop };
}
