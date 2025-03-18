import { TCell10Kv, TSwitchingDeviceR, TSwitchingDeviceVN, TSwitchingDeviceVV } from "./types"

export type Position = {
    x: number
    y: number
}
export type Project = {
    id: string
    projectType: string
    title: string
    info: string
    createdAt: Date
    updatedAt: Date

}


export type Section10kV = {
    id: string
    projectId: string

    voltage: number
    position: Position
    draggable: boolean

}

export type Fixation10kV = {
    id: string
    projectId: string

    section10kVId: string
    position: Position
}

export type Cell10KvResponse = Omit<TCell10Kv, "selected">


export type ProjectResponseData = {
    project: Project,
    sections10kV: Section10kV[],
    fixations: Fixation10kV[],
    cells10kV: Cell10KvResponse[]
}