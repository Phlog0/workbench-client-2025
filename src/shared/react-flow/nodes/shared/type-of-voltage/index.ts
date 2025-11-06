// ГЛОБАЛЬНАЯ ТЕМА
export const VOLTAGE_MAP = {
  "04": "04 кВ",
  "06": "06 кВ",
  "10": "10 кВ",
  "35": "35 кВ",
} as const;

export const TYPE_OF_VOLTAGE_OPTIONS = Object.values(VOLTAGE_MAP);

export const TYPE_OF_VOLTAGE_06KV_10KV_OPTIONS = [VOLTAGE_MAP["06"], VOLTAGE_MAP["10"]] as const;

export type TTypeOfVoltage0610Kv = (typeof TYPE_OF_VOLTAGE_06KV_10KV_OPTIONS)[number];

export const POSSIBLE_VOLTAGE_DIGITS = {
  "04": "04",
  "06": "06",
  "10": "10",
  "35": "35",
} as const;

// Поле для cell10Kv и section10Kv
export const TYPE_OF_VOLTAGE_06KV_10KV_KEY_1 = "typeOfVoltage";
export const TYPE_OF_VOLTAGE_06KV_10KV_LABEL = "Напряжение";
export type ElectricityVoltage = keyof typeof POSSIBLE_VOLTAGE_DIGITS;
