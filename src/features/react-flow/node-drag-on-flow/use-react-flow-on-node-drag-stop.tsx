import { PossibleNode, TFixator10Kv } from "@/shared/types/react-flow-node-types";
import { ReactMouseEvent } from "../types";
import { useReactFlow } from "@xyflow/react";

import { useCallback } from "react";
import { useBoundStore } from "@/shared/appStore";

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
      if (node.type === "Cell10Kv") {
        const fixatorId: TFixator10Kv["id"] = intersec?.find(
          (item) => item.type === "Fixator10Kv",
        )?.id;
        if (fixatorId) {
          console.log(fixatorId);
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
    },

    [cells],
  );
  return { onReactFlowNodeDragStop };
}
