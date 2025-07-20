import { SwitchingDeviceVv } from "./switching-device-vv";
import { SwitchingDeviceVn } from "./switching-device-vn";
import { SwitchingDeviceR } from "./switching-device-r";
import { memo } from "react";

import {
  SwitchingDeviceValue_10Kv,
  TYPE_OF_SWITCHING_DEVICE_LABEL_10KV,
  TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV,
  TYPE_OF_SWITCHING_DEVICE_PARAM_10KV,
} from "@/shared/constants/10kv";
import { IsThereDevice } from "@/shared/types/react-flow-node-types";
import { SwitchingDevice, Tmpdaa } from "@/shared/types/properties-types";
import { IsThereMicroprocessorDevice } from "./microprocessor-protection-device-and-automation/is-there-mircoprocessor";
import { isR, isVN, isVV } from "@/shared/lib";
import { ProjectPropertySelect } from "@/entities/project-property";

export const TypeOfSwitchingDevice = memo(
  ({
    className,
    selectedNodeId,
    typeOfSwitchingDevice,
    switchingDevice,
    isThereMicroProc,
    microProc,
  }: {
    className?: string;
    selectedNodeId: string;
    typeOfSwitchingDevice?: SwitchingDeviceValue_10Kv;
    switchingDevice?: SwitchingDevice;
    isThereMicroProc?: IsThereDevice;
    microProc?: Tmpdaa;
  }) => {
    // console.log({ typeOfSwitchingDevice });
    return (
      <div>
        <ProjectPropertySelect
          key1={TYPE_OF_SWITCHING_DEVICE_PARAM_10KV}
          label={TYPE_OF_SWITCHING_DEVICE_LABEL_10KV}
          selectedNodeId={selectedNodeId}
          options={Object.values(TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV)}
          valueFromProp={typeOfSwitchingDevice || "Нет"}
          // setPropValue={setTypeOfSwitchingDevice}
        />

        {typeOfSwitchingDevice === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV.vv &&
          isVV(switchingDevice) && (
            <>
              <SwitchingDeviceVv
                switchingDevice={switchingDevice}
                selectedNodeId={selectedNodeId}
              />
              <IsThereMicroprocessorDevice
                selectedNodeId={selectedNodeId}
                isThereMicroProc={isThereMicroProc}
                microProc={microProc}
              />
            </>
          )}
        {typeOfSwitchingDevice === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV.vn &&
          isVN(switchingDevice) && (
            <SwitchingDeviceVn switchingDevice={switchingDevice} selectedNodeId={selectedNodeId} />
          )}
        {typeOfSwitchingDevice === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV.r &&
          isR(switchingDevice) && (
            <SwitchingDeviceR selectedNodeId={selectedNodeId} switchingDevice={switchingDevice} />
          )}
      </div>
    );
  },
);
