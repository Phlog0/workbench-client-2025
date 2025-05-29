export const UKRM_DEVICE_KEY_1_10KV = "ukrm";
export const UKRM_DEVICE_LABEL_10KV = "УКРМ";
export const UKRM_DEVICE_DATA_10KV = [
  {
    inputType: "text",
    label: "Наименование",
    keyOne: UKRM_DEVICE_KEY_1_10KV,
    keyTwo: "title",
    inputId: `${UKRM_DEVICE_KEY_1_10KV}Title`,
  },
  {
    inputType: "number",
    label: "Мощность, Квар",
    keyOne: UKRM_DEVICE_KEY_1_10KV,
    keyTwo: "power",
    inputId: `${UKRM_DEVICE_KEY_1_10KV}Power`,
  },
  {
    inputType: "text",
    label: "Шаги регулировки, квар. Фикс.",
    keyOne: UKRM_DEVICE_KEY_1_10KV,
    keyTwo: "adjustmentStepsFix",
    inputId: `${UKRM_DEVICE_KEY_1_10KV}AdjustmentStepsFix`,
  },
  {
    inputType: "text",
    label: "Шаги регулировки, квар. Рег.",
    keyOne: UKRM_DEVICE_KEY_1_10KV,
    keyTwo: "adjustmentStepsReg",
    inputId: `${UKRM_DEVICE_KEY_1_10KV}AdjustmentStepsReg`,
  },
  {
    inputType: "text",
    label: "Габариты**ДхВхГ,мм",
    keyOne: UKRM_DEVICE_KEY_1_10KV,
    keyTwo: "dimensions",
    inputId: `${UKRM_DEVICE_KEY_1_10KV}Dimensions`,
  },
  {
    inputType: "number",
    label: "Ток,А (при U=6.3 кВ)",
    keyOne: UKRM_DEVICE_KEY_1_10KV,
    keyTwo: "currentAt6_3kV",
    inputId: `${UKRM_DEVICE_KEY_1_10KV}CurrentAt6_3kV`,
  },
  {
    inputType: "number",
    label: "Ток,А (при U=10.5 кВ)",
    keyOne: UKRM_DEVICE_KEY_1_10KV,
    keyTwo: "currentAt10_5kV",
    inputId: `${UKRM_DEVICE_KEY_1_10KV}currentAt10_5kV`,
  },
  {
    inputType: "number",
    label: "Масса, кг",
    keyOne: UKRM_DEVICE_KEY_1_10KV,
    keyTwo: "weight",
    inputId: `${UKRM_DEVICE_KEY_1_10KV}Weight`,
  },
] as const;
