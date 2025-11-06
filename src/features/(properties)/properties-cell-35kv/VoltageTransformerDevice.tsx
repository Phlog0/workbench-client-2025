import {
  VOLTAGE_TRANSFORMER_DEVICE_CELL_35KV_INPUT_RENDER_DATA,
  VOLTAGE_TRANSFORMER_DEVICE_CELL_35KV_KEY_1,
  VOLTAGE_TRANSFORMER_DEVICE_CELL_35KV_LABEL,
} from "@/shared/react-flow/nodes/cells/cell-35kv/options";
import { GenericInputs } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TTnCell35Kv } from "@/shared/react-flow/nodes/cells/cell-35kv/types";

export function VoltageTransformerDevice({
  className,
  selectedNodeId,
  voltageTransformer,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  voltageTransformer?: TTnCell35Kv;
}) {
  return (
    <GenericInputs
      className={className}
      inputRenderData={VOLTAGE_TRANSFORMER_DEVICE_CELL_35KV_INPUT_RENDER_DATA}
      inputPropertiesKey1={VOLTAGE_TRANSFORMER_DEVICE_CELL_35KV_KEY_1}
      inputsLabel={VOLTAGE_TRANSFORMER_DEVICE_CELL_35KV_LABEL}
      selectedNodeId={selectedNodeId}
      inputProperties={voltageTransformer}
    />
  );
}
