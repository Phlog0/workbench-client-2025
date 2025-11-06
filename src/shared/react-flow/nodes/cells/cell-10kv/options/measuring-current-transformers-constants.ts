import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS = {
  no: "Нет",
  tt2ac: "2 Трансформатора тока 2 обмотки",
  tt3ac: "2 Трансформатора тока 3 обмотки",
  tt4ac: "2 Трансформатора тока 4 обмотки",
  tt2abc: "3 Трансформатора тока 2 обмотки",
  tt3abc: "3 Трансформатора тока 3 обмотки",
  tt4abc: "3 Трансформатора тока 4 обмотки",
} as const;
// export const TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV = {
//   no: "Нет",
//   ac2: "2 Трансформатора тока 2 обмотки",
//   ac3: "2 Трансформатора тока 3 обмотки",
//   ac4: "2 Трансформатора тока 4 обмотки",
//   abc2: "3 Трансформатора тока 2 обмотки",
//   abc3: "3 Трансформатора тока 3 обмотки",
//   abc4: "3 Трансформатора тока 4 обмотки",
// } as const;

export const TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_LABEL =
  "Есть измерительные трансформаторы тока?";
export const TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1 =
  "typeOfMeasuringCurrentTransformersDevice";
// const images = [VerticalLine, TT_2_AC, TT_3_AC, TT_4_AC, TT_2_ABC, TT_3_ABC, TT_4_ABC]
// const images = [VerticalLine, Tt2Abc]

// export let currentImageObject = {};
// isMeasuringCurrentTransformersDeviceOptions.map((item, index) => {
//     currentImageObject[item] = images[index]
// })
// currentImageObject = isMeasuringCurrentTransformersDeviceOptions.reduce((acc, item, index) => {
//     currentImageObject[item] = images[index]
//     return acc;
// }, {})

export const MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1 =
  "measuringCurrentTransformersDevice";

export const MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_LABEL =
  "ТТ (Измерительные Трансформаторы Тока)";
export const MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "type",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1}Type${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "title",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1}Title${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1}Manufacturer${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Коэффициент трансформации",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "transformationRatio",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1}TransformationRatio${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Класс точности",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "accuracyClass",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1}AccuracyClass${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "number",
    label: "Односекундный ток термической стойкости, кА",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "oneSecondThermalCurrent",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1}OneSecondThermalCurrent${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Вид обслуживания",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "typeOfService",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_KEY_1}TypeOfService${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
] as const;
