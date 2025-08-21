import { ProjectPropertySelect } from "@/entities/project-property";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes";
import {
  SWITCH_CELL_04KV_INPUT_RENDER_DATA,
  SWITCH_CELL_04KV_KEY_1,
  SWITCH_CELL_04KV_LABEL,
  TYPE_OF_CELL_CELL_04KV_KEY_1,
  TYPE_OF_CELL_CELL_04KV_LABEL,
  TYPE_OF_CELL_CELL_04KV_OPTIONS,
} from "@/shared/react-flow/nodes/cell-04kv/options";
import { GenericInputs } from "../../entities/project-property/ui/GenericInputs";
import { TCell04Kv } from "@/shared/react-flow/nodes/cell-04kv/types";

import { MeasuringCurrentTransformersDevice } from "./MeasuringCurrentTransformersDevice";

export function TypeOfCell({
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
}
