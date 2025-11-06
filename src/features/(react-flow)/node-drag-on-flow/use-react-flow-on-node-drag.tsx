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
    (_: ReactMouseEvent, node: PossibleNode) => {
      const intersections = getIntersectingNodes(node);

      for (const { cellType, fixatorType } of cellFixatorPairs) {
        if (node.type === cellType) {
          const fixatorId = intersections?.find((item) => item.type === fixatorType)?.id;
          setNodes((ns) =>
            ns.map((n) => {
              return {
                ...n,

                className:
                  n.id === fixatorId ? "rounded-full bg-blue-500 outline outline-blue-400" : "",
              };
            }),
          );
        }
      }
      // if (node.type === "Cell10Kv") {
      //   const fixatorId = intersections?.find((item) => item.type === "Fixator10Kv")?.id;
      //   // setNodes((prev) => prev.map((item) => item));
      //   setNodes((ns) =>
      //     ns.map((n) => {
      //       return {
      //         ...n,

      //         className:
      //           n.id === fixatorId ? "rounded-full bg-blue-500 outline outline-blue-400" : "",
      //       };
      //     }),
      //   );
      // }
      // if (node.type === "Cell04Kv") {
      //   const fixatorId = intersections?.find((item) => item.type === "Fixator04Kv")?.id;
      //   // setNodes((prev) => prev.map((item) => item));
      //   setNodes((ns) =>
      //     ns.map((n) => {
      //       return {
      //         ...n,

      //         className:
      //           n.id === fixatorId ? "rounded-full bg-blue-500 outline outline-blue-400" : "",
      //       };
      //     }),
      //   );
      // }
    },
    [getIntersectingNodes, setNodes],
  );
  return { onReactFlowNodeDrag };
}
