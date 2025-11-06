import {
  VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_INPUT_RENDER_DATA,
  VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1,
  VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_LABEL,
} from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import { GenericInputs } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TTnCell10Kv } from "@/shared/react-flow/nodes/cells/cell-10kv/types";

export function VoltageTransformerDevice({
  className,
  selectedNodeId,
  voltageTransformer,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  voltageTransformer?: TTnCell10Kv;
}) {
  return (
    <GenericInputs
      className={className}
      inputRenderData={VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_INPUT_RENDER_DATA}
      inputPropertiesKey1={VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1}
      inputsLabel={VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_LABEL}
      selectedNodeId={selectedNodeId}
      inputProperties={voltageTransformer}
    />
  );
}
