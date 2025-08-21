import { VOLTAGE_OPTIONS } from "../../possible-voltage";

export const TYPE_OF_OPN_DEVICE_CELL_10KV_OPTIONS = ["Нет", "Есть"] as const;

export const TYPE_OF_OPN_DEVICE_CELL_10KV_KEY_1 = "typeOfOpnDevice";
export const TYPE_OF_OPN_DEVICE_CELL_10KV_LABEL = "Есть ОПН";

export const OPN_DEVICE_CELL_10KV_KEY_1 = "opn";
export const OPN_DEVICE_CELL_10KV_LABEL = "ОПН (ограничители перенапряжения)";
export const OPN_DEVICE_CELL_10KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: OPN_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "type",
    inputId: `${OPN_DEVICE_CELL_10KV_KEY_1}Type${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: OPN_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "title",
    inputId: `${OPN_DEVICE_CELL_10KV_KEY_1}Title${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: OPN_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${OPN_DEVICE_CELL_10KV_KEY_1}Manufacturer${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Пропускная способность, А",
    keyOne: OPN_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "throughput",
    inputId: `${OPN_DEVICE_CELL_10KV_KEY_1}Throughput${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальный разрядный ток, А",
    keyOne: OPN_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "ratedDischargeCurrent",
    inputId: `${OPN_DEVICE_CELL_10KV_KEY_1}RatedDischargeCurrent${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Наибольшее длительно допустимое рабочее напряжение, кВ",
    keyOne: OPN_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "maximumContinuousPermissibleOperatingVoltage",
    inputId: `${OPN_DEVICE_CELL_10KV_KEY_1}MaximumContinuousPermissibleOperatingVoltage${VOLTAGE_OPTIONS["10"]}`,
  },
] as const;
