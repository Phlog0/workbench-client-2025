import { DeepMergeTwoTypes } from "./GetObjDifferentKeys-types";
import { Mircoproc, Opn, PossiblePropertyValues, Tn, Tsn, TSwitchingDeviceR, TSwitchingDeviceVN, TSwitchingDeviceVV, Tt } from "./properties-types";
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
    draggble: true
    typeOfCell?: string
    // opn: Opn
    // tt: Tt
    // tn?: Tn
    // tsn?: Tsn
    // microproc?: Mircoproc
    switchingDeviceVv?: TSwitchingDeviceVV
    // switchingDeviceR?: TSwitchingDeviceR
    // switchingDeviceVN?: TSwitchingDeviceVN
    // ratedCurrentOfTheMainCircuits10kV?: number

} & ReactFlowNode

export type TSection10Kv = {
    id: string
    projectId: string
    type: typeof nodeTypes["Section10Kv"],

} & ReactFlowNode




export type PossibleNode = TCell10Kv | TSection10Kv
export type AllPossibleNodes = PossibleNode[]

