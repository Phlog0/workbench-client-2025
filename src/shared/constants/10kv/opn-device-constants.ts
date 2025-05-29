export const IS_THERE_OPN_DEVICE_OPTIONS_10KV = ["нет", "есть"] as const;

export const IS_THERE_OPN_KEY_1_10KV = "isThereOpnDevice";
export const IS_THERE_OPN_LABEL_10KV = "Есть ОПН";

export const OPN_DEVICE_KEY_1_10KV = "opn";
export const OPN_DEVICE_LABEL_10KV = "ОПН (ограничители перенапряжения)";
export const OPN_DEVICE_DATA_10KV = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: OPN_DEVICE_KEY_1_10KV,
    keyTwo: "type",
    inputId: `${OPN_DEVICE_KEY_1_10KV}Type`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: OPN_DEVICE_KEY_1_10KV,
    keyTwo: "title",
    inputId: `${OPN_DEVICE_KEY_1_10KV}Title`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: OPN_DEVICE_KEY_1_10KV,
    keyTwo: "manufacturer",
    inputId: `${OPN_DEVICE_KEY_1_10KV}Manufacturer`,
  },
  {
    inputType: "number",
    label: "Пропускная способность, А",
    keyOne: OPN_DEVICE_KEY_1_10KV,
    keyTwo: "throughput",
    inputId: `${OPN_DEVICE_KEY_1_10KV}Throughput`,
  },
  {
    inputType: "number",
    label: "Номинальный разрядный ток, А",
    keyOne: OPN_DEVICE_KEY_1_10KV,
    keyTwo: "ratedDischargeCurrent",
    inputId: `${OPN_DEVICE_KEY_1_10KV}RatedDischargeCurrent`,
  },
  {
    inputType: "number",
    label: "Наибольшее длительно допустимое рабочее напряжение, кВ",
    keyOne: OPN_DEVICE_KEY_1_10KV,
    keyTwo: "maximumContinuousPermissibleOperatingVoltage",
    inputId: `${OPN_DEVICE_KEY_1_10KV}MaximumContinuousPermissibleOperatingVoltage`,
  },
] as const;
