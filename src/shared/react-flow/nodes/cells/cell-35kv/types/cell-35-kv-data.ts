import { IsThereDevice, TNonPrimitiveKeys } from "../../../shared";
import { TPrimitiveKeys } from "../../../shared/primitive-keys";

import {
  RATED_CURRENT_OF_THE_MAIN_CIRCUITS_OPTIONS,
  TYPE_OF_CELL_CELL_35KV_OPTIONS,
  TYPE_OF_SWITCHING_DEVICE_CELL_35KV_OPTIONS,
} from "../options";

//Поле data: {} - это properties (тип, наименование, ...)
export type TSwitchingDeviceVVCell35Kv = {
  typeOfDevice: "VV";
  type?: string;
  title?: string;
  manufacturer?: string;
  ratedCurrent?: number;
  ratedBreakingCurrent?: number;
  ratedVoltage?: number;
};
export type TSwitchingDeviceVNCell35kv = {
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
export type TSwitchingDeviceRCell35Kv = {
  typeOfDevice: "R";
  type?: string;
  title?: string;
  manufacturer?: string;
  ratedCurrent?: number;
  thermalCurrent?: number;
  ratedVoltage?: number;
};

export type TSwitchingDeviceCell35Kv =
  | TSwitchingDeviceVVCell35Kv
  | TSwitchingDeviceVNCell35kv
  | TSwitchingDeviceRCell35Kv;

export type TTsnCell35Kv = Partial<{
  type: string;
  title: string;
  manufacturer: string;
  ratedPower: string;
}>;
export type TTnCell35Kv = Partial<{
  type: string;
  title: string;
  manufacturer: string;
  ratedThreePhasePowerOfTheFirstWinding: string;
  accuracyClassOfTheFirstSecondaryWinding: string;
  ratedThreePhasePowerOfTheSecondSecondaryWinding: string;
  accuracyClassOfTheSecondSecondaryWinding: string;
  ratedThreePhasePowerOfAadditionalSecondaryWinding: string;
  accuracyClassOfSecondaryReturnWires: string;
  ratedLineVoltageAtTheTerminalsOfThePrimaryWinding: string;
}>;
// export type TMeasuringCurrentTransformersDeviceCell35Kv = Partial<{
//   type: string;
//   title: string;
//   manufacturer: string;
//   transformationRatio: string;
//   accuracyClass: string;
//   oneSecondThermalCurrent: string;
//   typeOfService: string;
// }>;
export type TmpdaaCell35Kv = Partial<{
  type: string;
  title: string;
  manufacturer: string;
}>;

export type TTypeOfCellCell35Kv =
  (typeof TYPE_OF_CELL_CELL_35KV_OPTIONS)[keyof typeof TYPE_OF_CELL_CELL_35KV_OPTIONS];

export type TTypeOfSwitchingDeviceCell35Kv =
  (typeof TYPE_OF_SWITCHING_DEVICE_CELL_35KV_OPTIONS)[keyof typeof TYPE_OF_SWITCHING_DEVICE_CELL_35KV_OPTIONS];

// Ячейка Ввод
export type TRatedCurrentOfTheMainCircuitsOptions =
  (typeof RATED_CURRENT_OF_THE_MAIN_CIRCUITS_OPTIONS)[number];
export type TCell35KvData = {
  //для типа "ввод"
  ratedCurrentOfTheMainCircuits?: TRatedCurrentOfTheMainCircuitsOptions;
  typeOfCell?: TTypeOfCellCell35Kv;
  typeOfSwitchingDevice?: TTypeOfSwitchingDeviceCell35Kv;
  switchingDevice?: TSwitchingDeviceCell35Kv;
  // measuringCurrentTransformersDevice?: TMeasuringCurrentTransformersDeviceCell35Kv;
  typeOfMicroprocessorDevice?: IsThereDevice;
  mpdaa?: TmpdaaCell35Kv;
  // typeOfOpnDevice?: IsThereDevice;
  tsn?: TTsnCell35Kv;
  tn?: TTnCell35Kv;
};

// export type TNonPrimitiveKeysTCell35KVDataValues = Exclude<
//   NonPrimitiveKeys<TCell35KVData>,
//   undefined
// >;
export type TNonPrimitiveDataKeysTCell35Kv = TNonPrimitiveKeys<TCell35KvData>;
export type TPrimitiveDataKeysTCell35Kv = TPrimitiveKeys<TCell35KvData>;
