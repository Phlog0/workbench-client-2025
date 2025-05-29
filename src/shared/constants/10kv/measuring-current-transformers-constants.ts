export const TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV = [
  "нет",
  "2 Трансформатора тока 2 обмотки",
  "2 Трансформатора тока 3 обмотки",
  "2 Трансформатора тока 4 обмотки",
  "3 Трансформатора тока 2 обмотки",
  "3 Трансформатора тока 3 обмотки",
  "3 Трансформатора тока 4 обмотки",
] as const;

export type TypeOfMeasuringCurrentTransformersDeviceOptions_10KV =
  (typeof TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV)[number];

export const TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV =
  "typeOfMeasuringCurrentTransformersDevice" as const;
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

export const MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV =
  "measuringCurrentTransformersDevice";

export const MEASURING_CURRENT_TRANSFORMERS_DEVICE_LABEL_10KV =
  "ТТ (Измерительные Трансформаторы Тока)";
export const MEASURING_CURRENT_TRANSFORMERS_DEVICE_DATA_10KV = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV,
    keyTwo: "type",
    inputId: `switchingDeviceRType`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV,
    keyTwo: "title",
    inputId: `switchingDeviceRTitle`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV,
    keyTwo: "manufacturer",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}Manufacturer`,
  },
  {
    inputType: "text",
    label: "Коэффициент трансформации",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV,
    keyTwo: "transformationRatio",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}TransformationRatio`,
  },
  {
    inputType: "text",
    label: "Класс точности",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV,
    keyTwo: "accuracyClass",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}AccuracyClass`,
  },
  {
    inputType: "number",
    label: "Односекундный ток термической стойкости, кА",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV,
    keyTwo: "oneSecondThermalCurrent",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}OneSecondThermalCurrent`,
  },
  {
    inputType: "text",
    label: "Вид обслуживания",
    keyOne: MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV,
    keyTwo: "typeOfService",
    inputId: `${MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}TypeOfService`,
  },
] as const;
