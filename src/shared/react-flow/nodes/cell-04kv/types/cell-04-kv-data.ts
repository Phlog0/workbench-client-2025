//Поле data: {} - это properties (тип, наименование, ...)

import { IsThereDevice, NonPrimitiveKeys } from "../..";
import {
  TYPE_OF_CELL_CELL_04KV_OPTIONS,
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_OPTIONS,
} from "../options";

export type TypeOfCellOptionsCell04Kv = (typeof TYPE_OF_CELL_CELL_04KV_OPTIONS)[number];

export type TMeasuringCurrentTransformersDeviceCell04Kv = Partial<{
  type: string;
  title: string;
  manufacturer: string;
  ratedCurrent: number;
  accuracyClass: string;
  transformationRatio: string;
  power: number;
  ingressProtection: string;
  mounting: string;
  applications: string;
}>;
export type TAmmeterCell04Kv = Partial<{
  type: string;
  title: string;
  manufacturer: string;
  measuringRange: string;
  accuracyClass: string;
  ingressProtection: string;
  overloadProtection: string;
  measures: string;
  mounting: string;
  interface: string;
  notes: string;
}>;
export type TVoltmeterCell04Kv = Partial<{
  type: string;
  title: string;
  manufacturer: string;
  measuringRange: string;
  accuracyClass: string;
  ingressProtection: string;
  overloadProtection: string;
  measures: string;
  mounting: string;
  interface: string;
  notes: string;
}>;
export type TSwitchCell04Kv = Partial<{
  // РУБИЛЬНИК 04 кВ
  type: string;
  title: string;
  manufacturer: string;
  ratedCurrent: string;
  additionalFunctions: string;
}>;
export type TFuseCell04Kv = Partial<{
  // Предохранитель 04 кВ
  type: string;
  title: string;
  manufacturer: string;
  ratedCurrent: string;
  additionalFunctions: string;
}>;

export type TTypeOfMeasuringCurrentTransformersDeviceCell04Kv =
  (typeof TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_OPTIONS)[keyof typeof TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_OPTIONS];

export type TCell04KvData = Partial<{
  typeOfCell: TypeOfCellOptionsCell04Kv;
  typeOfMeasuringCurrentTransformersDevice: TTypeOfMeasuringCurrentTransformersDeviceCell04Kv;
  measuringCurrentTransformersDevice: TMeasuringCurrentTransformersDeviceCell04Kv;
  typeOfFuse: IsThereDevice;
  fuse: TFuseCell04Kv;
  switch: TSwitchCell04Kv;
  voltmeter: TVoltmeterCell04Kv;
  ammeter: TAmmeterCell04Kv;
}>;

export type TNonPrimitiveKeysTCell04KvDataValues = Exclude<
  NonPrimitiveKeys<TCell04KvData>,
  undefined
>;
export type TNonPrimitiveKeysTCell04KvDataKeys = Exclude<
  NonPrimitiveKeys<TCell04KvData>[keyof TCell04KvData],
  undefined
>;
