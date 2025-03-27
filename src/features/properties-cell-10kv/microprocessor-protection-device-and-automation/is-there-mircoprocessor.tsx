import { MySelect } from "@/shared/components";
import { useReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";
import { useGetProjectData } from "@/shared/lib/api/use-get-project-data";
import { Spinner } from "@/shared/ui";
import { MicroprocessorProtectionDevice } from "./microprocessor-protection-device";
import { TCell10Kv } from "@/shared/appStore/react-flow-types";
const PARAM = "isThereMicroprocessorDevice";
export function IsThereMicroprocessorDevice({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  const options = ["нет", "есть"];

  const { data, isLoading, isError, error } = useGetProjectData({ q: PARAM });
  const { getNode } = useReactFlow();

  const nodeInfo = getNode(selectedNodeId as string) as TCell10Kv;

  const mockValue = nodeInfo?.[PARAM] || options[0];
  const [value, setValue] = useState(mockValue);
  useEffect(() => {
    setValue(mockValue);
  }, [selectedNodeId]);

  if (isLoading) return <Spinner />;
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <MySelect
        prop={PARAM}
        label="Есть микропроцессорное устройство защиты и автоматики"
        selectedNodeId={selectedNodeId}
        options={options}
        propValue={value}
        setPropValue={setValue}
      />
      {value === "есть" && (
        <MicroprocessorProtectionDevice selectedNodeId={selectedNodeId} />
      )}
    </div>
  );
}
