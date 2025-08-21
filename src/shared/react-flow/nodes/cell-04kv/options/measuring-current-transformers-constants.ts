import { VOLTAGE_OPTIONS } from "../../possible-voltage";

export const TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_LABEL =
  "Есть измерительные трансформаторы тока?";

export const TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_OPTIONS = {
  no: "Нет",
  tt1abc: "3 Трансформатора тока",
  tt1abcdef: "6 Трансформаторов тока",
} as const;

// export const TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_04KV = {
//   no: "Нет",
//   ac2: "2 Трансформатора тока 2 обмотки",
//   ac3: "2 Трансформатора тока 3 обмотки",
//   ac4: "2 Трансформатора тока 4 обмотки",
//   abc2: "3 Трансформатора тока 2 обмотки",
//   abc3: "3 Трансформатора тока 3 обмотки",
//   abc4: "3 Трансформатора тока 4 обмотки",
// } as const;

export const TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1 =
  "typeOfMeasuringCurrentTransformersDevice";

export const MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1 =
  "measuringCurrentTransformersDevice";

export const MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_LABEL =
  "Измерительные Трансформаторы Тока";
export const MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1,
    keyTwo: "type",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1}Type${VOLTAGE_OPTIONS["04"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1,
    keyTwo: "title",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1}Title${VOLTAGE_OPTIONS["04"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1}Manufacturer${VOLTAGE_OPTIONS["04"]}`,
  },
  {
    inputType: "text",
    label: "Коэффициент трансформации",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1,
    keyTwo: "transformationRatio",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1}TransformationRatio${VOLTAGE_OPTIONS["04"]}`,
  },
  {
    inputType: "text",
    label: "Класс точности",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1,
    keyTwo: "accuracyClass",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1}AccuracyClass${VOLTAGE_OPTIONS["04"]}`,
  },
  {
    inputType: "text",
    label: "Ном. ток (А)",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1,
    keyTwo: "ratedCurrent",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1}RatedCurrent${VOLTAGE_OPTIONS["04"]}`,
  },
  {
    inputType: "number",
    label: "Мощность (ВА)",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1,
    keyTwo: "power",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1}Power${VOLTAGE_OPTIONS["04"]}`,
  },
  {
    inputType: "string",
    label: "Степень защиты (IP)",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1,
    keyTwo: "ingressProtection",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1}IngressProtection${VOLTAGE_OPTIONS["04"]}`,
  },
  {
    inputType: "string",
    label: "Монтаж",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1,
    keyTwo: "mounting",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1}Mounting${VOLTAGE_OPTIONS["04"]}`,
  },
  {
    inputType: "string",
    label: "Применение",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1,
    keyTwo: "applications",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_04KV_KEY_1}Applications${VOLTAGE_OPTIONS["04"]}`,
  },
] as const;
