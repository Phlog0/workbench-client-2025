import { useEffect, useState } from "react";

import { MeasuringCurrentTransformersDevice } from "./measuring-current-transformers-device";

import {
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV,
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV,
  TypeOfMeasuringCurrentTransformersDeviceOptions_10KV,
} from "@/shared/constants/10kv";
import { TMeasuringCurrentTransformersDevice } from "@/shared/types";
import { ProjectPropertySelect } from "@/entities/project-property";

export type TMeasuringCurrentTransformersDeviceAccuracyClass = 1 | 2 | 3 | 4;
export function TypeOfMeasuringCurrentTransformersDevice({
  className,
  selectedNodeId,
  measuringCurrentTransformersDevice,
  typeOfMeasuringCurrentTransformersDevice,
}: {
  className?: string;
  selectedNodeId: string;
  typeOfMeasuringCurrentTransformersDevice?: TypeOfMeasuringCurrentTransformersDeviceOptions_10KV;
  measuringCurrentTransformersDevice?: TMeasuringCurrentTransformersDevice;
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

  return (
    <div>
      <ProjectPropertySelect
        key1={TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}
        label="Есть измерительные трансформаторы тока"
        selectedNodeId={selectedNodeId}
        options={TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV}
        valueFromProp={
          typeOfMeasuringCurrentTransformersDevice ||
          TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV[0]
        }
      />
      {typeOfMeasuringCurrentTransformersDevice !== "Нет" &&
        typeOfMeasuringCurrentTransformersDevice && (
          <MeasuringCurrentTransformersDevice
            measuringCurrentTransformersDevice={measuringCurrentTransformersDevice}
            measuringCurrentTransformersDeviceAccuracyClass={
              measuringCurrentTransformersDeviceAccuracyClassValue
            }
            selectedNodeId={selectedNodeId}
          />
        )}
    </div>
  );
}
