import { useReactFlow } from "@xyflow/react";
import { ReactMouseEvent } from "../types";
import { useCallback } from "react";
import { useBoundStore } from "@/shared/appStore";
import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { cellFixatorPairs } from "./cell-fixator-pairs";

export function useReactFlowOnNodeDrag() {
  const { getIntersectingNodes } = useReactFlow();
  const setNodes = useBoundStore((state) => state.setNodes);
  const onReactFlowNodeDrag = useCallback(
    // eslint-disable-next-line react-hooks/preserve-manual-memoization
    (_: ReactMouseEvent, node: PossibleNode) => {
      const intersections = getIntersectingNodes(node);
      if (intersections.length === 0) {
        return;
      }
      for (const { cellType, fixatorType } of cellFixatorPairs) {
        if (node.type === cellType) {
          const fixatorId = intersections?.find((item) => item.type === fixatorType)?.id;
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
                    intersectionClassname:
                      n.id === fixatorId
                        ? "rounded-full bg-blue-500 outline-solid outline-blue-400"
                        : "",
                  },
                };
              } else {
                return n;
              }
            }),
          );
        }
      }
    },
    [getIntersectingNodes, setNodes],
  );
  return onReactFlowNodeDrag;
}
