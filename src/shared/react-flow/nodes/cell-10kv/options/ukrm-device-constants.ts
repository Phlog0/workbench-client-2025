import { VOLTAGE_OPTIONS } from "../../possible-voltage";

export const UKRM_DEVICE_CELL_10KV_KEY_1 = "ukrm";
export const UKRM_DEVICE_CELL_10KV_LABEL = "УКРМ";
export const UKRM_DEVICE_CELL_10KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Наименование",
    keyOne: UKRM_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "title",
    inputId: `${UKRM_DEVICE_CELL_10KV_KEY_1}TitleCell${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Мощность, Квар",
    keyOne: UKRM_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "power",
    inputId: `${UKRM_DEVICE_CELL_10KV_KEY_1}PowerCell${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Шаги регулировки, квар. Фикс.",
    keyOne: UKRM_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "adjustmentStepsFix",
    inputId: `${UKRM_DEVICE_CELL_10KV_KEY_1}AdjustmentStepsFixCell${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Шаги регулировки, квар. Рег.",
    keyOne: UKRM_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "adjustmentStepsReg",
    inputId: `${UKRM_DEVICE_CELL_10KV_KEY_1}AdjustmentStepsRegCell${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Габариты**ДхВхГ,мм",
    keyOne: UKRM_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "dimensions",
    inputId: `${UKRM_DEVICE_CELL_10KV_KEY_1}DimensionsCell${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Ток,А (при U=6.3 кВ)",
    keyOne: UKRM_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "currentAt6_3kV",
    inputId: `${UKRM_DEVICE_CELL_10KV_KEY_1}CurrentAt6_3kVCell${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Ток,А (при U=10.5 кВ)",
    keyOne: UKRM_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "currentAt10_5kV",
    inputId: `${UKRM_DEVICE_CELL_10KV_KEY_1}currentAt10_5kVCell${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Масса, кг",
    keyOne: UKRM_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "weight",
    inputId: `${UKRM_DEVICE_CELL_10KV_KEY_1}WeightCell${VOLTAGE_OPTIONS["10"]}`,
  },
] as const;
