import {
  SWITCHING_DEVICE_R_CELL_10KV_INPUT_RENDER_DATA,
  SWITCHING_DEVICE_R_CELL_10KV_KEY_1,
  SWITCHING_DEVICE_R_CELL_10KV_LABEL,
  SWITCHING_DEVICE_R_CELL_10KV_PARAM,
} from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import { GenericInputs } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TSwitchingDeviceRCell10Kv } from "@/shared/react-flow/nodes/cells/cell-10kv/types";

export function SwitchingDeviceR({
  className,
  selectedNodeId,
  switchingDevice,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  switchingDevice?: TSwitchingDeviceRCell10Kv;
}) {
  return (
    <GenericInputs
      className={className}
      inputRenderData={SWITCHING_DEVICE_R_CELL_10KV_INPUT_RENDER_DATA}
      inputPropertiesKey1={SWITCHING_DEVICE_R_CELL_10KV_KEY_1}
      inputsLabel={SWITCHING_DEVICE_R_CELL_10KV_LABEL}
      selectedNodeId={selectedNodeId}
      inputProperties={switchingDevice}
      param={SWITCHING_DEVICE_R_CELL_10KV_PARAM}
    />
  );
}
