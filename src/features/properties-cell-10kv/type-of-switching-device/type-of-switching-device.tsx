import { UiSelect } from "@/shared/components";
import { useReactFlow } from "@xyflow/react";
import { SwitchingDeviceVv } from "./switching-device-vv";
import { SwitchingDeviceVn } from "./switching-device-vn";
import { SwitchingDeviceR } from "./switching-device-r";
import { useEffect, useState } from "react";

import {
  TYPE_OF_SWITCHING_DEVICE_LABEL_10KV,
  TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV,
  TYPE_OF_SWITCHING_DEVICE_PARAM_10KV,
  TypeOfSwitchingDeviceOptions_10KV,
} from "@/shared/constants";
import { TCell10Kv } from "@/shared/appStore/react-flow-node-types";
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
    nodeInfo?.[TYPE_OF_SWITCHING_DEVICE_PARAM_10KV] || TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV[0];
  const [typeOfSwitchingDevice, setTypeOfSwitchingDevice] =
    useState<TypeOfSwitchingDeviceOptions_10KV>(mockValue);

  //? 1.Итак я знаю шо при возбуждении хуков происходит ре-рендер. И что же ререндерится? Почему я должен использовать useEffect? Почему я жду магию? Потому что я изменил selectedNodeId => в момент перерендера заново просчиталось getNode и в typeOfSwitchingDevice должны попасть обновлённые данные. Но этого не происходит. Что на что триггерица - вот в чём вопрос...

  //? 2.Такс, я проверил по console.log. Действительно не самообновляется useState. Иногда мне кажется, что useState работает как useState + useEffect. Наверно стейт -то как раз не возбуждается.

  useEffect(() => {
    setTypeOfSwitchingDevice(mockValue);
  }, [selectedNodeId, mockValue]);

  // if (isLoading) return <Spinner />;
  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }
  return (
    <div>
      <UiSelect
        prop={TYPE_OF_SWITCHING_DEVICE_PARAM_10KV}
        label={TYPE_OF_SWITCHING_DEVICE_LABEL_10KV}
        selectedNodeId={selectedNodeId}
        options={TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV}
        propValue={typeOfSwitchingDevice}
        setPropValue={setTypeOfSwitchingDevice}
      />
      {typeOfSwitchingDevice === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV[1] && (
        <SwitchingDeviceVv selectedNodeId={selectedNodeId} />
      )}
      {typeOfSwitchingDevice === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV[2] && (
        <SwitchingDeviceVn selectedNodeId={selectedNodeId} />
      )}
      {typeOfSwitchingDevice === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV[3] && (
        <SwitchingDeviceR selectedNodeId={selectedNodeId} />
      )}
    </div>
  );
}
