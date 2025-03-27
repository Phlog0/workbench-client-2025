import useStore from "@/shared/appStore/store";
import { MySelect } from "@/shared/components";
import { useReactFlow } from "@xyflow/react";

import { useEffect, useState } from "react";
import { useGetProjectData } from "@/shared/lib/api/use-get-project-data";
import { Spinner } from "@/shared/ui";
import { TypeOfSwitchingDevice } from "./type-of-switching-device/type-of-switching-device";

import { VoltageTransformerDevice } from "./voltage-transformer-device";
import { OpnDevice } from "./opn/opn-device";
import { UkrmDevice } from "./ukrm-device";
import { IsThereMeasuringCurrentTransformersDevice } from "./measuring-current-transformers/is-there-measuring-current-transformers-device";
import { TCell10Kv } from "@/shared/appStore/react-flow-types";
const PARAM = "typeOfCell";
export function TypeOfCell({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  const options = [
    "ТСН (Трансформатор собсвтенных нужд)",
    "Шинный мост",
    "СВ (Секционный выключатель)",
    "СР (Секционный разъединитель)",
    "Шинный переход",
    "Ввод",
    "Отходящая линия",
    "УКРМ (Устройство компенсации реактивной мощности)",
    "ТН (Трансформатор напряжения)",
  ];

  const { data, isLoading, isError, error } = useGetProjectData({ q: PARAM });
  const { getNode } = useReactFlow();

  const nodeInfo = getNode(selectedNodeId as string) as TCell10Kv;

  const mockValue = nodeInfo?.[PARAM] || options[0];
  const [typeOfCell, setTypeOfCell] = useState(mockValue);

  useEffect(() => {
    setTypeOfCell(mockValue);
  }, [selectedNodeId]);

  if (isLoading) return <Spinner />;
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <MySelect
        prop={PARAM}
        label="Тип ячейки"
        selectedNodeId={selectedNodeId}
        options={options}
        propValue={typeOfCell}
        setPropValue={setTypeOfCell}
      />
      <TypeOfSwitchingDevice selectedNodeId={selectedNodeId} />
      <IsThereMeasuringCurrentTransformersDevice
        selectedNodeId={selectedNodeId}
      />
      <VoltageTransformerDevice selectedNodeId={selectedNodeId} />
      <OpnDevice selectedNodeId={selectedNodeId} />
      <UkrmDevice selectedNodeId={selectedNodeId} />
    </div>
  );
}
