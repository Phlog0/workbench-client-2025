import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const SWITCH_CELL_04KV_KEY_1 = "switch";

export const SWITCH_CELL_04KV_LABEL = "Рубильник";
export const SWITCH_CELL_04KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: SWITCH_CELL_04KV_KEY_1,
    keyTwo: "type",
    inputId: `switchingDeviceRType${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: SWITCH_CELL_04KV_KEY_1,
    keyTwo: "title",
    inputId: `switchingDeviceRTitle${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: SWITCH_CELL_04KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${SWITCH_CELL_04KV_KEY_1}Manufacturer${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
  {
    inputType: "string",
    label: "Ном. ток (А)",
    keyOne: SWITCH_CELL_04KV_KEY_1,
    keyTwo: "ratedCurrent",
    inputId: `${SWITCH_CELL_04KV_KEY_1}ratedCurrent${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },

  {
    inputType: "string",
    label: "Дополнительные функции",
    keyOne: SWITCH_CELL_04KV_KEY_1,
    keyTwo: "additionalFunctions",
    inputId: `${SWITCH_CELL_04KV_KEY_1}AdditionalFunctions${POSSIBLE_VOLTAGE_DIGITS["04"]}`,
  },
] as const;
