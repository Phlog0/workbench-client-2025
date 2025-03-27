import useStore from "@/shared/appStore/store";
import { MySelect } from "@/shared/components";
import { useReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";
import { useGetProjectData } from "@/shared/lib/api/use-get-project-data";
import { Spinner } from "@/shared/ui";
import { OpnDevice } from "./opn-device";
import { TCell10Kv } from "@/shared/appStore/react-flow-types";
const PARAM = "isThereOpnDevice";
export function IsThereOpnDevice({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  const options = ["нет", "есть"];

  // const { data, isLoading, isError, error } = useGetProjectData({ q: PARAM });
  const { getNode } = useReactFlow();

  const nodeInfo = getNode(selectedNodeId as string) as TCell10Kv;

  const mockValue = nodeInfo?.[PARAM] || options[0];
  const [isThereOpnDevice, setIsThereOpnDevice] = useState(mockValue);
  useEffect(() => {
    setIsThereOpnDevice(mockValue);
  }, [selectedNodeId]);

  // if (isLoading) return <Spinner />;
  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }
  return (
    <div>
      <MySelect
        prop={PARAM}
        label="Есть ОПН"
        selectedNodeId={selectedNodeId}
        options={options}
        propValue={isThereOpnDevice}
        setPropValue={setIsThereOpnDevice}
      />
      {isThereOpnDevice === "есть" && (
        <OpnDevice selectedNodeId={selectedNodeId} />
      )}
    </div>
  );
}
