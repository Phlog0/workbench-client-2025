import { ReactMouseEvent } from "../types";
import { useReactFlow } from "@xyflow/react";

import { useCallback } from "react";
import { useBoundStore } from "@/shared/appStore";
import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { cellFixatorPairs } from "./cell-fixator-pairs";

export function useReactFlowOnNodeDragStop() {
  // const [fixatorIdState, setFixatorIdState] = useState<string | null | undefined>(null);
  const nodes = useBoundStore((state) => state.nodes);

  const { getIntersectingNodes } = useReactFlow();
  const setNodes = useBoundStore((state) => state.setNodes);
  const setMultipleProps = useBoundStore((state) => state.setMultipleProps);
  // const childOfFixator = useGetNodeChildrenIds(fixatorIdState)
  const onReactFlowNodeDragStop = useCallback(
    (_: ReactMouseEvent, node: PossibleNode) => {
      const cells =
        nodes.filter(
          (item) =>
            item.type === "Cell10Kv" || item.type === "Cell04Kv" || item.type === "Cell35Kv",
        ) || [];
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
              properties: {
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
              ns.map((n) => {
                if (
                  n.type === "Fixator04Kv" ||
                  n.type === "Fixator10Kv" ||
                  n.type === "Fixator35Kv"
                ) {
                  return {
                    ...n,
                    data: {
                      ...n.data,
                      intersectionClassname: "",
                    },
                  };
                } else {
                  return n;
                }
              }),
            );
          }
        }
      }
    },

    [getIntersectingNodes, setMultipleProps, setNodes, nodes],
  );
  return onReactFlowNodeDragStop;
}
