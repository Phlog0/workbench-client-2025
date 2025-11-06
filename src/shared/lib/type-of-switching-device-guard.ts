import {
  TSwitchingDeviceCell10Kv,
  TSwitchingDeviceRCell10Kv,
  TSwitchingDeviceVNCell10kv,
  TSwitchingDeviceVVCell10Kv,
} from "../react-flow/nodes/cells/cell-10kv/types";

export const isVV = (device?: TSwitchingDeviceCell10Kv): device is TSwitchingDeviceVVCell10Kv => {
  if (device && device.typeOfDevice === "VV") {
    return true;
  } else {
    return false;
  }
};
export const isVN = (device?: TSwitchingDeviceCell10Kv): device is TSwitchingDeviceVNCell10kv => {
  if (device && device.typeOfDevice === "VN") {
    return true;
  } else {
    return false;
  }
};
export const isR = (device?: TSwitchingDeviceCell10Kv): device is TSwitchingDeviceRCell10Kv => {
  if (device && device.typeOfDevice === "R") {
    return true;
  } else {
    return false;
  }
};
