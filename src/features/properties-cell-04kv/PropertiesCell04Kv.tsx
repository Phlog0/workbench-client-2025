import { cn } from "@/shared/lib";
import { TypeOfCell } from "./TypeOfCell";
import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes";

export function PropertiesCell04Kv({ className }: { className?: string }) {
  const selectedNodeIds = useBoundStore((state) => state.selectedNodeIds);
  const selectedNodeId = selectedNodeIds[0] as ReactFlowNodeId;
  return (
    <div className={cn("pr-10", className)}>
      <h2>Ячейка 04 кВ</h2>

      <TypeOfCell selectedNodeId={selectedNodeId} />
      {/* <TypeOfSwitchingDevice selectedNodeId={selectedNodeId} /> */}
    </div>
  );
}
