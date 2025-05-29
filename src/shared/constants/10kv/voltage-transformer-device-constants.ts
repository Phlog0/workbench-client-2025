export const VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV = "tn";
export const VOLTAGE_TRANSFORMER_DEVICE_LABEL_10KV = "ТН (трансформаторы напряжения)";
export const VOLTAGE_TRANSFORMER_DEVICE_DATA_10KV = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV,
    keyTwo: "type",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}Type`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV,
    keyTwo: "title",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}Title`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV,
    keyTwo: "manufacturer",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}Manufacturer`,
  },
  {
    inputType: "text",
    label: "Номинальная трехфазная мощность первой обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV,
    keyTwo: "ratedThreePhasePowerOfTheFirstWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}RatedThreePhasePowerOfTheFirstWinding`,
  },
  {
    inputType: "text",
    label: "Класс точности первой вторичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV,
    keyTwo: "accuracyClassOfTheFirstSecondaryWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}AccuracyClassOfTheFirstSecondaryWinding`,
  },
  {
    inputType: "text",
    label: "Номинальная трехфазная мощность второй вторичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV,
    keyTwo: "ratedThreePhasePowerOfTheSecondSecondaryWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}RatedThreePhasePowerOfTheSecondSecondaryWinding`,
  },
  {
    inputType: "text",
    label: "Класс точности второй вторичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV,
    keyTwo: "accuracyClassOfTheSecondSecondaryWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}AccuracyClassOfTheSecondSecondaryWinding`,
  },
  {
    inputType: "text",
    label: "Номинальная трехфазная мощность дополнительной вторичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV,
    keyTwo: "ratedThreePhasePowerOfAadditionalSecondaryWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}RatedThreePhasePowerOfAadditionalSecondaryWinding`,
  },
  {
    inputType: "text",
    label: "Класс точности дополнительной вторичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV,
    keyTwo: "accuracyClassOfSecondaryReturnWires",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}AccuracyClassOfSecondaryReturnWires`,
  },
  {
    inputType: "text",
    label: "Номинальное линейное напряжение на выводах первичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV,
    keyTwo: "ratedLineVoltageAtTheTerminalsOfThePrimaryWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}RatedLineVoltageAtTheTerminalsOfThePrimaryWinding`,
  },
] as const;
