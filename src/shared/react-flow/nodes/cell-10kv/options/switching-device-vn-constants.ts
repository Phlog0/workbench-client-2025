import { VOLTAGE_OPTIONS } from "../../possible-voltage";

export const SWITCHING_DEVICE_VN_CELL_10KV_KEY_1 = "switchingDevice";
export const SWITCHING_DEVICE_VN_CELL_10KV_PARAM = "switchingDeviceVn";
export const SWITCHING_DEVICE_VN_CELL_10KV_LABEL = "ВН (выключатели нагрузки)";
export const SWITCHING_DEVICE_VN_CELL_10KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "type",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}Type${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "title",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}Title${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}Manufacturer${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальный ток, А",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "ratedCurrent",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}RatedCurrent${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальный ток отключения (кА)",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "ratedBreakingCurrent",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}RatedBreakingCurrent${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальное напряжение (кВ)",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "ratedVoltage",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}RatedVoltage${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Количество валов заземления",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "numberOfGroundShafts",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}NumberOfGroundShafts${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Расположение ножей заземления",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "locationOfGroundingBlades",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}LocationOfGroundingBlades${VOLTAGE_OPTIONS["10"]}`,
  },

  {
    inputType: "text",
    label: "Расположение привода выключателя",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "switchDriveLocation",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}SwitchDriveLocation${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Расположение привода ножей заземления",
    keyOne: SWITCHING_DEVICE_VN_CELL_10KV_KEY_1,
    keyTwo: "locationOfTheGroundingBladeDrive",
    inputId: `${SWITCHING_DEVICE_VN_CELL_10KV_KEY_1}LocationOfTheGroundingBladeDrive${VOLTAGE_OPTIONS["10"]}`,
  },
] as const;
