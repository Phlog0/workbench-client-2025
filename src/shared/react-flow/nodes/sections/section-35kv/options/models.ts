import { POSSIBLE_VOLTAGE_DIGITS } from "@/shared/react-flow/nodes/shared/type-of-voltage";

export const MODEL_SECTION_35KV_KEY_1 = "model";

export const MODEL_SECTION_35KV_LABEL = "Секция 35 кВ";
export const MODEL_SECTION_35KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Модель",
    keyOne: MODEL_SECTION_35KV_KEY_1,
    keyTwo: "model",
    inputId: `${MODEL_SECTION_35KV_KEY_1}Model${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: MODEL_SECTION_35KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${MODEL_SECTION_35KV_KEY_1}Manufacturer${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Материал",
    keyOne: MODEL_SECTION_35KV_KEY_1,
    keyTwo: "material",
    inputId: `${MODEL_SECTION_35KV_KEY_1}Material${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "number",
    label: "Сечение (мм^2)",
    keyOne: MODEL_SECTION_35KV_KEY_1,
    keyTwo: "crossSection",
    inputId: `${MODEL_SECTION_35KV_KEY_1}CrossSection${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "number",
    label: "Допустимый ток",
    keyOne: MODEL_SECTION_35KV_KEY_1,
    keyTwo: "permissibleCurrent",
    inputId: `${MODEL_SECTION_35KV_KEY_1}PermissibleCurrent${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Тип изоляции",
    keyOne: MODEL_SECTION_35KV_KEY_1,
    keyTwo: "typeOfIsolation",
    inputId: `${MODEL_SECTION_35KV_KEY_1}TypeOfIsolation${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
  {
    inputType: "text",
    label: "Климатическое исполнение",
    keyOne: MODEL_SECTION_35KV_KEY_1,
    keyTwo: "climaticVersion",
    inputId: `${MODEL_SECTION_35KV_KEY_1}ClimaticVersion${POSSIBLE_VOLTAGE_DIGITS["35"]}`,
  },
] as const;
