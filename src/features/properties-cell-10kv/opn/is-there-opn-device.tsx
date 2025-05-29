import { UiSelect } from "@/shared/components";
import { useReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";

import { OpnDevice } from "./opn-device";
import { TCell10Kv } from "@/shared/appStore/react-flow-node-types";
import {
  IS_THERE_OPN_KEY_1_10KV,
  IS_THERE_OPN_DEVICE_OPTIONS_10KV,
  IS_THERE_OPN_LABEL_10KV,
} from "@/shared/constants";
export function IsThereOpnDevice({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  // const { data, isLoading, isError, error } = useGetProjectData({ q: PARAM });
  const { getNode } = useReactFlow();

  const nodeInfo = getNode(selectedNodeId as string) as TCell10Kv;

  const mockValue = nodeInfo?.[IS_THERE_OPN_KEY_1_10KV] || IS_THERE_OPN_DEVICE_OPTIONS_10KV[0];
  const [isThereOpnDevice, setIsThereOpnDevice] = useState(mockValue);
  useEffect(() => {
    setIsThereOpnDevice(mockValue);
  }, [selectedNodeId]);

  // if (isLoading) return <Spinner />;
  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }
  return (
    <div className={className}>
      <UiSelect
        prop={IS_THERE_OPN_KEY_1_10KV}
        label={IS_THERE_OPN_LABEL_10KV}
        selectedNodeId={selectedNodeId}
        options={IS_THERE_OPN_DEVICE_OPTIONS_10KV}
        propValue={isThereOpnDevice}
        setPropValue={setIsThereOpnDevice}
      />
      {isThereOpnDevice === "есть" && <OpnDevice selectedNodeId={selectedNodeId} />}
    </div>
  );
}
