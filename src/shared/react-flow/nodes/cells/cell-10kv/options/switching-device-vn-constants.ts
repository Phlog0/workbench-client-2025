import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const SWITCHING_DEVICE_VN_CELL_10KV_KEY_1 = "switchingDevice";
export const SWITCHING_DEVICE_VN_CELL_10KV_PARAM = "switchingDeviceVn";
export const SWITCHING_DEVICE_VN_CELL_10KV_LABEL = "ВН (выключатели нагрузки)";
export const SWITCHING_DEVICE_VN_CELL_10KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "type",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}Type${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "title",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}Title${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}Manufacturer${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальный ток, А",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "ratedCurrent",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}RatedCurrent${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальный ток отключения (кА)",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "ratedBreakingCurrent",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}RatedBreakingCurrent${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальное напряжение (кВ)",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "ratedVoltage",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}RatedVoltage${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "number",
    label: "Количество валов заземления",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "numberOfGroundShafts",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}NumberOfGroundShafts${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Расположение ножей заземления",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "locationOfGroundingBlades",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}LocationOfGroundingBlades${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },

  {
    inputType: "text",
    label: "Расположение привода выключателя",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "switchDriveLocation",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}SwitchDriveLocation${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Расположение привода ножей заземления",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "locationOfTheGroundingBladeDrive",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}LocationOfTheGroundingBladeDrive${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
] as const;
