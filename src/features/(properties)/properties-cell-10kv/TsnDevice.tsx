import {
  TSN_DEVICE_CELL_10KV_INPUT_RENDER_DATA,
  TSN_DEVICE_CELL_10KV_KEY_1,
  TSN_DEVICE_CELL_10KV_LABEL,
} from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import { GenericInputs } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TTsnCell10Kv } from "@/shared/react-flow/nodes/cells/cell-10kv/types";

export function TsnDevice({
  className,
  selectedNodeId,
  tsn,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  tsn?: TTsnCell10Kv;
}) {
  return (
    <GenericInputs
      className={className}
      inputRenderData={TSN_DEVICE_CELL_10KV_INPUT_RENDER_DATA}
      inputPropertiesKey1={TSN_DEVICE_CELL_10KV_KEY_1}
      inputsLabel={TSN_DEVICE_CELL_10KV_LABEL}
      selectedNodeId={selectedNodeId}
      inputProperties={tsn}
    />
  );
}
