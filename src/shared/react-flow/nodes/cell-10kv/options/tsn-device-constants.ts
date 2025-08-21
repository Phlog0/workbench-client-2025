import { VOLTAGE_OPTIONS } from "../../possible-voltage";

export const TSN_DEVICE_CELL_10KV_KEY_1 = "tsn";
export const TSN_DEVICE_CELL_10KV_LABEL = "ТСН (Трансформатор собсвтенных нужд)";
export const TSN_DEVICE_CELL_10KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: TSN_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "type",
    inputId: `${TSN_DEVICE_CELL_10KV_KEY_1}TypeCell${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: TSN_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "title",
    inputId: `${TSN_DEVICE_CELL_10KV_KEY_1}TitleCell${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: TSN_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${TSN_DEVICE_CELL_10KV_KEY_1}ManufacturerCell${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Номинальная мощность (кВА)",
    keyOne: TSN_DEVICE_CELL_10KV_KEY_1,
    keyTwo: "ratedPower",
    inputId: `${TSN_DEVICE_CELL_10KV_KEY_1}RatedPowerCell${VOLTAGE_OPTIONS["10"]}`,
  },
] as const;
