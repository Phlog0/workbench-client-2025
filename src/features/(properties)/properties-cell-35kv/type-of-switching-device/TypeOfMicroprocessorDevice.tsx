import {
  MICROPROCESSOR_DEVICE_CELL_35KV_INPUT_RENDER_DATA,
  MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1,
  MICROPROCESSOR_DEVICE_CELL_35KV_LABEL,
  TYPE_OF_MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1,
  TYPE_OF_MICROPROCESSOR_DEVICE_CELL_35KV_LABEL,
  TYPE_OF_MICROPROCESSOR_DEVICE_CELL_35KV_OPTIONS,
} from "@/shared/react-flow/nodes/cells/cell-35kv/options/index";

import { GenericInputs, GenericInputsWithSelect } from "@/entities/project-property";
import { IsThereDevice, ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TmpdaaCell35Kv } from "@/shared/react-flow/nodes/cells/cell-35kv/types";

export function TypeOfMicroprocessorDevice({
  className,
  selectedNodeId,
  typeOfMicroproc,
  microProc,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  typeOfMicroproc?: IsThereDevice;
  microProc?: TmpdaaCell35Kv;
}) {
  return (
    <GenericInputsWithSelect
      className={className}
      selectOptions={TYPE_OF_MICROPROCESSOR_DEVICE_CELL_35KV_OPTIONS}
      selectPropertyKey1={TYPE_OF_MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1}
      selectLabel={TYPE_OF_MICROPROCESSOR_DEVICE_CELL_35KV_LABEL}
      selectValue={typeOfMicroproc}
      selectedNodeId={selectedNodeId}
    >
      <GenericInputs
        inputRenderData={MICROPROCESSOR_DEVICE_CELL_35KV_INPUT_RENDER_DATA}
        inputPropertiesKey1={MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1}
        inputsLabel={MICROPROCESSOR_DEVICE_CELL_35KV_LABEL}
        selectedNodeId={selectedNodeId}
        inputProperties={microProc}
      />
    </GenericInputsWithSelect>
  );
}
