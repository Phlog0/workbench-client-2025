import { useEffect, useMemo, useState } from "react";

import { GenericInputs, GenericInputsWithSelect } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import {
  MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_INPUT_RENDER_DATA,
  MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1,
  MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_LABEL,
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1,
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_LABEL,
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS,
} from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import {
  TMeasuringCurrentTransformersDeviceCell10Kv,
  TTypeOfMeasuringCurrentTransformersDeviceOptionsCell10Kv,
} from "@/shared/react-flow/nodes/cells/cell-10kv/types";

export type TMeasuringCurrentTransformersDeviceAccuracyClass = 1 | 2 | 3 | 4;
export function TypeOfMeasuringCurrentTransformersDevice({
  className,
  selectedNodeId,
  measuringCurrentTransformersDevice,
  typeOfMeasuringCurrentTransformersDevice,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  typeOfMeasuringCurrentTransformersDevice?: TTypeOfMeasuringCurrentTransformersDeviceOptionsCell10Kv;
  measuringCurrentTransformersDevice?: TMeasuringCurrentTransformersDeviceCell10Kv;
}) {
  //   const { data, isLoading, isError, error } = useGetProjectData({
  //     q: isMeasuringCurrentTransformersDeviceParam,
  //   });

  const [
    measuringCurrentTransformersDeviceAccuracyClassValue,
    setMeasuringCurrentTransformersDeviceAccuracyClassValue,
  ] = useState<TMeasuringCurrentTransformersDeviceAccuracyClass>(1);

  useEffect(() => {
    if (typeOfMeasuringCurrentTransformersDevice === "Нет")
      setMeasuringCurrentTransformersDeviceAccuracyClassValue(1);
    if (
      typeOfMeasuringCurrentTransformersDevice === "2 Трансформатора тока 2 обмотки" ||
      typeOfMeasuringCurrentTransformersDevice === "3 Трансформатора тока 2 обмотки"
    )
      setMeasuringCurrentTransformersDeviceAccuracyClassValue(2);
    if (
      typeOfMeasuringCurrentTransformersDevice === "2 Трансформатора тока 3 обмотки" ||
      typeOfMeasuringCurrentTransformersDevice === "3 Трансформатора тока 3 обмотки"
    )
      setMeasuringCurrentTransformersDeviceAccuracyClassValue(3);
    if (
      typeOfMeasuringCurrentTransformersDevice === "2 Трансформатора тока 4 обмотки" ||
      typeOfMeasuringCurrentTransformersDevice === "3 Трансформатора тока 4 обмотки"
    )
      setMeasuringCurrentTransformersDeviceAccuracyClassValue(4);
  }, [typeOfMeasuringCurrentTransformersDevice]);

  //! measuringCurrentTransformersDeviceAccuracyClass={
  //!             measuringCurrentTransformersDeviceAccuracyClassValue
  //!           }
  const options = useMemo(() => {
    return Object.values(TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS);
  }, []);
  return (
    <GenericInputsWithSelect
      className={className}
      selectOptions={options}
      selectPropertyKey1={TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1}
      selectLabel={TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_LABEL}
      selectValue={typeOfMeasuringCurrentTransformersDevice}
      selectedNodeId={selectedNodeId}
    >
      <GenericInputs
        inputRenderData={MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_INPUT_RENDER_DATA}
        inputPropertiesKey1={MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1}
        inputsLabel={MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_LABEL}
        selectedNodeId={selectedNodeId}
        inputProperties={measuringCurrentTransformersDevice}
        param={`${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1}?measuringCurrentTransformersDeviceAccuracyClass=${measuringCurrentTransformersDeviceAccuracyClassValue}`}
      />
    </GenericInputsWithSelect>
  );
}
