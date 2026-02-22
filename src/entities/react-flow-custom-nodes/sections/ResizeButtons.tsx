import { cn } from "@/shared/lib";
import { useGetLastFixator, useGetNodeChildrenIds, useRemoveNodeIds } from "@/shared/lib/nodes-std";
import { Button } from "@/shared/ui";
import { Minus, Plus } from "lucide-react";
import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TFixator10Kv } from "@/shared/react-flow/nodes/fixators/fixator-10kv/types";
import { TFixator04Kv } from "@/shared/react-flow/nodes/fixators/fixator-04kv/types";
import { ElectricityVoltage } from "@/shared/react-flow/nodes/shared/type-of-voltage";
import { TFixator35Kv } from "@/shared/react-flow/nodes/fixators/fixator-35kv/types";

export function ResizeButtons({
  className,
  sectionId,
  sectionWidth,
  sectionVoltage,
}: {
  className?: string;
  sectionId: ReactFlowNodeId;
  sectionWidth?: number;
  sectionVoltage: Exclude<ElectricityVoltage, "06">;
}) {
  const [fixatorContainerId] = useGetNodeChildrenIds(sectionId);
  const fixatorsIds = useGetNodeChildrenIds(fixatorContainerId);
  const increaseSectionWidth = useBoundStore(state => state.increaseSectionWidth);
  const decreaseSectionWidth = useBoundStore(state => state.decreaseSectionWidth);

  const addNode = useBoundStore(state => state.addNode);
  const removeNode = useBoundStore(state => state.removeNode);
  const lastFixatorId = useGetLastFixator(fixatorContainerId, sectionVoltage);
  const extractIds = useRemoveNodeIds();
  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    increaseSectionWidth({ sectionId, fixatorContainerId });

    const newFixatorData: Omit<TFixator10Kv | TFixator04Kv | TFixator35Kv, "id" | "type"> = {
      // id: fixatorID,
      // data: {},
      data: {},
      //
      position: { y: 0, x: fixatorsIds.length * 300 - 8 },
      parentId: fixatorContainerId,
      deletable: false,
      draggable: false,
    };
    const fixatorId: TFixator10Kv["id"] | TFixator35Kv["id"] | TFixator04Kv["id"] =
      `fixator-${sectionVoltage}-kv-${Date.now()}`;
    const fixatorType: TFixator10Kv["type"] | TFixator04Kv["type"] | TFixator35Kv["type"] =
      `Fixator${sectionVoltage}Kv`;

    addNode({ ...newFixatorData, type: fixatorType, id: fixatorId });
    return;
  };

  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (sectionWidth && sectionWidth <= 800) return;
    decreaseSectionWidth({ sectionId, fixatorContainerId });

    if (lastFixatorId) {
      const fixatorChild = extractIds([lastFixatorId]);
      removeNode([...fixatorChild, lastFixatorId]);
    }
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
