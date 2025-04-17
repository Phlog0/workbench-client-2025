import useStore from "@/shared/appStore/store";
import { MySelect } from "@/shared/components";
import { useReactFlow } from "@xyflow/react";
import { SwitchingDeviceVv } from "./switching-device-vv";
import { SwitchingDeviceVn } from "./switching-device-vn";
import { SwitchingDeviceR } from "./switching-device-r";
import { useEffect, useState } from "react";
import { useGetProjectData } from "@/shared/lib/api/use-get-project-data";
import { Spinner } from "@/shared/ui";
import {
  typeOfSwitchingDeviceOptions,
  typeOfSwitchingDeviceParam,
} from "@/shared/mock-data";
import { TCell10Kv } from "@/shared/appStore/react-flow-types";
export function TypeOfSwitchingDevice({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  // const { data, isLoading, isError, error } = useGetProjectData({
  //   q: typeOfSwitchingDeviceParam,
  // });
  const { getNode } = useReactFlow();

  const nodeInfo = getNode(selectedNodeId as string) as TCell10Kv;

  const mockValue =
    nodeInfo?.[typeOfSwitchingDeviceParam] || typeOfSwitchingDeviceOptions[0];
  const [typeOfSwitchingDevice, setTypeOfSwitchingDevice] = useState(mockValue);

  //? 1.Итак я знаю шо при возбуждении хуков происходит ре-рендер. И что же ререндерится? Почему я должен использовать useEffect? Почему я жду магию? Потому что я изменил selectedNodeId => в момент перерендера заново просчиталось getNode и в typeOfSwitchingDevice должны попасть обновлённые данные. Но этого не происходит. Что на что триггерица - вот в чём вопрос...

  //? 2.Такс, я проверил по console.log. Действительно не самообновляется useState. Иногда мне кажется, что useState работает как useState + useEffect. Наверно стейт -то как раз не возбуждается.

  useEffect(() => {
    setTypeOfSwitchingDevice(mockValue);
  }, [selectedNodeId]);

  // if (isLoading) return <Spinner />;
  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }
  return (
    <div>
      <MySelect
        prop={typeOfSwitchingDeviceParam}
        label="Тип коммутационного аппарата"
        selectedNodeId={selectedNodeId}
        options={typeOfSwitchingDeviceOptions}
        propValue={typeOfSwitchingDevice}
        setPropValue={setTypeOfSwitchingDevice}
        
      />
      {typeOfSwitchingDevice === "вв" && (
        <SwitchingDeviceVv selectedNodeId={selectedNodeId} />
      )}
      {typeOfSwitchingDevice === "вн" && (
        <SwitchingDeviceVn selectedNodeId={selectedNodeId} />
      )}
      {typeOfSwitchingDevice === "р" && (
        <SwitchingDeviceR selectedNodeId={selectedNodeId} />
      )}
    </div>
  );
}
