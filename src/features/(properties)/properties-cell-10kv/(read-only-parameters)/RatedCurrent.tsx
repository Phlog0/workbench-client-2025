import { ProjectPropertyInput } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import {
  RATED_CURRENT_CELL_10KV_KEY_1,
  RATED_CURRENT_CELL_10KV_LABEL,
} from "@/shared/react-flow/nodes/cells/cell-10kv/options";

export function RatedCurrent({
  selectedNodeId,
  ratedCurrentValue,
}: {
  selectedNodeId: ReactFlowNodeId;
  ratedCurrentValue?: number | "";
}) {
  return (
    <div>
      <ProjectPropertyInput
        inputType="number"
        selectedNodeId={selectedNodeId}
        keyOne={RATED_CURRENT_CELL_10KV_KEY_1}
        keyTwo={null}
        label={RATED_CURRENT_CELL_10KV_LABEL}
        value={ratedCurrentValue}
        isDisabled
      />
    </div>
  );
}
