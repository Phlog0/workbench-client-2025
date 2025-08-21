import { TypeOfSwitchingDevice } from "./type-of-switching-device/TypeOfSwitchingDevice";

import { VoltageTransformerDevice } from "./VoltageTransformerDevice";
import { UkrmDevice } from "./UkrmDevice";
import { TypeOfMeasuringCurrentTransformersDevice } from "./TypeOfMeasuringCurrentTransformersDevice";
import { TsnDevice } from "./TsnDevice";

import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { ProjectPropertySelect } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes";
import { TCell10Kv } from "@/shared/react-flow/nodes/cell-10kv/types";
import {
  TYPE_OF_CELL_10KV_KEY_1,
  TYPE_OF_CELL_10KV_LABEL,
  TYPE_OF_CELL_CELL_10KV_OPTIONS,
} from "@/shared/react-flow/nodes/cell-10kv/options";
import { TypeOfOpnDevice } from "./TypeOfOpnDevice";

export function TypeOfCell({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
}) {
  const cell10kv = useGetCurrentNode(selectedNodeId) as TCell10Kv;

  const typeOfCell = cell10kv?.data?.[TYPE_OF_CELL_10KV_KEY_1];

  return (
    <div className={className}>
      <ProjectPropertySelect
        key1={TYPE_OF_CELL_10KV_KEY_1}
        label={TYPE_OF_CELL_10KV_LABEL}
        selectedNodeId={selectedNodeId}
        options={Object.values(TYPE_OF_CELL_CELL_10KV_OPTIONS)}
        valueFromProp={typeOfCell || "Не выбрано"}
        // setPropValue={setTypeOfCell}
      />
      {(typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tsn ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.sv ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.sr ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.v ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.ol ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.ukrm ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tn) && (
        <TypeOfSwitchingDevice
          typeOfSwitchingDevice={cell10kv.data.typeOfSwitchingDevice}
          switchingDevice={cell10kv.data.switchingDevice}
          typeOfMicroproc={cell10kv.data.typeOfMicroprocessorDevice}
          microProc={cell10kv.data.mpdaa}
          selectedNodeId={selectedNodeId}
        />
      )}
      {typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tn && (
        <VoltageTransformerDevice
          voltageTransformer={cell10kv.data.tn}
          selectedNodeId={selectedNodeId}
        />
      )}

      {(typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tsn ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.sv ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.v ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.ol ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.ukrm ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tn) && (
        <TypeOfMeasuringCurrentTransformersDevice
          selectedNodeId={selectedNodeId}
          typeOfMeasuringCurrentTransformersDevice={
            cell10kv.data.typeOfMeasuringCurrentTransformersDevice
          }
          measuringCurrentTransformersDevice={cell10kv.data.measuringCurrentTransformersDevice}
        />
      )}
      {(typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tsn ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.v ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.ol) && (
        <TypeOfOpnDevice
          opn={cell10kv.data.opn}
          typeOfOpnDevice={cell10kv.data.typeOfOpnDevice}
          selectedNodeId={selectedNodeId}
        />
      )}

      {typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tsn && (
        <TsnDevice selectedNodeId={selectedNodeId} tsn={cell10kv?.data.tsn} />
      )}
      {typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.ukrm && (
        <UkrmDevice ukrm={cell10kv.data.ukrm} selectedNodeId={selectedNodeId} />
      )}
    </div>
  );
}
