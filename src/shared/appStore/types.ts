import {
  Edge,
  Node,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from '@xyflow/react';
export type TNodePosition = {
  x: number
  y: number
}

export type TSwitchingDeviceVV = {
  type: string
  title: string
  manufacturer: string
  ratedCurrent: string
  ratedBreakingCurrent: string
  ratedVoltage: string
}
export type TSwitchingDeviceVN = {
  type: string
  title: string
  manufacturer: string
  ratedCurrent: string
  ratedBreakingCurrent: string
  ratedVoltage: string
  numberOfGroundShafts: string
  locationOfGroundingBlades: string
  switchDriveLocation: string
  locationOfTheGroundingBladeDrive: string
}
export type TSwitchingDeviceR = {
  type: string
  title: string
  manufacturer: string
  ratedCurrent: string
  thermalCurrent: string
  ratedVoltage: string
}

export type Tsn = {
  type: string
  name: string
  manufacturer: string
  ratedPower: string
}
export type Tn = {
  type: string
  name: string
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
  name: string
  manufacturer: string
  transformationRatio: string
  accuracyClass: string
  oneSecondThermalCurrent: string
  typeOfService: string
}
export type Mircoproc = {
  type: string
  name: string
  manufacturer: string

}

export type Opn = {
  type: string
  name: string
  manufacturer: string
  ratedOperatingVoltage: string
  throughput: string
  ratedDischargeCurrent: string
  maximumContinuousPermissibleOperatingVoltage: string
}



export type TCell10Kv = {
  id: string
  type: 'Cell10Kv'
  width?: number
  height?: number
  position: TNodePosition
  positionAbsolute?: TNodePosition
  selected?: boolean
  draggble?: true
  opn: Opn
  tt: Tt
  tn: Tn
  tsn: Tsn
  microproc: Mircoproc
  switchingDeviceVV: TSwitchingDeviceVV
  switchingDeviceR: TSwitchingDeviceR
  switchingDeviceVN: TSwitchingDeviceVN
  ratedCurrentOfTheMainCircuits_10kV: number

} & Node
export type AppNode = Node; // стандартные

export type AllNodes = TCell10Kv[] | AppNode[]
export type PossibleNode = AppNode | TCell10Kv

export type AppState = {
  nodes: AppNode[] | TCell10Kv[];
  edges: Edge[];
  selectedNodeId: string | null
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
  setSelectedNodeId: (selectedNodeId: string | null) => void;
  addNode: (node: PossibleNode) => void
};

