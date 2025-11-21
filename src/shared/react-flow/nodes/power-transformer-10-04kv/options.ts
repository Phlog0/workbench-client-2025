export const POWER_TRANSFORMER_1004KV_KEY_1 = "parameters";
export const POWER_TRANSFORMER_1004KV_LABEL = "Параметры трансформатора нарпжения 10 (6) \\ 04 кВ";
export const POWER_TRANSFORMER_1004KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Модель",
    keyOne: POWER_TRANSFORMER_1004KV_KEY_1,
    keyTwo: "model",
    inputId: `${POWER_TRANSFORMER_1004KV_KEY_1}ModelPt1004`,
  },
  {
    inputType: "text",
    label: "Тип",
    keyOne: POWER_TRANSFORMER_1004KV_KEY_1,
    keyTwo: "type",
    inputId: `${POWER_TRANSFORMER_1004KV_KEY_1}TypePt1004`,
  },
  {
    inputType: "number",
    label: "Мощность (кВА)",
    keyOne: POWER_TRANSFORMER_1004KV_KEY_1,
    keyTwo: "power",
    inputId: `${POWER_TRANSFORMER_1004KV_KEY_1}PowerPt1004`,
  },
  {
    inputType: "number",
    label: "Напряжение, кВ (ВН/НН)",
    keyOne: POWER_TRANSFORMER_1004KV_KEY_1,
    keyTwo: "voltage",
    inputId: `${POWER_TRANSFORMER_1004KV_KEY_1}VoltagePt1004`,
  },
  {
    inputType: "text",
    label: "Потери, Вт (хх/кз)",
    keyOne: POWER_TRANSFORMER_1004KV_KEY_1,
    keyTwo: "losses",
    inputId: `${POWER_TRANSFORMER_1004KV_KEY_1}lossesPt1004`,
  },
  {
    inputType: "number",
    label: "Ток х.х. (%)",
    keyOne: POWER_TRANSFORMER_1004KV_KEY_1,
    keyTwo: "noLoadCurrent",
    inputId: `${POWER_TRANSFORMER_1004KV_KEY_1}NoLoadCurrentPt1004`,
  },
  {
    inputType: "number",
    label: "Напряжение к.з. (%)",
    keyOne: POWER_TRANSFORMER_1004KV_KEY_1,
    keyTwo: "shortCircuitVoltage",
    inputId: `${POWER_TRANSFORMER_1004KV_KEY_1}ShortCircuitVoltagePt1004`,
  },
  {
    inputType: "text",
    label: "Схема соединения",
    keyOne: POWER_TRANSFORMER_1004KV_KEY_1,
    keyTwo: "connectionType",
    inputId: `${POWER_TRANSFORMER_1004KV_KEY_1}ConnectionTypePt1004`,
  },
] as const;
