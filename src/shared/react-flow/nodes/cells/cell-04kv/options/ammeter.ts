import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const AMMETER_CELL_04KV_KEY_1 = "ammeter";

export const AMMETER_CELL_04KV_LABEL = "Амперметр";
export const AMMETER_CELL_04KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: AMMETER_CELL_04KV_KEY_1,
    keyTwo: "type",
    inputId: `${AMMETER_CELL_04KV_KEY_1}Type${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: AMMETER_CELL_04KV_KEY_1,
    keyTwo: "title",
    inputId: `${AMMETER_CELL_04KV_KEY_1}Title${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: AMMETER_CELL_04KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${AMMETER_CELL_04KV_KEY_1}Manufacturer${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "text",
    label: "Диапазон измерений (А)",
    keyOne: AMMETER_CELL_04KV_KEY_1,
    keyTwo: "measuringRange",
    inputId: `${AMMETER_CELL_04KV_KEY_1}MeasuringRange${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "number",
    label: "Класс точности",
    keyOne: AMMETER_CELL_04KV_KEY_1,
    keyTwo: "accuracyClass",
    inputId: `${AMMETER_CELL_04KV_KEY_1}AccuracyClass${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Степень защиты (IP)",
    keyOne: AMMETER_CELL_04KV_KEY_1,
    keyTwo: "ingressProtection",
    inputId: `${AMMETER_CELL_04KV_KEY_1}IngressProtection${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Защита от перегрузок",
    keyOne: AMMETER_CELL_04KV_KEY_1,
    keyTwo: "overloadProtection",
    inputId: `${AMMETER_CELL_04KV_KEY_1}OverloadProtection${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Размеры (мм)",
    keyOne: AMMETER_CELL_04KV_KEY_1,
    keyTwo: "measures",
    inputId: `${AMMETER_CELL_04KV_KEY_1}Measures${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Монтаж",
    keyOne: AMMETER_CELL_04KV_KEY_1,
    keyTwo: "mounting",
    inputId: `${AMMETER_CELL_04KV_KEY_1}Mounting${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Интерфейс",
    keyOne: AMMETER_CELL_04KV_KEY_1,
    keyTwo: "interface",
    inputId: `${AMMETER_CELL_04KV_KEY_1}Interface${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Примечания",
    keyOne: AMMETER_CELL_04KV_KEY_1,
    keyTwo: "notes",
    inputId: `${AMMETER_CELL_04KV_KEY_1}Notes${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
] as const;
