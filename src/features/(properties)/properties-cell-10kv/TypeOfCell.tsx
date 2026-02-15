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
import { ReadOnlyParameters } from "./(read-only-parameters)";
import { TCell04Kv } from "@/shared/react-flow/nodes/cells/cell-04kv/types";
import { TCell35Kv } from "@/shared/react-flow/nodes/cells/cell-35kv/types";

export function TypeOfCell_FROM_10KV({
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
}) {
  const cell = useGetCurrentNode(selectedNodeId) as TCell10Kv | TCell04Kv | TCell35Kv;

  const typeOfCell = cell?.data?.[TYPE_OF_CELL_10KV_KEY_1];
  return (
    <div className="flex flex-col gap-4">
      {cell.type === "Cell10Kv" && (
        <TypeOfVoltage
          selectedNodeId={selectedNodeId}
          typeOfVoltageValue={cell?.data?.typeOfVoltage}
        />
      )}

      {/* READ-ONLY-STUFF HERE */}
      {cell.type === "Cell10Kv" && (
        <ReadOnlyParameters
          selectedNodeId={selectedNodeId}
          ratedCurrent={cell.data?.ratedCurrent}
          sPower={cell.data?.sPower}
        />
      )}
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
          value={cell?.data?.ratedCurrentOfTheMainCircuits}
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
          typeOfSwitchingDevice={cell.data?.typeOfSwitchingDevice}
          switchingDevice={cell.data?.switchingDevice}
          typeOfMicroproc={cell.data.typeOfMicroprocessorDevice}
          microProc={cell.data.mpdaa}
          selectedNodeId={selectedNodeId}
        />
      )}
      {typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tn && (
        <VoltageTransformerDevice
          voltageTransformer={cell.data.tn}
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
            cell.data.typeOfMeasuringCurrentTransformersDevice
          }
          measuringCurrentTransformersDevice={cell.data.measuringCurrentTransformersDevice}
        />
      )}
      {(typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tsn ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.v ||
        typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.ol) && (
        <TypeOfOpnDevice
          opn={cell.data.opn}
          typeOfOpnDevice={cell.data.typeOfOpnDevice}
          selectedNodeId={selectedNodeId}
        />
      )}

      {typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.tsn && (
        <TsnDevice selectedNodeId={selectedNodeId} tsn={cell?.data.tsn} />
      )}
      {typeOfCell === TYPE_OF_CELL_CELL_10KV_OPTIONS.ukrm && (
        <UkrmDevice ukrm={cell.data.ukrm} selectedNodeId={selectedNodeId} />
      )}
    </div>
  );
}
