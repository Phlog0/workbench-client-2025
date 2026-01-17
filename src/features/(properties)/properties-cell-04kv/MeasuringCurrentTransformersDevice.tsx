import {
  MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_INPUT_RENDER_DATA,
  MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_LABEL,
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1,
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_LABEL,
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_OPTIONS,
} from "@/shared/react-flow/nodes/cells/cell-04kv/options";
import { GenericInputs } from "@/entities/project-property";
import { GenericInputsWithSelect } from "@/entities/project-property";
import {
  TMeasuringCurrentTransformersDeviceCell04Kv,
  TTypeOfMeasuringCurrentTransformersDeviceCell04Kv,
} from "@/shared/react-flow/nodes/cells/cell-04kv/types";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { memo, useMemo } from "react";

export const MeasuringCurrentTransformersDevice = memo(function ({
  typeOfMeasuringCurrentTransformersDevice,
  selectedNodeId,
  measuringCurrentTransformersDevice,
}: {
  typeOfMeasuringCurrentTransformersDevice?: TTypeOfMeasuringCurrentTransformersDeviceCell04Kv;
  selectedNodeId: ReactFlowNodeId;
  measuringCurrentTransformersDevice?: TMeasuringCurrentTransformersDeviceCell04Kv;
}) {
  const options = useMemo(() => {
    return Object.values(TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_OPTIONS);
  }, []);
  return (
    <GenericInputsWithSelect
      selectOptions={options}
      selectPropertyKey1={TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1}
      selectLabel={TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_LABEL}
      selectValue={typeOfMeasuringCurrentTransformersDevice}
      selectedNodeId={selectedNodeId}
    >
      <GenericInputs
        inputRenderData={MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_INPUT_RENDER_DATA}
        inputPropertiesKey1={"measuringCurrentTransformersDevice"}
        inputsLabel={MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_LABEL}
        selectedNodeId={selectedNodeId}
        inputProperties={measuringCurrentTransformersDevice}
      />
    </GenericInputsWithSelect>
  );
});
