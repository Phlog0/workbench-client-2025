import { TCell10Kv, TSection10Kv } from "./react-flow-node-types";

export type TSwitchingDeviceVV = {
  typeOfDevice: "VV";
  type?: string;
  title?: string;
  manufacturer?: string;
  ratedCurrent?: number;
  ratedBreakingCurrent?: number;
  ratedVoltage?: number;
};
export type TSwitchingDeviceVN = {
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
export type TSwitchingDeviceR = {
  typeOfDevice: "R";
  type?: string;
  title?: string;
  manufacturer?: string;
  ratedCurrent?: number;
  thermalCurrent?: number;
  ratedVoltage?: number;
};

export type SwitchingDevice = TSwitchingDeviceVV | TSwitchingDeviceVN | TSwitchingDeviceR;

export type TTsn = {
  type?: string;
  title?: string;
  manufacturer?: string;
  ratedPower?: string;
};
export type TTn = {
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
export type TMeasuringCurrentTransformersDevice = {
  type: string;
  title: string;
  manufacturer: string;
  transformationRatio: string;
  accuracyClass: string;
  oneSecondThermalCurrent: string;
  typeOfService: string;
};
export type Tmpdaa = {
  type: string;
  title: string;
  manufacturer: string;
};

export type TOpn = {
  type: string;
  title: string;
  manufacturer: string;
  ratedOperatingVoltage: string;
  throughput: string;
  ratedDischargeCurrent: string;
  maximumContinuousPermissibleOperatingVoltage: string;
};

export type TUkrm = {
  title: string;
  power: number;
  adjustmentStepsFix: string;
  adjustmentStepsReg: string;
  dimensions: string;
  currentAt6_3kV: number;
  currentAt10_5kV: number;
  weight: number;
};

export type PossiblePropertyValues = string | number | boolean | undefined;
