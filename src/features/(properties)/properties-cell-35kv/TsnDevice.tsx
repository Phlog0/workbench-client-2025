import {
  TSN_DEVICE_CELL_35KV_INPUT_RENDER_DATA,
  TSN_DEVICE_CELL_35KV_KEY_1,
  TSN_DEVICE_CELL_35KV_LABEL,
} from "@/shared/react-flow/nodes/cells/cell-35kv/options";
import { GenericInputs } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TCell35KvData } from "@/shared/react-flow/nodes/cells/cell-35kv/types";

export function TsnDevice({
  className,
  selectedNodeId,
  tsn,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  tsn?: TCell35KvData["tsn"];
}) {
  return (
    <GenericInputs
      className={className}
      inputRenderData={TSN_DEVICE_CELL_35KV_INPUT_RENDER_DATA}
      inputPropertiesKey1={TSN_DEVICE_CELL_35KV_KEY_1}
      inputsLabel={TSN_DEVICE_CELL_35KV_LABEL}
      selectedNodeId={selectedNodeId}
      inputProperties={tsn}
    />
  );
}
