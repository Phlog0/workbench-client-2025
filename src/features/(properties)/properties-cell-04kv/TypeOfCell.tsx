import { ProjectPropertySelect } from "@/entities/project-property";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import {
  SWITCH_CELL_04KV_INPUT_RENDER_DATA,
  SWITCH_CELL_04KV_KEY_1,
  SWITCH_CELL_04KV_LABEL,
  TYPE_OF_CELL_CELL_04KV_KEY_1,
  TYPE_OF_CELL_CELL_04KV_LABEL,
  TYPE_OF_CELL_CELL_04KV_OPTIONS,
} from "@/shared/react-flow/nodes/cells/cell-04kv/options";
import { GenericInputs } from "@/entities/project-property";
import { TCell04Kv } from "@/shared/react-flow/nodes/cells/cell-04kv/types";

import { MeasuringCurrentTransformersDevice } from "./MeasuringCurrentTransformersDevice";
import { memo } from "react";

export const TypeOfCell = memo(function ({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
}) {
  const cell04kv = useGetCurrentNode(selectedNodeId) as TCell04Kv;

  const typeOfCell = cell04kv?.data?.[TYPE_OF_CELL_CELL_04KV_KEY_1];
  console.log({ cell04kv });
  return (
    <div className={className}>
      <ProjectPropertySelect
        key1={TYPE_OF_CELL_CELL_04KV_KEY_1}
        label={TYPE_OF_CELL_CELL_04KV_LABEL}
        selectedNodeId={selectedNodeId}
        options={TYPE_OF_CELL_CELL_04KV_OPTIONS}
        valueFromProp={typeOfCell || "Не выбрано"}
        // setPropValue={setTypeOfCell}
      />
      <GenericInputs
        inputRenderData={SWITCH_CELL_04KV_INPUT_RENDER_DATA}
        inputPropertiesKey1={SWITCH_CELL_04KV_KEY_1}
        inputsLabel={SWITCH_CELL_04KV_LABEL}
        selectedNodeId={selectedNodeId}
        inputProperties={cell04kv.data.switch}
      />
      <MeasuringCurrentTransformersDevice
        typeOfMeasuringCurrentTransformersDevice={
          cell04kv.data?.typeOfMeasuringCurrentTransformersDevice
        }
        selectedNodeId={selectedNodeId}
        measuringCurrentTransformersDevice={cell04kv.data?.measuringCurrentTransformersDevice}
      />
    </div>
  );
});
