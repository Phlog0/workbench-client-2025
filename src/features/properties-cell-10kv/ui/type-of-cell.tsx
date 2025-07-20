import { Spinner } from "@/shared/ui";
import { TypeOfSwitchingDevice } from "./type-of-switching-device/type-of-switching-device";

import { VoltageTransformerDevice } from "./voltage-transformer-device";
import { UkrmDevice } from "./ukrm-device";
import { TypeOfMeasuringCurrentTransformersDevice } from "./measuring-current-transformers/type-of-measuring-current-transformers-device";
import { TCell10Kv } from "@/shared/types/react-flow-node-types";
import { TsnDevice } from "./tsn-device";
import { IsThereOpnDevice } from "./opn/is-there-opn-device";
import {
  TYPE_OF_CELL_LABEL_10KV,
  TYPE_OF_CELL_OPTIONS_10KV,
  TYPE_OF_CELL_PARAM_10KV,
} from "@/shared/constants/10kv";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { ProjectPropertySelect } from "@/entities/project-property";

export function TypeOfCell({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  const cell10kv = useGetCurrentNode(selectedNodeId) as TCell10Kv;

  const typeOfCell = cell10kv?.data?.[TYPE_OF_CELL_PARAM_10KV];

  return (
    <div className={className}>
      <ProjectPropertySelect
        key1={TYPE_OF_CELL_PARAM_10KV}
        label={TYPE_OF_CELL_LABEL_10KV}
        selectedNodeId={selectedNodeId}
        options={Object.values(TYPE_OF_CELL_OPTIONS_10KV)}
        valueFromProp={typeOfCell || "Не выбрано"}
        // setPropValue={setTypeOfCell}
      />
      {(typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.tsn ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.sv ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.sr ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.v ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.ol ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.ukrm ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.tn) && (
        <TypeOfSwitchingDevice
          typeOfSwitchingDevice={cell10kv.data.typeOfSwitchingDevice}
          switchingDevice={cell10kv.data.switchingDevice}
          isThereMicroProc={cell10kv.data.isThereMicroprocessorDevice}
          microProc={cell10kv.data.mpdaa}
          selectedNodeId={selectedNodeId}
        />
      )}
      {typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.tn && (
        <VoltageTransformerDevice
          voltageTransformer={cell10kv.data.tn}
          selectedNodeId={selectedNodeId}
        />
      )}

      {(typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.tsn ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.sv ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.v ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.ol ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.ukrm ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.tn) && (
        <TypeOfMeasuringCurrentTransformersDevice
          selectedNodeId={selectedNodeId}
          typeOfMeasuringCurrentTransformersDevice={
            cell10kv.data.typeOfMeasuringCurrentTransformersDevice
          }
          measuringCurrentTransformersDevice={cell10kv.data.measuringCurrentTransformersDevice}
        />
      )}
      {(typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.tsn ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.v ||
        typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.ol) && (
        <IsThereOpnDevice
          opnDevice={cell10kv.data.opn}
          isThereOpnDevice={cell10kv.data.isThereOpnDevice}
          selectedNodeId={selectedNodeId}
        />
      )}

      {typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.tsn && (
        <TsnDevice selectedNodeId={selectedNodeId} tsn={cell10kv?.data.tsn} />
      )}
      {typeOfCell === TYPE_OF_CELL_OPTIONS_10KV.ukrm && (
        <UkrmDevice ukrm={cell10kv.data.ukrm} selectedNodeId={selectedNodeId} />
      )}
    </div>
  );
}
