import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const SWITCHING_DEVICE_R_CELL_35KV_KEY_1 = "switchingDevice";
export const SWITCHING_DEVICE_R_CELL_35KV_PARAM = "switchingDeviceR";
export const SWITCHING_DEVICE_R_CELL_35KV_LABEL = "Р (разъединители)";
export const SWITCHING_DEVICE_R_CELL_35KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: SWITCHING_DEVICE_R_CELL_35KV_KEY_1,
    keyTwo: "type",
    inputId: `${SWITCHING_DEVICE_R_CELL_35KV_KEY_1}Type${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: SWITCHING_DEVICE_R_CELL_35KV_KEY_1,
    keyTwo: "title",
    inputId: `${SWITCHING_DEVICE_R_CELL_35KV_KEY_1}Title${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: SWITCHING_DEVICE_R_CELL_35KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${SWITCHING_DEVICE_R_CELL_35KV_KEY_1}Manufacturer${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "number",
    label: "Номинальный ток, А",
    keyOne: SWITCHING_DEVICE_R_CELL_35KV_KEY_1,
    keyTwo: "ratedCurrent",
    inputId: `${SWITCHING_DEVICE_R_CELL_35KV_KEY_1}RatedCurrent${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "number",
    label: "Ток термической стойкости (А)",
    keyOne: SWITCHING_DEVICE_R_CELL_35KV_KEY_1,
    keyTwo: "thermalCurrent",
    inputId: `${SWITCHING_DEVICE_R_CELL_35KV_KEY_1}ThermalCurrent${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "number",
    label: "Номинальное напряжение (кВ)",
    keyOne: SWITCHING_DEVICE_R_CELL_35KV_KEY_1,
    keyTwo: "ratedVoltage",
    inputId: `${SWITCHING_DEVICE_R_CELL_35KV_KEY_1}RatedVoltage${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
] as const;
