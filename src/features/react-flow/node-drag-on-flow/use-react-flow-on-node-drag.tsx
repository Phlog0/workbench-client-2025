import { useReactFlow } from "@xyflow/react";
import { ReactMouseEvent } from "../types";
import { useCallback } from "react";
import { useBoundStore } from "@/shared/appStore";
import { PossibleNode } from "@/shared/react-flow/nodes";

export function useReactFlowOnNodeDrag() {
  const { getIntersectingNodes } = useReactFlow();
  const setNodes = useBoundStore((state) => state.setNodes);
  const onReactFlowNodeDrag = useCallback(
    (_: ReactMouseEvent, node: PossibleNode) => {
      const intersec = getIntersectingNodes(node);
      if (node.type === "Cell10Kv") {
        const fixatorId = intersec?.find((item) => item.type === "Fixator10Kv")?.id;
        // setNodes((prev) => prev.map((item) => item));
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
      if (node.type === "Cell04Kv") {
        const fixatorId = intersec?.find((item) => item.type === "Fixator04Kv")?.id;
        // setNodes((prev) => prev.map((item) => item));
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
    },
    [getIntersectingNodes, setNodes],
  );
  return { onReactFlowNodeDrag };
}
