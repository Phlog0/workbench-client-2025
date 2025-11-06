import { POSSIBLE_VOLTAGE_DIGITS } from "../../../shared/type-of-voltage";

export const TYPE_OF_MICROPROCESSOR_DEVICE_CELL_35KV_OPTIONS = ["Нет", "Есть"] as const;
export const TYPE_OF_MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1 = "typeOfMicroprocessorDevice";
export const TYPE_OF_MICROPROCESSOR_DEVICE_CELL_35KV_LABEL =
  "Есть микропроцессорное устройство защиты и автоматики";

export const MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1 = "mpdaa";
export const MICROPROCESSOR_DEVICE_CELL_35KV_LABEL =
  "Микропроцессорное устройство защиты и автоматики";
export const MICROPROCESSOR_DEVICE_CELL_35KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "type",
    inputId: `${MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1}Type${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "title",
    inputId: `${MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1}Title${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${MICROPROCESSOR_DEVICE_CELL_35KV_KEY_1}Manufacturer${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
] as const;
