export const SWITCHING_DEVICE_VN_KEY_1_10KV = "switchingDeviceVn";
export const SWITCHING_DEVICE_VN_LABEL_10KV = "ВН (выключатели нагрузки)";
export const SWITCHING_DEVICE_VN_DATA_10KV = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: SWITCHING_DEVICE_VN_KEY_1_10KV,
    keyTwo: "type",
    inputId: `${SWITCHING_DEVICE_VN_KEY_1_10KV}Type`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: SWITCHING_DEVICE_VN_KEY_1_10KV,
    keyTwo: "title",
    inputId: `${SWITCHING_DEVICE_VN_KEY_1_10KV}Title`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: SWITCHING_DEVICE_VN_KEY_1_10KV,
    keyTwo: "manufacturer",
    inputId: `${SWITCHING_DEVICE_VN_KEY_1_10KV}Manufacturer`,
  },
  {
    inputType: "number",
    label: "Номинальный ток, А",
    keyOne: SWITCHING_DEVICE_VN_KEY_1_10KV,
    keyTwo: "ratedCurrent",
    inputId: `${SWITCHING_DEVICE_VN_KEY_1_10KV}RatedCurrent`,
  },
  {
    inputType: "number",
    label: "Номинальный ток отключения (кА)",
    keyOne: SWITCHING_DEVICE_VN_KEY_1_10KV,
    keyTwo: "ratedBreakingCurrent",
    inputId: `${SWITCHING_DEVICE_VN_KEY_1_10KV}RatedBreakingCurrent`,
  },
  {
    inputType: "number",
    label: "Номинальное напряжение (кВ)",
    keyOne: SWITCHING_DEVICE_VN_KEY_1_10KV,
    keyTwo: "ratedVoltage",
    inputId: `${SWITCHING_DEVICE_VN_KEY_1_10KV}RatedVoltage`,
  },
  {
    inputType: "number",
    label: "Количество валов заземления",
    keyOne: SWITCHING_DEVICE_VN_KEY_1_10KV,
    keyTwo: "numberOfGroundShafts",
    inputId: `${SWITCHING_DEVICE_VN_KEY_1_10KV}NumberOfGroundShafts`,
  },
  {
    inputType: "text",
    label: "Расположение ножей заземления",
    keyOne: SWITCHING_DEVICE_VN_KEY_1_10KV,
    keyTwo: "locationOfGroundingBlades",
    inputId: `${SWITCHING_DEVICE_VN_KEY_1_10KV}LocationOfGroundingBlades`,
  },

  {
    inputType: "text",
    label: "Расположение привода выключателя",
    keyOne: SWITCHING_DEVICE_VN_KEY_1_10KV,
    keyTwo: "switchDriveLocation",
    inputId: `${SWITCHING_DEVICE_VN_KEY_1_10KV}SwitchDriveLocation`,
  },
  {
    inputType: "text",
    label: "Расположение привода ножей заземления",
    keyOne: SWITCHING_DEVICE_VN_KEY_1_10KV,
    keyTwo: "locationOfTheGroundingBladeDrive",
    inputId: `${SWITCHING_DEVICE_VN_KEY_1_10KV}LocationOfTheGroundingBladeDrive`,
  },
] as const;
