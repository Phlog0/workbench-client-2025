import { UiSelect } from "@/shared/components";
import { useReactFlow } from "@xyflow/react";

import { useEffect, useState } from "react";
import { useGetProjectData } from "@/shared/lib/api/use-get-project-data";
import { Spinner } from "@/shared/ui";
import { TypeOfSwitchingDevice } from "./type-of-switching-device/type-of-switching-device";

import { VoltageTransformerDevice } from "./voltage-transformer-device";
import { UkrmDevice } from "./ukrm-device";
import { TypeOfMeasuringCurrentTransformersDevice } from "./measuring-current-transformers/type-of-measuring-current-transformers-device";
import { TCell10Kv } from "@/shared/appStore/react-flow-node-types";
import { TsnDevice } from "./tsn-device";
import { IsThereOpnDevice } from "./opn/is-there-opn-device";
import {
  TYPE_OF_CELL_LABEL_10KV,
  TYPE_OF_CELL_OPTIONS_10KV,
  TYPE_OF_CELL_PARAM_10KV,
  TypeOfCellOptions_10KV,
} from "@/shared/constants";
export function TypeOfCell({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  const options = TYPE_OF_CELL_OPTIONS_10KV;

  const { data, isLoading, isError, error } = useGetProjectData({ q: TYPE_OF_CELL_PARAM_10KV });
  const { getNode } = useReactFlow();

  const nodeInfo = getNode(selectedNodeId as string) as TCell10Kv;

  const mockValue = nodeInfo?.[TYPE_OF_CELL_PARAM_10KV] || options[0];
  const [typeOfCell, setTypeOfCell] = useState<TypeOfCellOptions_10KV>(mockValue);

  useEffect(() => {
    setTypeOfCell(mockValue);
  }, [selectedNodeId, mockValue]);

  if (isLoading) return <Spinner />;
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className={className}>
      <UiSelect
        prop={TYPE_OF_CELL_PARAM_10KV}
        label={TYPE_OF_CELL_LABEL_10KV}
        selectedNodeId={selectedNodeId}
        options={options}
        propValue={typeOfCell}
        setPropValue={setTypeOfCell}
      />
      {(typeOfCell === "ТСН (Трансформатор собсвтенных нужд)" ||
        typeOfCell === "СВ (Секционный выключатель)" ||
        typeOfCell === "СР (Секционный разъединитель)" ||
        typeOfCell === "Ввод" ||
        typeOfCell === "Отходящая линия" ||
        typeOfCell === "УКРМ (Устройство компенсации реактивной мощности)" ||
        typeOfCell === "ТН (Трансформатор напряжения)") && (
        <TypeOfSwitchingDevice selectedNodeId={selectedNodeId} />
      )}
      {typeOfCell === "ТН (Трансформатор напряжения)" && (
        <VoltageTransformerDevice selectedNodeId={selectedNodeId} />
      )}

      {(typeOfCell === "ТСН (Трансформатор собсвтенных нужд)" ||
        typeOfCell === "СВ (Секционный выключатель)" ||
        typeOfCell === "Ввод" ||
        typeOfCell === "Отходящая линия" ||
        typeOfCell === "УКРМ (Устройство компенсации реактивной мощности)" ||
        typeOfCell === "ТН (Трансформатор напряжения)") && (
        <TypeOfMeasuringCurrentTransformersDevice selectedNodeId={selectedNodeId} />
      )}
      {["ТСН (Трансформатор собсвтенных нужд)", "Ввод", "Отходящая линия"].includes(typeOfCell) && (
        <IsThereOpnDevice selectedNodeId={selectedNodeId} />
      )}

      {typeOfCell === "ТСН (Трансформатор собсвтенных нужд)" && (
        <TsnDevice selectedNodeId={selectedNodeId} />
      )}
      {typeOfCell === "УКРМ (Устройство компенсации реактивной мощности)" && (
        <UkrmDevice selectedNodeId={selectedNodeId} />
      )}
    </div>
  );
}
