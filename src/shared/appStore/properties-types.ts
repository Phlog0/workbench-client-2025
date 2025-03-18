import { DeepMergeTwoTypes } from "./GetObjDifferentKeys-types"
import { TCell10Kv, TSection10Kv } from "./react-flow-types"

export type TSwitchingDeviceVV = {
    type: string
    title: string
    manufacturer: string
    ratedCurrent: number
    ratedBreakingCurrent: number
    ratedVoltage: number
}
export type TSwitchingDeviceVN = {
    type: string
    title: string
    manufacturer: string
    ratedCurrent: number
    ratedBreakingCurrent: number
    ratedVoltage: number
    numberOfGroundShafts: number
    locationOfGroundingBlades: string
    switchDriveLocation: string
    locationOfTheGroundingBladeDrive: string
}
export type TSwitchingDeviceR = {
    type: string
    title: string
    manufacturer: string
    ratedCurrent: number
    thermalCurrent: number
    ratedVoltage: number
}

export type Tsn = {
    type: string
    title: string
    manufacturer: string
    ratedPower: string
}
export type Tn = {
    type: string
    title: string
    manufacturer: string
    ratedThreePhasePowerOfTheFirstWinding: string
    accuracyClassOfTheFirstSecondaryWinding: string
    ratedThreePhasePowerOfTheSecondSecondaryWinding: string
    accuracyClassOfTheSecondSecondaryWinding: string
    ratedThreePhasePowerOfAadditionalSecondaryWinding: string
    accuracyClassOfSecondaryReturnWires: string
    ratedLineVoltageAtTheTerminalsOfThePrimaryWinding: string
}
export type Tt = {
    type: string
    title: string
    manufacturer: string
    transformationRatio: string
    accuracyClass: string
    oneSecondThermalCurrent: string
    typeOfService: string
}
export type Mircoproc = {
    type: string
    title: string
    manufacturer: string

}

export type Opn = {
    type: string
    title: string
    manufacturer: string
    ratedOperatingVoltage: string
    throughput: string
    ratedDischargeCurrent: string
    maximumContinuousPermissibleOperatingVoltage: string
}


export type AllNodesPropertiesTypes = DeepMergeTwoTypes<TCell10Kv, TSection10Kv>

export type KeyOneTCell10Kv = keyof TCell10Kv

export type PossiblePropertyValues = string | number | boolean | undefined

// export type NestedPropsTCell10KvKeys = Opn | Mircoproc | Tt | Tn | Tsn | TSwitchingDeviceR | TSwitchingDeviceVN | TSwitchingDeviceVV
// export type NestedPropsTCell10KvKeys = keyof Pick<TCell10Kv, "opn" | 'tt'>
export type NestedPropsTCell10Kv = keyof (Opn | Tt)

const a = { c: { b: 1 } }

type A = typeof a