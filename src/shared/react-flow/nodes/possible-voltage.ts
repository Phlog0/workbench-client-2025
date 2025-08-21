export const VOLTAGE_OPTIONS = {
  "10": "10",
  "04": "04",
  "35": "35",
} as const;
export type TPossibleVoltage = (typeof VOLTAGE_OPTIONS)[keyof typeof VOLTAGE_OPTIONS];
