import { TCell10Kv, TFixator10Kv, TFixatorContainer, TSection10Kv } from "@/shared/appStore/react-flow-types";
import { TYPE_OF_CELL_OPTIONS } from "@/shared/constants/constants";
import { INITIAL_CELL_10KV_METRICS, INITIAL_FIXATOR_CONTAINER_METRICS, INITIAL_SECTION_10KV_METRICS } from "@/shared/constants/measures";


type TOmittedInitialNodes<T> = Omit<T, 'id' | "projectId" | "data" | 'position'>


export const INITIAL_CELL_10KV: TOmittedInitialNodes<TCell10Kv> = {
    type: 'Cell10Kv',
    measured: INITIAL_CELL_10KV_METRICS.measured,
    draggable: true,
    typeOfCell: TYPE_OF_CELL_OPTIONS[0],
    // opn: undefined,
    // tt: undefined,
    // tn: undefined,
    // tsn: undefined,
    // microproc: undefined,
    // switchingDeviceVV: undefined,
    // switchingDeviceR: undefined,
    // switchingDeviceVN: undefined,
    // ratedCurrentOfTheMainCircuits10kV: undefined,
}

export const INITIAL_SECTION_10KV: TOmittedInitialNodes<TSection10Kv> = {

    type: "Section10Kv",
    measured: INITIAL_SECTION_10KV_METRICS.measured,
}


export const INITIAL_FIXATOR_CONTAINER: Omit<TFixatorContainer, 'id' | "projectId" | "data" | "parentId"> = {

    type: "FixatorContainer",
    measured: INITIAL_FIXATOR_CONTAINER_METRICS.measured,
    position: INITIAL_FIXATOR_CONTAINER_METRICS.position,
    deletable: false,
    draggable: false,
}

export const INITIAL_FIXATOR: Omit<TFixator10Kv, 'id' | "projectId" | "data" | "parentId" | "position"> = {
    type: "Fixator10Kv",
    draggable: false,

    deletable: false,
}