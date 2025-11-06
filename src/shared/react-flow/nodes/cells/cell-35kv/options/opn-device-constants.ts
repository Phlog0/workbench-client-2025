import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const TYPE_OF_OPN_DEVICE_CELL_35KV_OPTIONS = ["Нет", "Есть"] as const;

export const TYPE_OF_OPN_DEVICE_CELL_35KV_KEY_1 = "typeOfOpnDevice";
export const TYPE_OF_OPN_DEVICE_CELL_35KV_LABEL = "Есть ОПН";

export const OPN_DEVICE_CELL_35KV_KEY_1 = "opn";
export const OPN_DEVICE_CELL_35KV_LABEL = "ОПН (ограничители перенапряжения)";
export const OPN_DEVICE_CELL_35KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: OPN_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "type",
    inputId: `${OPN_DEVICE_CELL_35KV_KEY_1}Type${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: OPN_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "title",
    inputId: `${OPN_DEVICE_CELL_35KV_KEY_1}Title${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: OPN_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${OPN_DEVICE_CELL_35KV_KEY_1}Manufacturer${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "number",
    label: "Пропускная способность, А",
    keyOne: OPN_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "throughput",
    inputId: `${OPN_DEVICE_CELL_35KV_KEY_1}Throughput${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "number",
    label: "Номинальный разрядный ток, А",
    keyOne: OPN_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "ratedDischargeCurrent",
    inputId: `${OPN_DEVICE_CELL_35KV_KEY_1}RatedDischargeCurrent${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "number",
    label: "Наибольшее длительно допустимое рабочее напряжение, кВ",
    keyOne: OPN_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "maximumContinuousPermissibleOperatingVoltage",
    inputId: `${OPN_DEVICE_CELL_35KV_KEY_1}MaximumContinuousPermissibleOperatingVoltage${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
] as const;
