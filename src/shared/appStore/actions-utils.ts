import { TypeOfCellOptions } from "../constants/constants";
import { TCell10Kv } from "./react-flow-types";
//
// isMeasuringCurrentTransformersDevice ?: string
// typeOfSwitchingDevice ?: string
// switchingDeviceVv ?: TSwitchingDeviceVV
// switchingDeviceVn ?: TSwitchingDeviceVN
// switchingDeviceR ?: TSwitchingDeviceR
// measuringCurrentTransformersDevice ?: TMeasuringCurrentTransformersDevice
// isThereMicroprocessorDevice ?: "нет" | "есть"
// mpdaa ?: Tmpdaa
// isThereOpnDevice ?: "нет" | "есть"
// opn: TOpn
// tsn ?: TTsn
// tn ?: TTn
// ukrm ?: TUkrm
//




// TODO из объекта TCell10Kv сделать тип [key1,key2]
export const resetCell10Kv = <T, K extends keyof T & string>(typeOfCell: TypeOfCellOptions, cell10Kv: T) => {
    let properties = [] //массив ключей TCell10Kv
    switch (typeOfCell) {
        case "ТСН (Трансформатор собсвтенных нужд)":
            properties = ["tn"]
            break;
        case "Шинный мост":
            properties = ["isMeasuringCurrentTransformersDevice",
                "typeOfSwitchingDevice",
                "switchingDeviceVv",
                "switchingDeviceVn",
                "switchingDeviceR",
                "measuringCurrentTransformersDevice",
                "isThereMicroprocessorDevice",
                "mpdaa",
                "isThereOpnDevice",
                "opn",
                "tsn",
                "tn",
                "ukrm",]
            break;
        case "СВ (Секционный выключатель)":
            properties = [
                "tn",
                "ukrm",]
            break;
        case "СР (Секционный разъединитель)":
            properties = ["isMeasuringCurrentTransformersDevice",
                "typeOfSwitchingDevice",
                "switchingDeviceVv",
                "switchingDeviceVn",
                "switchingDeviceR",
                "measuringCurrentTransformersDevice",
                "isThereMicroprocessorDevice",
                "mpdaa",
                "isThereOpnDevice",
                "opn",
                "tsn",
                "tn",
                "ukrm",]
            break;
        case "Ввод":
            properties = ["tsn",
                "tn",]
            break;
        case "Отходящая линия":
            properties = ["tsn",
                "tn",]
            break;
        case "УКРМ (Устройство компенсации реактивной мощности)":
            properties = ["tsn",
                "opn",
                "tn"]
            break;
        case "Шинный переход":
            properties = ["isMeasuringCurrentTransformersDevice",
                "typeOfSwitchingDevice",
                "switchingDeviceVv",
                "switchingDeviceVn",
                "switchingDeviceR",
                "measuringCurrentTransformersDevice",
                "isThereMicroprocessorDevice",
                "mpdaa",
                "isThereOpnDevice",
                "opn",
                "tsn",
                "tn",
                "ukrm",]
            break;
        case "ТН (Трансформатор напряжения)":
            properties = ["tsn",
                "opn",
            ]
            break;

        default:
            break;
    }


    for (const prop in cell10Kv) {
        if (properties.includes(prop)) delete cell10Kv[prop]
    }
}