import { cn } from "@/shared/lib";
import { TypeOfCell } from "./TypeOfCell";
import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { memo } from "react";

export const PropertiesCell04Kv = memo(function ({ className }: { className?: string }) {
  const selectedNodeIds = useBoundStore((state) => state.selectedNodeIds);
  const selectedNodeId = selectedNodeIds[0] as ReactFlowNodeId;
  return (
    <div className={cn(className)}>
      <h2>Ячейка 04 кВ</h2>

      <TypeOfCell selectedNodeId={selectedNodeId} />
      {/* <TypeOfSwitchingDevice selectedNodeId={selectedNodeId} /> */}
    </div>
  );
});
