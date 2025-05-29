import useStore from "@/shared/appStore/store";
import { useReactFlow } from "@xyflow/react";
import { ReactMouseEvent } from "./types";
import { PossibleNode } from "@/shared/appStore/react-flow-node-types";
import { useCallback } from "react";

export function useReactFlowOnNodeDrag() {
  const { getIntersectingNodes } = useReactFlow();
  const setNodes = useStore((state) => state.setNodes);
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
                n.id === fixatorId
                  ? "bg-blue-500 rounded-full outline outline-blue-400"
                  : undefined,
            };
          }),
        );
      }
    },
    [getIntersectingNodes, setNodes],
  );
  return { onReactFlowNodeDrag };
}
