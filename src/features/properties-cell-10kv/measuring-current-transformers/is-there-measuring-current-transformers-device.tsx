import { MySelect } from "@/shared/components";
import { useReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";
import { useGetProjectData } from "@/shared/lib/api/use-get-project-data";
import { Spinner } from "@/shared/ui";
import { MeasuringCurrentTransformersDevice } from "./measuring-current-transformers-device";

import {
  isMeasuringCurrentTransformersDeviceOptions,
  isMeasuringCurrentTransformersDeviceParam,
} from "@/shared/mock-data";
import { TCell10Kv } from "@/shared/appStore/react-flow-types";

export type TtCount = string | number;
export function IsThereMeasuringCurrentTransformersDevice({
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
    nodeInfo?.[isMeasuringCurrentTransformersDeviceParam] ||
    isMeasuringCurrentTransformersDeviceOptions[0];
  const [value, setValue] = useState(mockValue);

  const [ttCount, setTtCount] = useState<TtCount>("");

  useEffect(() => {
    if (value === "нет") setTtCount("");
    if (
      [
        "2 Трансформатора тока 2 обмотки",
        "3 Трансформатора тока 2 обмотки",
      ].includes(value)
    )
      setTtCount(2);
    if (
      [
        "2 Трансформатора тока 3 обмотки",
        "3 Трансформатора тока 3 обмотки",
      ].includes(value)
    )
      setTtCount(3);
    if (
      [
        "2 Трансформатора тока 4 обмотки",
        "3 Трансформатора тока 4 обмотки",
      ].includes(value)
    )
      setTtCount(4);
  }, [value]);

  useEffect(() => {
    setValue(mockValue);
  }, [selectedNodeId]);

  //   if (isLoading) return <Spinner />;
  //   if (isError) {
  //     return <span>Error: {error.message}</span>;
  //   }
  return (
    <div>
      <MySelect
        prop={isMeasuringCurrentTransformersDeviceParam}
        label="Есть измерительные трансформаторы тока"
        selectedNodeId={selectedNodeId}
        options={isMeasuringCurrentTransformersDeviceOptions}
        propValue={value}
        setPropValue={setValue}
      />
      {value !== "нет" && (
        <MeasuringCurrentTransformersDevice
          ttCount={ttCount}
          selectedNodeId={selectedNodeId}
        />
      )}
    </div>
  );
}
