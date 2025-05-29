export const TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV = [
  "нет",
  "ВВ (Вакуумные выключатели)",
  "ВН (Выключатели нагрузки)",
  "Р (Разъединители)",
] as const;
export const TYPE_OF_SWITCHING_DEVICE_PARAM_10KV = "typeOfSwitchingDevice";
export const TYPE_OF_SWITCHING_DEVICE_LABEL_10KV = "Тип коммутационного аппарата";
export type TypeOfSwitchingDeviceOptions_10KV =
  (typeof TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV)[number];
