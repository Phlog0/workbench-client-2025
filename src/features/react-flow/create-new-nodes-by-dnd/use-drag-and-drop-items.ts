import { useCallback } from "react";
import { useReactFlow } from "@xyflow/react";
import { useDnD } from "@/app/DnDContext/DnDContext";

import { createSection } from "./create-initial-section-node";
import { useBoundStore } from "@/shared/appStore";
import { PossibleNode } from "@/shared/react-flow/nodes";

import { createPowerTransformer1004kv } from "./create-initial-power-transformer1004kv-node";
import { createCell } from "./create-initial-cell-node";

export function useDragAndDropItems() {
  const addNode = useBoundStore((state) => state.addNode);
  const setNodes = useBoundStore((state) => state.setNodes);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();
  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onReactFlowDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!type) {
        return;
      }

      let newNode: PossibleNode;
      let newNodes: PossibleNode[];
      switch (type) {
        case "Cell10Kv":
          newNode = createCell({ event, screenToFlowPosition, cellVoltage: "10" });
          addNode(newNode);
          break;
        case "Section10Kv":
          newNodes = createSection({ event, screenToFlowPosition, sectionVoltage: "10" });

          setNodes((prev) => [...newNodes, ...prev]);

          break;
        case "PowerTransformer1004Kv":
          newNode = createPowerTransformer1004kv({ event, screenToFlowPosition });
          addNode(newNode);
          break;
        case "Cell04Kv":
          newNode = createCell({ event, screenToFlowPosition, cellVoltage: "04" });
          addNode(newNode);
          break;
        case "Section04Kv":
          newNodes = createSection({ event, screenToFlowPosition, sectionVoltage: "04" });

          setNodes((prev) => [...newNodes, ...prev]);

          break;

        default:
          break;
      }

      // mutation.mutate(newNode);
    },
    [screenToFlowPosition, type],
  );

  return { onDragOver, onReactFlowDrop };
}
