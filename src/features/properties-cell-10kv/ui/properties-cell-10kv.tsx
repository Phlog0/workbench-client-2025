import { TypeOfCell } from "./type-of-cell";

export function PropertiesCell10Kv({ selectedNodeId }: { selectedNodeId: string }) {
  return (
    <div className="pr-10">
      <TypeOfCell selectedNodeId={selectedNodeId} />
      {/* <TypeOfSwitchingDevice selectedNodeId={selectedNodeId} /> */}
    </div>
  );
}
