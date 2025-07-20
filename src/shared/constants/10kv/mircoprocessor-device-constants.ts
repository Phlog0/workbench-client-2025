export const IS_THERE_MICROPROCESSOR_DEVICE_OPTIONS_10KV = ["Нет", "Есть"] as const;
export const IS_THERE_MICROPROCESSOR_DEVICE_KEY_1_10KV = "isThereMicroprocessorDevice";
export const IS_THERE_MICROPROCESSOR_DEVICE_LABEL_10KV =
  "Есть микропроцессорное устройство защиты и автоматики";

export const MICROPROCESSOR_DEVICE_KEY_1_10KV = "mpdaa";
export const MICROPROCESSOR_DEVICE_LABEL_10KV = "Микропроцессорное устройство защиты и автоматики";
export const MICROPROCESSOR_DEVICE_DATA_10KV = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: MICROPROCESSOR_DEVICE_KEY_1_10KV,
    keyTwo: "type",
    inputId: `${MICROPROCESSOR_DEVICE_KEY_1_10KV}Type`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: MICROPROCESSOR_DEVICE_KEY_1_10KV,
    keyTwo: "title",
    inputId: `${MICROPROCESSOR_DEVICE_KEY_1_10KV}Title`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: MICROPROCESSOR_DEVICE_KEY_1_10KV,
    keyTwo: "manufacturer",
    inputId: `${MICROPROCESSOR_DEVICE_KEY_1_10KV}Manufacturer`,
  },
] as const;
