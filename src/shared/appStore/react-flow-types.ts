import { TypeOfCellOptions } from "../constants/constants";
import { DeepMergeTwoTypes } from "./GetObjDifferentKeys-types";
import { TOpn, PossiblePropertyValues, TTn, TTsn, TSwitchingDeviceR, TSwitchingDeviceVN, TSwitchingDeviceVV, TMeasuringCurrentTransformersDevice, Tmpdaa, TUkrm } from "./properties-types";
import { Node } from "@xyflow/react";
import { ReactFLowNodeId, TNodePosition } from "./types";

export type ReactFlowNode = Node
export const nodeTypes = {
    Cell10Kv: 'Cell10Kv',
    Cell04Kv: 'Cell04Kv',
    Cell35Kv: 'Cell35Kv',
    Section10Kv: 'Section10Kv',
    Section04Kv: 'Section04Kv',
    Section35Kv: 'Section35Kv',
    PowerTransformerFrom35to10Kv: "PowerTransformerFrom35to10Kv",
    FixatorContainer: "FixatorContainer",
    Fixator10Kv: "Fixator10Kv",

} as const;


export type NodeTypesUnion = keyof typeof nodeTypes
export type TCell10Kv = ReactFlowNode & {
    id: ReactFLowNodeId
    projectId: string
    type: typeof nodeTypes["Cell10Kv"]
    // width: number
    // height: number
    // position: TNodePosition
    // positionAbsolute?: TNodePosition
    parentId?: string
    expandParent?: boolean
    selected?: boolean
    draggable?: true | false
    typeOfCell: TypeOfCellOptions
    isMeasuringCurrentTransformersDevice?: string
    typeOfSwitchingDevice?: string
    switchingDeviceVv?: TSwitchingDeviceVV
    switchingDeviceVn?: TSwitchingDeviceVN
    switchingDeviceR?: TSwitchingDeviceR
    measuringCurrentTransformersDevice?: TMeasuringCurrentTransformersDevice
    isThereMicroprocessorDevice?: "нет" | "есть"
    mpdaa?: Tmpdaa
    isThereOpnDevice?: "нет" | "есть"
    opn?: TOpn
    tsn?: TTsn
    tn?: TTn
    ukrm?: TUkrm


    // ratedCurrentOfTheMainCircuits10kV?: number

}

export type TSection10Kv = ReactFlowNode & {
    id: ReactFLowNodeId
    projectId: string
    type: typeof nodeTypes["Section10Kv"],
    width?: number
    position: TNodePosition
    style?: {
        width: number
    }
    customWidth?: number,
}


export type TFixatorContainer = ReactFlowNode & {
    id: ReactFLowNodeId
    projectId: string
    width?: number,
    type: typeof nodeTypes['FixatorContainer']
    parentId: string
    draggable: false
    position: TNodePosition
    style?: {
        width: number
    }
    customWidth?: number
}
export type TFixator10Kv = ReactFlowNode & {
    id: ReactFLowNodeId
    type: typeof nodeTypes['Fixator10Kv']
    projectId: string

    position: TNodePosition
    parentId?: string
    draggable: false
    className?: string

}



export type PossibleNode = TCell10Kv | TSection10Kv | TFixator10Kv | TFixatorContainer
export type AllPossibleNodes = PossibleNode[]

