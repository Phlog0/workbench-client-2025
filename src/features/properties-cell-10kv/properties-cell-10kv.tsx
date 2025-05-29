import { TypeOfCell } from "./type-of-cell";

export function PropertiesCell10Kv({ selectedNodeId }: { selectedNodeId: string }) {
  return (
    <div>
      <TypeOfCell selectedNodeId={selectedNodeId} />
      {/* <TypeOfSwitchingDevice selectedNodeId={selectedNodeId} /> */}
    </div>
  );
}
