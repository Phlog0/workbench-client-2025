export const TYPE_OF_CELL_PARAM_10KV = "typeOfCell";
export const TYPE_OF_CELL_LABEL_10KV = "Тип ячейки";
export const TYPE_OF_CELL_OPTIONS_10KV = [
  "ТСН (Трансформатор собсвтенных нужд)",
  "Шинный мост",
  "СВ (Секционный выключатель)",
  "СР (Секционный разъединитель)",
  "Шинный переход",
  "Ввод",
  "Отходящая линия",
  "УКРМ (Устройство компенсации реактивной мощности)",
  "ТН (Трансформатор напряжения)",
] as const;

export type TypeOfCellOptions_10KV = (typeof TYPE_OF_CELL_OPTIONS_10KV)[number];
