import { TFixator10Kv } from "@/shared/types";

import { cn } from "@/shared/lib";
import { useGetLastFixator, useGetNodeChildrenIds, useRemoveNodeIds } from "@/shared/lib/nodes-std";
import { Button } from "@/shared/ui";
import { Minus, Plus } from "lucide-react";
import { useBoundStore } from "@/shared/appStore";
import {
  ReactFlowNodeId,
  ReactFlowNodeIdFixator10Kv,
  ReactFlowNodeIdFixatorContainer,
} from "@/shared/appStore/slices/types";

export function ResizeButtons({
  className,
  sectionId,
  sectionWidth,
}: {
  className?: string;
  sectionId: ReactFlowNodeId;
  sectionWidth?: number;
}) {
  // console.log("<<<resize-buttons-render>>>");
  const [fixatorContainerId] = useGetNodeChildrenIds(sectionId);
  const fixatorsIds = useGetNodeChildrenIds(fixatorContainerId);
  const increaseSectionWidth = useBoundStore((state) => state.increaseSectionWidth);
  const decreaseSectionWidth = useBoundStore((state) => state.decreaseSectionWidth);

  const addNode = useBoundStore((state) => state.addNode);
  const removeNode = useBoundStore((state) => state.removeNode);
  const { lastFixatorId } = useGetLastFixator(fixatorContainerId);
  const extractIds = useRemoveNodeIds();
  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    increaseSectionWidth({ sectionId, fixatorContainerId });

    const fixatorID: TFixator10Kv["id"] = `fixator-10-kv-${Date.now()}`;

    const newFixator: TFixator10Kv = {
      id: fixatorID,
      data: {
        id: fixatorID,
      },
      //
      position: { y: 0, x: fixatorsIds.length * 300 - 8 },
      parentId: fixatorContainerId as ReactFlowNodeIdFixatorContainer,
      type: "Fixator10Kv",
      deletable: false,
      draggable: false,
    };
    addNode(newFixator);
  };

  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (sectionWidth && sectionWidth <= 800) return;
    decreaseSectionWidth({ sectionId, fixatorContainerId });
    //DECREASE SECTION WIDTH
    const fixatorChild = extractIds([lastFixatorId]);
    removeNode([...fixatorChild, lastFixatorId]);
  };
  return (
    <div className={cn("flex gap-3", className)}>
      <Button onClick={handleIncrease}>
        <Plus />
      </Button>
      <Button onClick={handleDecrease}>
        <Minus />
      </Button>
    </div>
  );
}
