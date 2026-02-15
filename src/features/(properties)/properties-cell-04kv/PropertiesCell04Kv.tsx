import { cn } from "@/shared/lib";

import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { memo } from "react";
import { TypeOfCell_FROM_10KV } from "../properties-cell-10kv/TypeOfCell";

export const PropertiesCell04Kv = memo(function ({ className }: { className?: string }) {
  const selectedNodeIds = useBoundStore((state) => state.selectedNodeIds);
  const selectedNodeId = selectedNodeIds[0] as ReactFlowNodeId;
  return (
    <div className={cn(className)}>
      <h2>Ячейка 04 кВ</h2>

      <TypeOfCell_FROM_10KV selectedNodeId={selectedNodeId} />
      {/* <TypeOfSwitchingDevice selectedNodeId={selectedNodeId} /> */}
    </div>
  );
});
