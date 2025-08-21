import {
  SWITCHING_DEVICE_R_CELL_10KV_INPUT_RENDER_DATA,
  SWITCHING_DEVICE_R_CELL_10KV_KEY_1,
  SWITCHING_DEVICE_R_CELL_10KV_LABEL,
} from "@/shared/react-flow/nodes/cell-10kv/options";
import { GenericInputs } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes";
import { TSwitchingDeviceRCell10Kv } from "@/shared/react-flow/nodes/cell-10kv/types";

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
    />
  );
}
