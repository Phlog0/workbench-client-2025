import { cn } from "@/shared/lib";
import { TypeOfCell_FROM_10KV } from "./TypeOfCell";
import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { useShallow } from "zustand/shallow";

export function PropertiesCell10Kv({ className }: { className?: string }) {
  const selectedNodeIds = useBoundStore(useShallow((state) => state.selectedNodeIds));
  const selectedNodeId = selectedNodeIds[0] as ReactFlowNodeId;
  return (
    <div className={cn(className)}>
      <h2>Ячейка 10 кВ</h2>
      <TypeOfCell_FROM_10KV selectedNodeId={selectedNodeId} />
      {/* <TypeOfSwitchingDevice selectedNodeId={selectedNodeId} /> */}
    </div>
  );
}
