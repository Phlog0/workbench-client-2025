import { TypeOfCellOptions_10KV, TypeOfSwitchingDeviceOptions_10KV } from "../constants";
import {
  TOpn,
  TTn,
  TTsn,
  TSwitchingDeviceR,
  TSwitchingDeviceVN,
  TSwitchingDeviceVV,
  TMeasuringCurrentTransformersDevice,
  Tmpdaa,
  TUkrm,
} from "./properties-types";
import { Node } from "@xyflow/react";
import { ReactFLowNodeId, TNodePosition } from "./appStore-types";

export type ReactFlowNode = Node;
export const NODE_TYPES = {
  Cell10Kv: "Cell10Kv",

  SectionContainer10Kv: "SectionContainer10Kv",
  Section10Kv: "Section10Kv",

  FixatorContainer: "FixatorContainer",
  Fixator10Kv: "Fixator10Kv",
} as const;

export type NodeTypesUnion = keyof typeof NODE_TYPES;
type IsThere = "нет" | "да";
export type TCell10Kv = ReactFlowNode & {
  id: ReactFLowNodeId;
  projectId: string;
  type: (typeof NODE_TYPES)["Cell10Kv"];
  // width: number
  // height: number
  // position: TNodePosition
  // positionAbsolute?: TNodePosition

  parentId?: string;
  expandParent?: boolean;
  selected?: boolean;
  draggable?: true | false;
  typeOfCell: TypeOfCellOptions_10KV;
  typeOfSwitchingDevice?: TypeOfSwitchingDeviceOptions_10KV;
  switchingDeviceVv?: TSwitchingDeviceVV;
  switchingDeviceVn?: TSwitchingDeviceVN;
  switchingDeviceR?: TSwitchingDeviceR;
  typeOfMeasuringCurrentTransformersDevice?: string;
  measuringCurrentTransformersDevice?: TMeasuringCurrentTransformersDevice;
  isThereMicroprocessorDevice?: IsThere;
  mpdaa?: Tmpdaa;
  isThereOpnDevice?: IsThere;
  opn?: TOpn;
  tsn?: TTsn;
  tn?: TTn;
  ukrm?: TUkrm;

  // ratedCurrentOfTheMainCircuits10kV?: number
};

export type TSection10Kv = ReactFlowNode & {
  id: ReactFLowNodeId;
  projectId: string;
  type: (typeof NODE_TYPES)["Section10Kv"];
  width?: number;
  position: TNodePosition;
};

export type TSectionContainer10Kv = ReactFlowNode & {
  id: ReactFLowNodeId;
  projectId: string;
  type: (typeof NODE_TYPES)["SectionContainer10Kv"];
  position: TNodePosition;
  measured: {
    width: number;
  };
};

export type TFixatorContainer = ReactFlowNode & {
  id: ReactFLowNodeId;
  projectId: string;
  width?: number;
  type: (typeof NODE_TYPES)["FixatorContainer"];
  parentId: string;
  draggable: false;
  position: TNodePosition;
  style?: {
    width: number;
  };
  customWidth?: number;
};
export type TFixator10Kv = ReactFlowNode & {
  id: ReactFLowNodeId;
  type: (typeof NODE_TYPES)["Fixator10Kv"];
  projectId: string;

  position: TNodePosition;
  parentId?: string;
  draggable: false;
  className?: string;
};

export type PossibleNode =
  | TCell10Kv
  | TSection10Kv
  | TSectionContainer10Kv
  | TFixator10Kv
  | TFixatorContainer;

// export type AllPossibleNodes = PossibleNode[]
