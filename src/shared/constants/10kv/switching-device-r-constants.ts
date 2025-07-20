export const SWITCHING_DEVICE_R_KEY_1_10KV = "switchingDevice";
export const SWITCHING_DEVICE_R_LABEL_10KV = "Р (разъединители)";
export const SWITCHING_DEVICE_R_DATA_10KV = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: SWITCHING_DEVICE_R_KEY_1_10KV,
    keyTwo: "type",
    inputId: `${SWITCHING_DEVICE_R_KEY_1_10KV}Type`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: SWITCHING_DEVICE_R_KEY_1_10KV,
    keyTwo: "title",
    inputId: `${SWITCHING_DEVICE_R_KEY_1_10KV}Title`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: SWITCHING_DEVICE_R_KEY_1_10KV,
    keyTwo: "manufacturer",
    inputId: `${SWITCHING_DEVICE_R_KEY_1_10KV}Manufacturer`,
  },
  {
    inputType: "number",
    label: "Номинальный ток, А",
    keyOne: SWITCHING_DEVICE_R_KEY_1_10KV,
    keyTwo: "ratedCurrent",
    inputId: `${SWITCHING_DEVICE_R_KEY_1_10KV}RatedCurrent`,
  },
  {
    inputType: "number",
    label: "Ток термической стойкости (А)",
    keyOne: SWITCHING_DEVICE_R_KEY_1_10KV,
    keyTwo: "thermalCurrent",
    inputId: `${SWITCHING_DEVICE_R_KEY_1_10KV}ThermalCurrent`,
  },
  {
    inputType: "number",
    label: "Номинальное напряжение (кВ)",
    keyOne: SWITCHING_DEVICE_R_KEY_1_10KV,
    keyTwo: "ratedVoltage",
    inputId: `${SWITCHING_DEVICE_R_KEY_1_10KV}RatedVoltage`,
  },
] as const;
