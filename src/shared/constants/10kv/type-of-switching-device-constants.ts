export const TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV = {
  no: "Нет",
  vv: "ВВ (Вакуумные выключатели)",
  vn: "ВН (Выключатели нагрузки)",
  r: "Р (Разъединители)",
} as const;

export type SwitchingDeviceValue_10Kv =
  (typeof TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV)[keyof typeof TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV];
export const TYPE_OF_SWITCHING_DEVICE_PARAM_10KV = "typeOfSwitchingDevice";
export const TYPE_OF_SWITCHING_DEVICE_LABEL_10KV = "Тип коммутационного аппарата";
