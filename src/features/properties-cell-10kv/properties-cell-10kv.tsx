import { TypeOfCell } from "./type-of-cell";
import { TypeOfSwitchingDevice } from "./type-of-switching-device/type-of-switching-device";

export function PropertiesCell10Kv({
  selectedNodeId,
}: {
  selectedNodeId: string;
}) {
  console.log(selectedNodeId)
  return (
    <div>
      <TypeOfCell selectedNodeId={selectedNodeId} />
      {/* <TypeOfSwitchingDevice selectedNodeId={selectedNodeId} /> */}
    </div>
  );
}
