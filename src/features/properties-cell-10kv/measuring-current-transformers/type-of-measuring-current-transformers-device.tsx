import { UiSelect } from "@/shared/components";
import { useReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";

import { MeasuringCurrentTransformersDevice } from "./measuring-current-transformers-device";

import { TCell10Kv } from "@/shared/appStore/react-flow-node-types";
import {
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV,
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV,
} from "@/shared/constants";

export type TtCount = string | number;
export function TypeOfMeasuringCurrentTransformersDevice({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  //   const { data, isLoading, isError, error } = useGetProjectData({
  //     q: isMeasuringCurrentTransformersDeviceParam,
  //   });
  const { getNode } = useReactFlow();

  const nodeInfo = getNode(selectedNodeId as string) as TCell10Kv;

  const mockValue =
    nodeInfo?.[TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV] ||
    TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV[0];
  const [value, setValue] = useState(mockValue);

  const [ttCount, setTtCount] = useState<TtCount>("");

  useEffect(() => {
    if (value === "нет") setTtCount("");
    if (["2 Трансформатора тока 2 обмотки", "3 Трансформатора тока 2 обмотки"].includes(value))
      setTtCount(2);
    if (["2 Трансформатора тока 3 обмотки", "3 Трансформатора тока 3 обмотки"].includes(value))
      setTtCount(3);
    if (["2 Трансформатора тока 4 обмотки", "3 Трансформатора тока 4 обмотки"].includes(value))
      setTtCount(4);
  }, [value]);

  useEffect(() => {
    setValue(mockValue);
  }, [selectedNodeId, mockValue]);

  //   if (isLoading) return <Spinner />;
  //   if (isError) {
  //     return <span>Error: {error.message}</span>;
  //   }
  return (
    <div>
      <UiSelect
        prop={TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}
        label="Есть измерительные трансформаторы тока"
        selectedNodeId={selectedNodeId}
        options={TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV}
        propValue={value}
        setPropValue={setValue}
      />
      {value !== "нет" && (
        <MeasuringCurrentTransformersDevice ttCount={ttCount} selectedNodeId={selectedNodeId} />
      )}
    </div>
  );
}
