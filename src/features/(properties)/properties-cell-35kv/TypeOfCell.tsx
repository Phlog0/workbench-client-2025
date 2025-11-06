import { TypeOfSwitchingDevice } from "./type-of-switching-device";

import { VoltageTransformerDevice } from "./VoltageTransformerDevice";

import { TsnDevice } from "./TsnDevice";

import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { ProjectPropertySelect } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TCell35Kv } from "@/shared/react-flow/nodes/cells/cell-35kv/types";
import {
  TYPE_OF_CELL_35KV_KEY_1,
  TYPE_OF_CELL_35KV_LABEL,
  TYPE_OF_CELL_CELL_35KV_OPTIONS,
} from "@/shared/react-flow/nodes/cells/cell-35kv/options";

import { RatedCurrentOfTheMainCircuits } from "./RatedCurrentOfTheMainCircuits";

export function TypeOfCell({
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
}) {
  const cell35kv = useGetCurrentNode(selectedNodeId) as TCell35Kv;

  const typeOfCell = cell35kv?.data?.[TYPE_OF_CELL_35KV_KEY_1];
  return (
    <div className="flex flex-col gap-4">
      <ProjectPropertySelect
        key1={TYPE_OF_CELL_35KV_KEY_1}
        label={TYPE_OF_CELL_35KV_LABEL}
        selectedNodeId={selectedNodeId}
        options={Object.values(TYPE_OF_CELL_CELL_35KV_OPTIONS)}
        valueFromProp={typeOfCell || "Не выбрано"}
        // setPropValue={setTypeOfCell}
      />
      {typeOfCell === TYPE_OF_CELL_CELL_35KV_OPTIONS.v && (
        <RatedCurrentOfTheMainCircuits
          selectedNodeId={selectedNodeId}
          value={cell35kv?.data?.ratedCurrentOfTheMainCircuits}
        />
      )}
      {(typeOfCell === TYPE_OF_CELL_CELL_35KV_OPTIONS.tsn ||
        typeOfCell === TYPE_OF_CELL_CELL_35KV_OPTIONS.sv ||
        typeOfCell === TYPE_OF_CELL_CELL_35KV_OPTIONS.sr ||
        typeOfCell === TYPE_OF_CELL_CELL_35KV_OPTIONS.v ||
        typeOfCell === TYPE_OF_CELL_CELL_35KV_OPTIONS.ol ||
        typeOfCell === TYPE_OF_CELL_CELL_35KV_OPTIONS.ukrm ||
        typeOfCell === TYPE_OF_CELL_CELL_35KV_OPTIONS.tn) && (
        <TypeOfSwitchingDevice
          typeOfSwitchingDevice={cell35kv.data?.typeOfSwitchingDevice}
          switchingDevice={cell35kv.data?.switchingDevice}
          typeOfMicroproc={cell35kv.data.typeOfMicroprocessorDevice}
          microProc={cell35kv.data.mpdaa}
          selectedNodeId={selectedNodeId}
        />
      )}
      {typeOfCell === TYPE_OF_CELL_CELL_35KV_OPTIONS.tn && (
        <VoltageTransformerDevice
          voltageTransformer={cell35kv.data.tn}
          selectedNodeId={selectedNodeId}
        />
      )}

      {typeOfCell === TYPE_OF_CELL_CELL_35KV_OPTIONS.tsn && (
        <TsnDevice selectedNodeId={selectedNodeId} tsn={cell35kv?.data.tsn} />
      )}
    </div>
  );
}
