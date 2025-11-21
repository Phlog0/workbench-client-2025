export const POWER_TRANSFORMER_3510KV_KEY_1 = "parameters";
export const POWER_TRANSFORMER_3510KV_LABEL = "Параметры трансформатора нарпжения 35 \\ 10 кВ";
export const POWER_TRANSFORMER_3510KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Модель",
    keyOne: POWER_TRANSFORMER_3510KV_KEY_1,
    keyTwo: "model",
    inputId: `${POWER_TRANSFORMER_3510KV_KEY_1}ModelPt3510`,
  },
  {
    inputType: "text",
    label: "Тип",
    keyOne: POWER_TRANSFORMER_3510KV_KEY_1,
    keyTwo: "type",
    inputId: `${POWER_TRANSFORMER_3510KV_KEY_1}TypePt3510`,
  },
  {
    inputType: "number",
    label: "Номинальный ток (А)",
    keyOne: POWER_TRANSFORMER_3510KV_KEY_1,
    keyTwo: "ratedCurrent",
    inputId: `${POWER_TRANSFORMER_3510KV_KEY_1}ratedCurrentPt3510`,
  },
  {
    inputType: "string",
    label: "Напряжение, кВ (ВН/НН)",
    keyOne: POWER_TRANSFORMER_3510KV_KEY_1,
    keyTwo: "voltage",
    inputId: `${POWER_TRANSFORMER_3510KV_KEY_1}VoltagePt3510`,
  },
  {
    inputType: "string",
    label: "Класс точности",
    keyOne: POWER_TRANSFORMER_3510KV_KEY_1,
    keyTwo: "accuracyClass",
    inputId: `${POWER_TRANSFORMER_3510KV_KEY_1}AccuracyClassPt3510`,
  },
  {
    inputType: "number",
    label: "Номинальная нагрузка (ВА)",
    keyOne: POWER_TRANSFORMER_3510KV_KEY_1,
    keyTwo: "ratedLoad",
    inputId: `${POWER_TRANSFORMER_3510KV_KEY_1}RatedLoadPt3510`,
  },
  {
    inputType: "number",
    label: "Динамическая стойкость (кА)",
    keyOne: POWER_TRANSFORMER_3510KV_KEY_1,
    keyTwo: "dynamicStability",
    inputId: `${POWER_TRANSFORMER_3510KV_KEY_1}DynamicStabilityPt3510`,
  },
  {
    inputType: "number",
    label: "Термическая стойкость (кА×с)",
    keyOne: POWER_TRANSFORMER_3510KV_KEY_1,
    keyTwo: "thermalStability",
    inputId: `${POWER_TRANSFORMER_3510KV_KEY_1}ThermalStabilityPt3510`,
  },
] as const;
