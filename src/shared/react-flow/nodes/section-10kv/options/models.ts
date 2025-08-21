import { VOLTAGE_OPTIONS } from "../../possible-voltage";

export const MODEL_SECTION_10KV_KEY_1 = "model";

export const MODEL_SECTION_10KV_LABEL = "Секция 10(6)кВ";
export const MODEL_SECTION_10KV_INPUT_RENDER_DATA = [
  {
    inputType: "text",
    label: "Модель",
    keyOne: MODEL_SECTION_10KV_KEY_1,
    keyTwo: "model",
    inputId: `${MODEL_SECTION_10KV_KEY_1}Model${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: MODEL_SECTION_10KV_KEY_1,
    keyTwo: "manufacturer",
    inputId: `${MODEL_SECTION_10KV_KEY_1}Manufacturer${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Материал",
    keyOne: MODEL_SECTION_10KV_KEY_1,
    keyTwo: "material",
    inputId: `${MODEL_SECTION_10KV_KEY_1}Material${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Сечение (мм^2)",
    keyOne: MODEL_SECTION_10KV_KEY_1,
    keyTwo: "crossSection",
    inputId: `${MODEL_SECTION_10KV_KEY_1}CrossSection${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "number",
    label: "Допустимый ток",
    keyOne: MODEL_SECTION_10KV_KEY_1,
    keyTwo: "permissibleCurrent",
    inputId: `${MODEL_SECTION_10KV_KEY_1}PermissibleCurrent${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Тип изоляции",
    keyOne: MODEL_SECTION_10KV_KEY_1,
    keyTwo: "typeOfIsolation",
    inputId: `${MODEL_SECTION_10KV_KEY_1}TypeOfIsolation${VOLTAGE_OPTIONS["10"]}`,
  },
  {
    inputType: "text",
    label: "Климатическое исполнение",
    keyOne: MODEL_SECTION_10KV_KEY_1,
    keyTwo: "climaticVersion",
    inputId: `${MODEL_SECTION_10KV_KEY_1}ClimaticVersion${VOLTAGE_OPTIONS["10"]}`,
  },
] as const;
