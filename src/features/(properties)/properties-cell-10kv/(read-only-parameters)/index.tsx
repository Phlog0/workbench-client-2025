import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { RatedCurrent } from "./RatedCurrent";
import { SPower } from "./SPower";
export function ReadOnlyParameters({
  ratedCurrent,
  sPower,
  selectedNodeId,
}: {
  selectedNodeId: ReactFlowNodeId;
  ratedCurrent?: number;
  sPower?: number;
}) {
  return (
    <div>
      <RatedCurrent selectedNodeId={selectedNodeId} ratedCurrentValue={ratedCurrent || ""} />
      <SPower selectedNodeId={selectedNodeId} sPowerValue={sPower || ""} />
    </div>
  );
}
