export const fetchAPI = 'http://localhost:3000/api/'



export const TYPE_OF_CELL_OPTIONS = ["ТСН (Трансформатор собсвтенных нужд)",
    "Шинный мост",
    "СВ (Секционный выключатель)",
    "СР (Секционный разъединитель)",
    "Шинный переход",
    "Ввод",
    "Отходящая линия",
    "УКРМ (Устройство компенсации реактивной мощности)",
    "ТН (Трансформатор напряжения)",] as const


export type TypeOfCellOptions = typeof TYPE_OF_CELL_OPTIONS[number]