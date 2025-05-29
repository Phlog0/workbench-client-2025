export const TSN_DEVICE_KEY_1_10KV = "tsn";
export const TSN_DEVICE_LABEL_10KV = "ТСН (Трансформатор собсвтенных нужд)";
export const TSN_DEVICE_DATA_10KV = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: TSN_DEVICE_KEY_1_10KV,
    keyTwo: "type",
    inputId: `${TSN_DEVICE_KEY_1_10KV}Type`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: TSN_DEVICE_KEY_1_10KV,
    keyTwo: "title",
    inputId: `${TSN_DEVICE_KEY_1_10KV}Title`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: TSN_DEVICE_KEY_1_10KV,
    keyTwo: "manufacturer",
    inputId: `${TSN_DEVICE_KEY_1_10KV}Manufacturer`,
  },
  {
    inputType: "number",
    label: "Номинальная мощность (кВА)",
    keyOne: TSN_DEVICE_KEY_1_10KV,
    keyTwo: "ratedPower",
    inputId: `${TSN_DEVICE_KEY_1_10KV}RatedPower`,
  },
] as const;
