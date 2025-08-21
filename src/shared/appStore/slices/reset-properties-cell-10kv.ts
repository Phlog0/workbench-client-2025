//
// isMeasuringCurrentTransformersDevice ?: string
// typeOfSwitchingDevice ?: string
// switchingDeviceVv ?: TSwitchingDeviceVV
// switchingDeviceVn ?: TSwitchingDeviceVN
// switchingDeviceR ?: TSwitchingDeviceR
// measuringCurrentTransformersDevice ?: TMeasuringCurrentTransformersDevice
// typeOfMicroprocessorDevice ?: "нет" | "есть"
// mpdaa ?: Tmpdaa
// typeOfOpnDevice ?: "нет" | "есть"
// opn: TOpn
// tsn ?: TTsn
// tn ?: TTn
// ukrm ?: TUkrm
//

import { TCell10Kv } from "@/shared/react-flow/nodes/cell-10kv/types";
import { TTypeOfCellCell10Kv } from "@/shared/react-flow/nodes/cell-10kv/types/cell-10-kv-data";

// TODO из объекта TCell10Kv сделать тип [key1,key2]
export const resetCell10Kv = (typeOfCell: TTypeOfCellCell10Kv, cell10KvData: TCell10Kv["data"]) => {
  let properties: (keyof TCell10Kv["data"])[] = []; //массив ключей TCell10Kv
  switch (typeOfCell) {
    case "ТСН (Трансформатор собсвтенных нужд)":
      properties = ["tn"];
      break;
    case "Шинный мост":
      properties = [
        "typeOfMeasuringCurrentTransformersDevice",
        "typeOfSwitchingDevice",
        "switchingDevice",
        "measuringCurrentTransformersDevice",
        "typeOfMicroprocessorDevice",
        "mpdaa",
        "typeOfOpnDevice",
        "opn",
        "tsn",
        "tn",
        "ukrm",
      ];
      break;
    case "Не выбрано":
      properties = [
        "typeOfMeasuringCurrentTransformersDevice",
        "typeOfSwitchingDevice",
        "switchingDevice",
        "measuringCurrentTransformersDevice",
        "typeOfMicroprocessorDevice",
        "mpdaa",
        "typeOfOpnDevice",
        "opn",
        "tsn",
        "tn",
        "ukrm",
      ];
      break;
    case "СВ (Секционный выключатель)":
      properties = ["tn", "ukrm"];
      break;
    case "СР (Секционный разъединитель)":
      properties = [
        "typeOfMeasuringCurrentTransformersDevice",
        "typeOfSwitchingDevice",

        "switchingDevice",
        "measuringCurrentTransformersDevice",
        "typeOfMicroprocessorDevice",
        "mpdaa",
        "typeOfOpnDevice",
        "opn",
        "tsn",
        "tn",
        "ukrm",
      ];
      break;
    case "Ввод":
      properties = ["tsn", "tn"];
      break;
    case "Отходящая линия":
      properties = ["tsn", "tn"];
      break;
    case "УКРМ (Устройство компенсации реактивной мощности)":
      properties = ["tsn", "opn", "tn"];
      break;
    case "Шинный переход":
      properties = [
        "typeOfMeasuringCurrentTransformersDevice",
        "typeOfSwitchingDevice",
        "switchingDevice",
        "measuringCurrentTransformersDevice",
        "typeOfMicroprocessorDevice",
        "mpdaa",
        "typeOfOpnDevice",
        "opn",
        "tsn",
        "tn",
        "ukrm",
      ];
      break;
    case "ТН (Трансформатор напряжения)":
      properties = ["tsn", "opn"];
      break;

    default:
      break;
  }

  for (const prop in cell10KvData) {
    if (properties.includes(prop)) delete cell10KvData?.[prop];
  }
};
