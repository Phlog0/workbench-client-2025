import { VOLTAGE_OPTIONS } from "../../possible-voltage";

export const SWITCHING_DEVICE_R_CELL_10KV_KEY_1 = "switchingDevice";
export const SWITCHING_DEVICE_R_CELL_10KV_PARAM = "switchingDeviceR";
export const SWITCHING_DEVICE_R_CELL_10KV_LABEL = "Р (разъединители)";
export const SWITCHING_DEVICE_R_CELL_10KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: SWITCHING_DEVICE_R_CELL_10KV_KEY_1,
    keyTwo: "type",
    inputId: `${SWITCHING_DEVICE_R_CELL_10KV_KEY_1}Type${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: SWITCHING_DEVICE_R_CELL_10KV_KEY_1,
    keyTwo: "title",
    inputId: `${SWITCHING_DEVICE_R_CELL_10KV_KEY_1}Title${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: SWITCHING_DEVICE_R_CELL_10KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${SWITCHING_DEVICE_R_CELL_10KV_KEY_1}Manufacturer${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальный ток, А",
    keyOne: SWITCHING_DEVICE_R_CELL_10KV_KEY_1,
    keyTwo: "ratedCurrent",
    inputId: `${SWITCHING_DEVICE_R_CELL_10KV_KEY_1}RatedCurrent${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Ток термической стойкости (А)",
    keyOne: SWITCHING_DEVICE_R_CELL_10KV_KEY_1,
    keyTwo: "thermalCurrent",
    inputId: `${SWITCHING_DEVICE_R_CELL_10KV_KEY_1}ThermalCurrent${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальное напряжение (кВ)",
    keyOne: SWITCHING_DEVICE_R_CELL_10KV_KEY_1,
    keyTwo: "ratedVoltage",
    inputId: `${SWITCHING_DEVICE_R_CELL_10KV_KEY_1}RatedVoltage${VOLTAGE_OPTIONS["10"]}`,
  },
] as const;
