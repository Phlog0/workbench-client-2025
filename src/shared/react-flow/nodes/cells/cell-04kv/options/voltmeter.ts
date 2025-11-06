import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const VOLTMETR_CELL_04KV_KEY_1 = "voltmeter";

export const VOLTMETER_CELL_04KV_LABEL = "Вольтметр";
export const VOLTMETER_CELL_04KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: VOLTMETR_CELL_04KV_KEY_1,
    keyTwo: "type",
    inputId: `${VOLTMETER_CELL_04KV_LABEL}Type${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: VOLTMETR_CELL_04KV_KEY_1,
    keyTwo: "title",
    inputId: `${VOLTMETER_CELL_04KV_LABEL}Title${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: VOLTMETR_CELL_04KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${VOLTMETR_CELL_04KV_KEY_1}Manufacturer${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "text",
    label: "Диапазон измерений (А)",
    keyOne: VOLTMETR_CELL_04KV_KEY_1,
    keyTwo: "measuringRange",
    inputId: `${VOLTMETR_CELL_04KV_KEY_1}MeasuringRange${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "number",
    label: "Класс точности",
    keyOne: VOLTMETR_CELL_04KV_KEY_1,
    keyTwo: "accuracyClass",
    inputId: `${VOLTMETR_CELL_04KV_KEY_1}AccuracyClass${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Степень защиты (IP)",
    keyOne: VOLTMETR_CELL_04KV_KEY_1,
    keyTwo: "ingressProtection",
    inputId: `${VOLTMETR_CELL_04KV_KEY_1}IngressProtection${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Защита от перегрузок",
    keyOne: VOLTMETR_CELL_04KV_KEY_1,
    keyTwo: "overloadProtection",
    inputId: `${VOLTMETR_CELL_04KV_KEY_1}OverloadProtection${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Размеры (мм)",
    keyOne: VOLTMETR_CELL_04KV_KEY_1,
    keyTwo: "measures",
    inputId: `${VOLTMETR_CELL_04KV_KEY_1}Measures${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Монтаж",
    keyOne: VOLTMETR_CELL_04KV_KEY_1,
    keyTwo: "mounting",
    inputId: `${VOLTMETR_CELL_04KV_KEY_1}Mounting${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Интерфейс",
    keyOne: VOLTMETR_CELL_04KV_KEY_1,
    keyTwo: "interface",
    inputId: `${VOLTMETR_CELL_04KV_KEY_1}Interface${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Примечания",
    keyOne: VOLTMETR_CELL_04KV_KEY_1,
    keyTwo: "notes",
    inputId: `${VOLTMETR_CELL_04KV_KEY_1}Notes${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
] as const;
