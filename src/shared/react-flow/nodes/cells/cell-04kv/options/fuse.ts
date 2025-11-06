import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const TYPE_OF_FUSE_CELL_04KV_KEY_1 = "typeOfFuse";
export const TYPE_OF_FUSE_CELL_04KV_LABEL = "Есть предохранитель";
export const TYPE_OF_FUSE_CELL_04KV_OPTIONS = ["Нет", "Есть"];

export const FUSE_CELL_04KV_KEY_1 = "fuse";

export const FUSE_CELL_04KV_LABEL = "Предохранитель";
export const FUSE_CELL_04KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: FUSE_CELL_04KV_KEY_1,
    keyTwo: "type",
    inputId: `${FUSE_CELL_04KV_KEY_1}Type${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: FUSE_CELL_04KV_KEY_1,
    keyTwo: "title",
    inputId: `${FUSE_CELL_04KV_KEY_1}Title${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: FUSE_CELL_04KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${FUSE_CELL_04KV_KEY_1}Manufacturer${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Ном. ток (А)",
    keyOne: FUSE_CELL_04KV_KEY_1,
    keyTwo: "ratedCurrent",
    inputId: `${FUSE_CELL_04KV_KEY_1}ratedCurrent${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Дополнительные функции",
    keyOne: FUSE_CELL_04KV_KEY_1,
    keyTwo: "additionalFunctions",
    inputId: `${FUSE_CELL_04KV_KEY_1}AdditionalFunctions${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
] as const;
