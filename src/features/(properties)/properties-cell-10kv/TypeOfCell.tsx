import { TypeOfSwitchingDevice } from "./type-of-switching-device";

import { VoltageTransformerDevice } from "./VoltageTransformerDevice";
import { UkrmDevice } from "./UkrmDevice";
import { TypeOfMeasuringCurrentTransformersDevice } from "./TypeOfMeasuringCurrentTransformersDevice";
import { TsnDevice } from "./TsnDevice";

import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { ProjectPropertySelect } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TCell10Kv } from "@/shared/react-flow/nodes/cells/cell-10kv/types";
import {
  TYPE_OF_CELL_10KV_KEY_1,
  TYPE_OF_CELL_10KV_LABEL,
  TYPE_OF_CELL_CELL_10KV_OPTIONS,
} from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import { TypeOfOpnDevice } from "./TypeOfOpnDevice";
import { TypeOfVoltage } from "../shared/TypeOfVoltage";
import { RatedCurrentOfTheMainCircuits } from "./RatedCurrentOfTheMainCircuits";
import { RatedCurrent, SPower } from "./(read-only-parameters)";

export function TypeOfCell({
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
}) {
  const cell10kv = useGetCurrentNode(selectedNodeId) as TCell10Kv;

  const typeOfCell = cell10kv?.data?.[TYPE_OF_CELL_10KV_KEY_1];
  return (
    <div className="flex flex-col gap-4">
      <TypeOfVoltage
        selectedNodeId={selectedNodeId}
        typeOfVoltageValue={cell10kv?.data?.typeOfVoltage}
      />
      <div>
        <RatedCurrent
          selectedNodeId={selectedNodeId}
          ratedCurrentValue={cell10kv.data?.ratedCurrent || ""}
        />
        <SPower selectedNodeId={selectedNodeId} sPowerValue={cell10kv.data?.sPower || ""} />
      </div>
      <ProjectPropertySelect
        key1={TYPE_OF_CELL_10KV_KEY_1}
        label={TYPE_OF_CELL_10KV_LABEL}
        selectedNodeId={selectedNodeId}
        options={Object.values(TYPE_OF_CELL_CELL_10KV_OPTIONS)}
        valueFromProp={typeOfCell || "Не выбрано"}
        // setPropValue={setTypeOfCell}
      />
      {typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.v && (
        <RatedCurrentOfTheMainCircuits
          selectedNodeId={selectedNodeId}
          value={cell10kv?.data?.ratedCurrentOfTheMainCircuits}
        />
      )}
      {(typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tsn ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.sv ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.sr ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.v ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.ol ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.ukrm ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tn) && (
        <TypeOfSwitchingDevice
          typeOfSwitchingDevice={cell10kv.data?.typeOfSwitchingDevice}
          switchingDevice={cell10kv.data?.switchingDevice}
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
