export const TYPE_OF_CELL_PARAM_10KV = "typeOfCell";
export const TYPE_OF_CELL_LABEL_10KV = "Тип ячейки";
export const TYPE_OF_CELL_OPTIONS_10KV = {
  no: "Не выбрано",
  tsn: "ТСН (Трансформатор собсвтенных нужд)",
  sm: "Шинный мост",
  sv: "СВ (Секционный выключатель)",
  sr: "СР (Секционный разъединитель)",
  sp: "Шинный переход",
  v: "Ввод",
  ol: "Отходящая линия",
  ukrm: "УКРМ (Устройство компенсации реактивной мощности)",
  tn: "ТН (Трансформатор напряжения)",
} as const;

export type TypeOfCellOptions_10KV =
  (typeof TYPE_OF_CELL_OPTIONS_10KV)[keyof typeof TYPE_OF_CELL_OPTIONS_10KV];
