import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const TSN_DEVICE_CELL_35KV_KEY_1 = "tsn";
export const TSN_DEVICE_CELL_35KV_LABEL = "ТСН (Трансформатор собсвтенных нужд)";
export const TSN_DEVICE_CELL_35KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: TSN_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "type",
    inputId: `${TSN_DEVICE_CELL_35KV_KEY_1}TypeCell${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: TSN_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "title",
    inputId: `${TSN_DEVICE_CELL_35KV_KEY_1}TitleCell${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: TSN_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${TSN_DEVICE_CELL_35KV_KEY_1}ManufacturerCell${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "number",
    label: "Номинальная мощность (кВА)",
    keyOne: TSN_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "ratedPower",
    inputId: `${TSN_DEVICE_CELL_35KV_KEY_1}RatedPowerCell${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
] as const;
