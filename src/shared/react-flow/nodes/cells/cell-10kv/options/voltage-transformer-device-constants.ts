import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1 = "tn";
export const VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_LABEL = "ТН (трансформаторы напряжения)";
export const VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "type",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1}TypeCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "title",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1}TitleCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1}ManufacturerCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Номинальная трехфазная мощность первой обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "ratedThreePhasePowerOfTheFirstWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1}RatedThreePhasePowerOfTheFirstWindingCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Класс точности первой вторичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "accuracyClassOfTheFirstSecondaryWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1}AccuracyClassOfTheFirstSecondaryWindingCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Номинальная трехфазная мощность второй вторичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "ratedThreePhasePowerOfTheSecondSecondaryWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1}RatedThreePhasePowerOfTheSecondSecondaryWindingCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Класс точности второй вторичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "accuracyClassOfTheSecondSecondaryWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1}AccuracyClassOfTheSecondSecondaryWindingCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Номинальная трехфазная мощность дополнительной вторичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "ratedThreePhasePowerOfAadditionalSecondaryWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1}RatedThreePhasePowerOfAadditionalSecondaryWindingCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Класс точности дополнительной вторичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "accuracyClassOfSecondaryReturnWires",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1}AccuracyClassOfSecondaryReturnWiresCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
  {
    inputType: "text",
    label: "Номинальное линейное напряжение на выводах первичной обмотки",
    keyOne: VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "ratedLineVoltageAtTheTerminalsOfThePrimaryWinding",
    inputId: `${VOLTAGE_TRANSFORMER_DEVICE_CELL_10KV_KEY_1}RatedLineVoltageAtTheTerminalsOfThePrimaryWindingCell${POSSIBLE_VOLTAGE_DIGITS["10"]}`,
  },
] as const;
