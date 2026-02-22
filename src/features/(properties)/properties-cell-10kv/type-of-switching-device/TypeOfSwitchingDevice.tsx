import { SwitchingDeviceVv } from "./SwitchingDeviceVv";
import { SwitchingDeviceVn } from "./SwitchingDeviceVn";
import { SwitchingDeviceR } from "./SwitchingDeviceR";
import { memo, useMemo } from "react";

import { TypeOfMicroprocessorDevice } from "./TypeOfMicroprocessorDevice";
import { isR, isVN, isVV } from "@/shared/lib";
import { ProjectPropertySelect } from "@/entities/project-property";

import { IsThereDevice, ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import {
  TmpdaaCell10Kv,
  TSwitchingDeviceCell10Kv,
  TTypeOfSwitchingDeviceCell10Kv,
} from "@/shared/react-flow/nodes/cells/cell-10kv/types";
import {
  TYPE_OF_SWITCHING_DEVICE_CELL_10KV_KEY_1,
  TYPE_OF_SWITCHING_DEVICE_CELL_10KV_LABEL,
  TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS,
} from "@/shared/react-flow/nodes/cells/cell-10kv/options";

export const TypeOfSwitchingDevice = memo(
  ({
    className,
    selectedNodeId,
    typeOfSwitchingDevice,
    switchingDevice,
    typeOfMicroproc,
    microProc,
  }: {
    className?: string;
    selectedNodeId: ReactFlowNodeId;
    typeOfSwitchingDevice?: TTypeOfSwitchingDeviceCell10Kv;
    switchingDevice?: TSwitchingDeviceCell10Kv;
    typeOfMicroproc?: IsThereDevice;
    microProc?: TmpdaaCell10Kv;
  }) => {
    const options = useMemo(() => {
      return Object.values(TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS);
    }, []);

    return (
      <div className={className}>
        <ProjectPropertySelect
          key1={TYPE_OF_SWITCHING_DEVICE_CELL_10KV_KEY_1}
          label={TYPE_OF_SWITCHING_DEVICE_CELL_10KV_LABEL}
          selectedNodeId={selectedNodeId}
          options={options}
          valueFromProp={typeOfSwitchingDevice || "Нет"}
          // setPropValue={setTypeOfSwitchingDevice}
        />

        {typeOfSwitchingDevice === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.vv &&
          isVV(switchingDevice) && (
            <>
              <SwitchingDeviceVv
                switchingDevice={switchingDevice}
                selectedNodeId={selectedNodeId}
              />
              <TypeOfMicroprocessorDevice
                selectedNodeId={selectedNodeId}
                typeOfMicroproc={typeOfMicroproc}
                microProc={microProc}
              />
            </>
          )}
        {typeOfSwitchingDevice === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.vn &&
          isVN(switchingDevice) && (
            <SwitchingDeviceVn
              switchingDevice={switchingDevice}
              selectedNodeId={selectedNodeId}
            />
          )}
        {typeOfSwitchingDevice === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.r &&
          isR(switchingDevice) && (
            <SwitchingDeviceR
              selectedNodeId={selectedNodeId}
              switchingDevice={switchingDevice}
            />
          )}
      </div>
    );
  }
);
