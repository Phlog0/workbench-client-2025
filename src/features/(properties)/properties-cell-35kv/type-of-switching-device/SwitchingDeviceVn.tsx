import {
  SWITCHING_DEVICE_VN_CELL_35KV_INPUT_RENDER_DATA,
  SWITCHING_DEVICE_VN_CELL_35KV_KEY_1,
  SWITCHING_DEVICE_VN_CELL_35KV_LABEL,
  SWITCHING_DEVICE_VN_CELL_35KV_PARAM,
} from "@/shared/react-flow/nodes/cells/cell-35kv/options";
import { GenericInputs } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TSwitchingDeviceVNCell35kv } from "@/shared/react-flow/nodes/cells/cell-35kv/types";

export function SwitchingDeviceVn({
  className,
  selectedNodeId,
  switchingDevice,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  switchingDevice?: TSwitchingDeviceVNCell35kv;
}) {
  return (
    <GenericInputs
      className={className}
      inputRenderData={SWITCHING_DEVICE_VN_CELL_35KV_INPUT_RENDER_DATA}
      inputPropertiesKey1={SWITCHING_DEVICE_VN_CELL_35KV_KEY_1}
      inputsLabel={SWITCHING_DEVICE_VN_CELL_35KV_LABEL}
      selectedNodeId={selectedNodeId}
      inputProperties={switchingDevice}
      param={SWITCHING_DEVICE_VN_CELL_35KV_PARAM}
    />
  );
}
