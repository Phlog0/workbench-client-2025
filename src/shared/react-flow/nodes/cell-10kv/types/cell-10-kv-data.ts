import { IsThereDevice, NonPrimitiveKeys } from "../..";
import {
  TYPE_OF_CELL_CELL_10KV_OPTIONS,
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS,
  TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS,
} from "../options";

//Поле data: {} - это properties (тип, наименование, ...)
export type TSwitchingDeviceVVCell10Kv = {
  typeOfDevice: "VV";
  type?: string;
  title?: string;
  manufacturer?: string;
  ratedCurrent?: number;
  ratedBreakingCurrent?: number;
  ratedVoltage?: number;
};
export type TSwitchingDeviceVNCell10kv = {
  typeOfDevice: "VN";
  type?: string;
  title?: string;
  manufacturer?: string;
  ratedCurrent?: number;
  ratedBreakingCurrent?: number;
  ratedVoltage?: number;
  numberOfGroundShafts?: number;
  locationOfGroundingBlades?: string;
  switchDriveLocation?: string;
  locationOfTheGroundingBladeDrive?: string;
};
export type TSwitchingDeviceRCell10Kv = {
  typeOfDevice: "R";
  type?: string;
  title?: string;
  manufacturer?: string;
  ratedCurrent?: number;
  thermalCurrent?: number;
  ratedVoltage?: number;
};

export type TSwitchingDeviceCell10Kv =
  | TSwitchingDeviceVVCell10Kv
  | TSwitchingDeviceVNCell10kv
  | TSwitchingDeviceRCell10Kv;

export type TTsnCell10Kv = {
  type?: string;
  title?: string;
  manufacturer?: string;
  ratedPower?: string;
};
export type TTnCell10Kv = {
  type?: string;
  title?: string;
  manufacturer?: string;
  ratedThreePhasePowerOfTheFirstWinding?: string;
  accuracyClassOfTheFirstSecondaryWinding: string;
  ratedThreePhasePowerOfTheSecondSecondaryWinding?: string;
  accuracyClassOfTheSecondSecondaryWinding?: string;
  ratedThreePhasePowerOfAadditionalSecondaryWinding?: string;
  accuracyClassOfSecondaryReturnWires?: string;
  ratedLineVoltageAtTheTerminalsOfThePrimaryWinding?: string;
};
export type TMeasuringCurrentTransformersDeviceCell10Kv = {
  type: string;
  title: string;
  manufacturer: string;
  transformationRatio: string;
  accuracyClass: string;
  oneSecondThermalCurrent: string;
  typeOfService: string;
};
export type TmpdaaCell10Kv = {
  type: string;
  title: string;
  manufacturer: string;
};

export type TOpnCell10Kv = {
  type: string;
  title: string;
  manufacturer: string;
  ratedOperatingVoltage: string;
  throughput: string;
  ratedDischargeCurrent: string;
  maximumContinuousPermissibleOperatingVoltage: string;
};

export type TUkrmCell10Kv = {
  title: string;
  power: number;
  adjustmentStepsFix: string;
  adjustmentStepsReg: string;
  dimensions: string;
  currentAt6_3kV: number;
  currentAt10_5kV: number;
  weight: number;
};

export type TTypeOfCellCell10Kv =
  (typeof TYPE_OF_CELL_CELL_10KV_OPTIONS)[keyof typeof TYPE_OF_CELL_CELL_10KV_OPTIONS];

export type TTypeOfSwitchingDeviceCell10Kv =
  (typeof TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS)[keyof typeof TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS];

export type TTypeOfMeasuringCurrentTransformersDeviceOptionsCell10Kv =
  (typeof TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS)[keyof typeof TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS];

export type TCell10KvData = {
  typeOfCell?: TTypeOfCellCell10Kv;
  typeOfSwitchingDevice?: TTypeOfSwitchingDeviceCell10Kv;
  switchingDevice?: TSwitchingDeviceCell10Kv;

  typeOfMeasuringCurrentTransformersDevice?: TTypeOfMeasuringCurrentTransformersDeviceOptionsCell10Kv;
  measuringCurrentTransformersDevice?: TMeasuringCurrentTransformersDeviceCell10Kv;
  typeOfMicroprocessorDevice?: IsThereDevice;
  mpdaa?: TmpdaaCell10Kv;
  typeOfOpnDevice?: IsThereDevice;
  opn?: TOpnCell10Kv;
  tsn?: TTsnCell10Kv;
  tn?: TTnCell10Kv;
  ukrm?: TUkrmCell10Kv;
};

// export type NonPrimitiveKeys =

export type TNonPrimitiveKeysTCell10KvDataValues = Exclude<
  NonPrimitiveKeys<TCell10KvData>,
  undefined
>;
export type TNonPrimitiveKeysTCell10KvDataKeys = Exclude<
  NonPrimitiveKeys<TCell10KvData>[keyof TCell10KvData],
  undefined
>;
