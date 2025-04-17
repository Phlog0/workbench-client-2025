import { DeepMergeTwoTypes } from "./GetObjDifferentKeys-types";
import { TOpn, PossiblePropertyValues, TTn, TTsn, TSwitchingDeviceR, TSwitchingDeviceVN, TSwitchingDeviceVV, TMeasuringCurrentTransformersDevice, Tmpdaa, TUkrm } from "./properties-types";
import { Node } from "@xyflow/react";

type ReactFlowNode = Node
export const nodeTypes = {
    Cell10Kv: 'Cell10Kv',
    Cell04Kv: 'Cell04Kv',
    Cell35Kv: 'Cell35Kv',
    Section10Kv: 'Section10Kv',
    Section04Kv: 'Section04Kv',
    Section35Kv: 'Section35Kv',
    PowerTransformerFrom35to10Kv: "PowerTransformerFrom35to10Kv"

} as const;


export type NodeTypesUnion = keyof typeof nodeTypes
export type TCell10Kv = {
    id: string
    projectId: string
    type: typeof nodeTypes["Cell10Kv"]
    width: number
    height: number
    // position: TNodePosition
    // positionAbsolute?: TNodePosition
    selected?: boolean
    draggble?: true | false
    typeOfCell?: string
    isMeasuringCurrentTransformersDevice?: string
    typeOfSwitchingDevice?: string
    switchingDeviceVv?: TSwitchingDeviceVV
    switchingDeviceVn?: TSwitchingDeviceVN
    switchingDeviceR?: TSwitchingDeviceR
    measuringCurrentTransformersDevice?: TMeasuringCurrentTransformersDevice
    isThereMicroprocessorDevice?: "нет" | "есть"
    mpdaa?: Tmpdaa
    isThereOpnDevice?: "нет" | "есть"
    opn: TOpn
    tsn?: TTsn
    tn?: TTn
    ukrm?:TUkrm


    // ratedCurrentOfTheMainCircuits10kV?: number

} & ReactFlowNode

export type TSection10Kv = {
    id: string
    projectId: string
    type: typeof nodeTypes["Section10Kv"],
    width: number

} & ReactFlowNode




export type PossibleNode = TCell10Kv | TSection10Kv
export type AllPossibleNodes = PossibleNode[]

