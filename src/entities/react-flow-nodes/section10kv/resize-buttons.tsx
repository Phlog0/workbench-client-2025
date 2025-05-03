import { TFixator10Kv } from "@/shared/appStore/react-flow-types";
import useStore from "@/shared/appStore/store";
import { useGetLastFixator, useGetNodeChildrenIds } from "@/shared/lib/model";


import { cn } from "@/shared/lib/react-std";
import { Button } from "@/shared/ui";
import { Minus, Plus } from "lucide-react";

const HALF_CELL_WIDTH = 300 / 2;

export function ResizeButtons({
  className,
  sectionId,
}: {
  className?: string;
  sectionId: string;
}) {
  const [fixatorContainerId, ...rest] = useGetNodeChildrenIds(sectionId);
  const fixatorsIds = useGetNodeChildrenIds(fixatorContainerId);
  const increaseSectionWidth = useStore((state) => state.increaseSectionWidth);
  const decreaseSectionWidth = useStore((state) => state.decreaseSectionWidth);
  const addNode = useStore((state) => state.addNode);

  const { lastFixatorId } = useGetLastFixator(fixatorContainerId);
  const handleIncrease = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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

  const handleDecrease = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    decreaseSectionWidth({ sectionId, fixatorContainerId, lastFixatorId });
    //DECREASE SECTION WIDTH
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
