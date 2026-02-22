import { cn } from "@/shared/lib";
// import { TypeOfCell } from "./TypeOfCell";
import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TypeOfCell_FROM_10KV } from "../properties-cell-10kv/TypeOfCell";

export function PropertiesCell35Kv({ className }: { className?: string }) {
  const selectedNodeIds = useBoundStore(state => state.selectedNodeIds);
  const selectedNodeId = selectedNodeIds[0] as ReactFlowNodeId;
  return (
    <div className={cn(className)}>
      <h2>Ячейка 35 кВ</h2>
      <TypeOfCell_FROM_10KV selectedNodeId={selectedNodeId} />
      {/* <TypeOfSwitchingDevice selectedNodeId={selectedNodeId} /> */}
    </div>
  );
}
