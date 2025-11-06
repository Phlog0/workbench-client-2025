import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const SWITCHING_DEVICE_VV_CELL_10KV_KEY_1 = "switchingDevice";

// Для сетевых запросов
export const SWITCHING_DEVICE_VV_CELL_10KV_PARAM = "switchingDeviceVv";

export const SWITCHING_DEVICE_VV_CELL_10KV_LABEL = "ВВ (вакуумные выключатели)";
export const SWITCHING_DEVICE_VV_CELL_10KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: SWITCHING_DEVICE_VV_CELL_10KV_KEY_1,
    keyTwo: "type",
    inputId: `${SWITCHING_DEVICE_VV_CELL_10KV_KEY_1}TypeCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: SWITCHING_DEVICE_VV_CELL_10KV_KEY_1,
    keyTwo: "title",
    inputId: `${SWITCHING_DEVICE_VV_CELL_10KV_KEY_1}TitleCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: SWITCHING_DEVICE_VV_CELL_10KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${SWITCHING_DEVICE_VV_CELL_10KV_KEY_1}ManufacturerCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальный ток, А",
    keyOne: SWITCHING_DEVICE_VV_CELL_10KV_KEY_1,
    keyTwo: "ratedCurrent",
    inputId: `${SWITCHING_DEVICE_VV_CELL_10KV_KEY_1}RatedCurrentCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальный ток отключения, кА",
    keyOne: SWITCHING_DEVICE_VV_CELL_10KV_KEY_1,
    keyTwo: "ratedBreakingCurrent",
    inputId: `${SWITCHING_DEVICE_VV_CELL_10KV_KEY_1}RatedBreakingCurrentCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальное напряжение, кВ",
    keyOne: SWITCHING_DEVICE_VV_CELL_10KV_KEY_1,
    keyTwo: "ratedVoltage",
    inputId: `${SWITCHING_DEVICE_VV_CELL_10KV_KEY_1}RatedVoltageCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
] as const;
