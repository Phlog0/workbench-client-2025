import { IsThereDevice, TNonPrimitiveKeys } from "../../../shared";
import { TPrimitiveKeys } from "../../../shared/primitive-keys";
import { TTypeOfVoltage0610Kv } from "../../../shared/type-of-voltage";
import {
  RATED_CURRENT_OF_THE_MAIN_CIRCUITS_OPTIONS,
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

export type TOpnCell10Kv = Partial<{
  type: string;
  title: string;
  manufacturer: string;
  ratedOperatingVoltage: string;
  throughput: string;
  ratedDischargeCurrent: string;
  maximumContinuousPermissibleOperatingVoltage: string;
}>;

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

// Ячейка Ввод
export type TRatedCurrentOfTheMainCircuitsOptions =
  (typeof RATED_CURRENT_OF_THE_MAIN_CIRCUITS_OPTIONS)[number];
export type TCell10KvData = {
  // U_ном — номинальное напряжение (кВ). Для стороны 10 кВ = 10 кВ.
  typeOfVoltage: TTypeOfVoltage0610Kv;

  // I_ном = S_нагр / (√3 * U_ном) S_нагр — полная мощность нагрузки (кВА), например, мощность трансформатора 10/0.4 кВ.
  ratedCurrent?: number;
  sPower?: number;
  //для типа "ввод"
  ratedCurrentOfTheMainCircuits?: TRatedCurrentOfTheMainCircuitsOptions;
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

export type TNonPrimitiveDataKeysTCell10Kv = TNonPrimitiveKeys<TCell10KvData>;
export type TPrimitiveDataKeysTCell10Kv = TPrimitiveKeys<TCell10KvData>;
