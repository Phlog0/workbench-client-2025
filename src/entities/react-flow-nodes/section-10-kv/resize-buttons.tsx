import { TFixator10Kv } from "@/shared/appStore/react-flow-node-types";
import useStore from "@/shared/appStore/store";
import { useGetLastFixator, useGetNodeChildrenIds, useRemoveNodeIds } from "@/shared/lib/model";

import { cn } from "@/shared/lib/react-std";
import { Button } from "@/shared/ui";
import { Minus, Plus } from "lucide-react";

export function ResizeButtons({
  className,
  sectionId,
  sectionWidth,
}: {
  className?: string;
  sectionId: string;
  sectionWidth?: number;
}) {
  // console.log("<<<resize-buttons-render>>>");
  const [fixatorContainerId] = useGetNodeChildrenIds(sectionId);
  const fixatorsIds = useGetNodeChildrenIds(fixatorContainerId);
  const increaseSectionWidth = useStore((state) => state.increaseSectionWidth);
  const decreaseSectionWidth = useStore((state) => state.decreaseSectionWidth);

  const addNode = useStore((state) => state.addNode);
  const removeNode = useStore((state) => state.removeNode);
  const { lastFixatorId } = useGetLastFixator(fixatorContainerId);
  const { extractIds } = useRemoveNodeIds();
  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    increaseSectionWidth({ sectionId, fixatorContainerId });

    const fixatorID = `f-${Date.now()}`;

    const newFixator: TFixator10Kv = {
      id: fixatorID,
      data: {
        id: fixatorID,
      },
      //
      position: { y: 0, x: fixatorsIds.length * 300 - 8 },
      parentId: fixatorContainerId,
      type: "Fixator10Kv",
      projectId: "123",
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
