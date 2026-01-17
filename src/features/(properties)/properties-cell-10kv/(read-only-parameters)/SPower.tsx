import { ProjectPropertyInput } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import {
  S_POWER_CELL_10KV_KEY_1,
  S_POWER_CELL_10KV_LABEL,
} from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import { memo } from "react";

export const SPower = memo(function ({
  selectedNodeId,
  sPowerValue,
}: {
  selectedNodeId: ReactFlowNodeId;
  sPowerValue?: number | "";
}) {
  return (
    <div>
      <ProjectPropertyInput
        inputType="number"
        selectedNodeId={selectedNodeId}
        keyOne={S_POWER_CELL_10KV_KEY_1}
        keyTwo={null}
        label={S_POWER_CELL_10KV_LABEL}
        value={sPowerValue}
        isDisabled
      />
    </div>
  );
});
