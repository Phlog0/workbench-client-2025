import { UiSelect } from "@/shared/components";
import { useReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";
import { MicroprocessorProtectionDevice } from "./microprocessor-protection-device";
import { TCell10Kv } from "@/shared/appStore/react-flow-node-types";
import {
  IS_THERE_MICROPROCESSOR_DEVICE_KEY_1_10KV,
  IS_THERE_MICROPROCESSOR_DEVICE_LABEL_10KV,
  IS_THERE_MICROPROCESSOR_DEVICE_OPTIONS_10KV,
} from "@/shared/constants";

export function IsThereMicroprocessorDevice({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  const { getNode } = useReactFlow();

  const nodeInfo = getNode(selectedNodeId as string) as TCell10Kv;

  const mockValue =
    nodeInfo?.[IS_THERE_MICROPROCESSOR_DEVICE_KEY_1_10KV] ||
    IS_THERE_MICROPROCESSOR_DEVICE_OPTIONS_10KV[0];
  const [value, setValue] = useState(mockValue);
  useEffect(() => {
    setValue(mockValue);
  }, [selectedNodeId]);

  // if (isLoading) return <Spinner />;
  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }
  return (
    <div className={className}>
      <UiSelect
        prop={IS_THERE_MICROPROCESSOR_DEVICE_KEY_1_10KV}
        label={IS_THERE_MICROPROCESSOR_DEVICE_LABEL_10KV}
        selectedNodeId={selectedNodeId}
        options={IS_THERE_MICROPROCESSOR_DEVICE_OPTIONS_10KV}
        propValue={value}
        setPropValue={setValue}
      />
      {value === "есть" && <MicroprocessorProtectionDevice selectedNodeId={selectedNodeId} />}
    </div>
  );
}
