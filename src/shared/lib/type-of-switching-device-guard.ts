import {
  SwitchingDevice,
  TSwitchingDeviceR,
  TSwitchingDeviceVN,
  TSwitchingDeviceVV,
} from "@/shared/types";

export const isVV = (device?: SwitchingDevice): device is TSwitchingDeviceVV => {
  if (device && device.typeOfDevice === "VV") {
    return true;
  } else {
    return false;
  }
};
export const isVN = (device?: SwitchingDevice): device is TSwitchingDeviceVN => {
  if (device && device.typeOfDevice === "VN") {
    return true;
  } else {
    return false;
  }
};
export const isR = (device?: SwitchingDevice): device is TSwitchingDeviceR => {
  if (device && device.typeOfDevice === "R") {
    return true;
  } else {
    return false;
  }
};
