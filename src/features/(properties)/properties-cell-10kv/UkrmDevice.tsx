import {
  UKRM_DEVICE_CELL_10KV_INPUT_RENDER_DATA,
  UKRM_DEVICE_CELL_10KV_KEY_1,
  UKRM_DEVICE_CELL_10KV_LABEL,
} from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import { GenericInputs } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TUkrmCell10Kv } from "@/shared/react-flow/nodes/cells/cell-10kv/types";

export function UkrmDevice({
  className,
  selectedNodeId,
  ukrm,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  ukrm?: TUkrmCell10Kv;
}) {
  return (
    <GenericInputs
      className={className}
      inputRenderData={UKRM_DEVICE_CELL_10KV_INPUT_RENDER_DATA}
      inputPropertiesKey1={UKRM_DEVICE_CELL_10KV_KEY_1}
      inputsLabel={UKRM_DEVICE_CELL_10KV_LABEL}
      selectedNodeId={selectedNodeId}
      inputProperties={ukrm}
    />
  );
}
