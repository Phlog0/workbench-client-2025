import useStore from "@/shared/appStore/store";
import { useReactFlow } from "@xyflow/react";
import { NodeDragEventType } from "./types";
import { PossibleNode } from "@/shared/appStore/react-flow-types";
import { useCallback } from "react";

export function useReactFlowOnNodeDrag() {
  const { getIntersectingNodes } = useReactFlow();
  const setNodes = useStore((state) => state.setNodes);
  const onReactFlowNodeDrag = useCallback(
    (_: NodeDragEventType, node: PossibleNode) => {
      const intersec = getIntersectingNodes(node);
      if (node.type === "Cell10Kv") {
        const fixatorId = intersec?.find(
          (item) => item.type === "Fixator10Kv"
        )?.id;
        // setNodes((prev) => prev.map((item) => item));
        setNodes((ns) =>
          ns.map((n) => ({
            ...n,
            className:
              n.id === fixatorId
                ? "bg-blue-500 rounded-full outline outline-blue-400"
                : "",
          }))
        );
      }
    },
    []
  );
  return { onReactFlowNodeDrag };
}
