import { GenericInputs, GenericInputsWithSelect } from "@/entities/project-property";
import { IsThereDevice, ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import {
  OPN_DEVICE_CELL_10KV_INPUT_RENDER_DATA,
  OPN_DEVICE_CELL_10KV_KEY_1,
  OPN_DEVICE_CELL_10KV_LABEL,
  TYPE_OF_OPN_DEVICE_CELL_10KV_KEY_1,
  TYPE_OF_OPN_DEVICE_CELL_10KV_LABEL,
  TYPE_OF_OPN_DEVICE_CELL_10KV_OPTIONS,
} from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import { TOpnCell10Kv } from "@/shared/react-flow/nodes/cells/cell-10kv/types";

export function TypeOfOpnDevice({
  className,
  selectedNodeId,
  typeOfOpnDevice,
  opn,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  typeOfOpnDevice?: IsThereDevice;
  opn?: TOpnCell10Kv;
}) {
  return (
    <GenericInputsWithSelect
      className={className}
      selectOptions={TYPE_OF_OPN_DEVICE_CELL_10KV_OPTIONS}
      selectPropertyKey1={TYPE_OF_OPN_DEVICE_CELL_10KV_KEY_1}
      selectLabel={TYPE_OF_OPN_DEVICE_CELL_10KV_LABEL}
      selectValue={typeOfOpnDevice}
      selectedNodeId={selectedNodeId}
    >
      <GenericInputs
        inputRenderData={OPN_DEVICE_CELL_10KV_INPUT_RENDER_DATA}
        inputPropertiesKey1={OPN_DEVICE_CELL_10KV_KEY_1}
        inputsLabel={OPN_DEVICE_CELL_10KV_LABEL}
        selectedNodeId={selectedNodeId}
        inputProperties={opn}
      />
    </GenericInputsWithSelect>
  );
}
