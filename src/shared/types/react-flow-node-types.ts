import {
  SwitchingDeviceValue_10Kv,
  TypeOfCellOptions_10KV,
  TypeOfMeasuringCurrentTransformersDeviceOptions_10KV,
} from "@/shared/constants/10kv";
import {
  TOpn,
  TTn,
  TTsn,
  TMeasuringCurrentTransformersDevice,
  Tmpdaa,
  TUkrm,
  SwitchingDevice,
} from "./properties-types";
import { Edge, Node } from "@xyflow/react";
import {
  ReactFlowNodeId,
  ReactFlowNodeIdCell10Kv,
  ReactFlowNodeIdFixator10Kv,
  ReactFlowNodeIdFixatorContainer,
  ReactFlowNodeIdSection10kv,
  TNodePosition,
} from "../appStore/slices/types";
import { ProjectId } from "../api/types";

export type ReactFlowNode = Node;
export const NODE_TYPES = {
  Cell10Kv: "Cell10Kv",

  // SectionContainer10Kv: "SectionContainer10Kv",
  Section10Kv: "Section10Kv",

  FixatorContainer: "FixatorContainer",
  Fixator10Kv: "Fixator10Kv",
} as const;

export type NodeTypesUnion = keyof typeof NODE_TYPES;
export type IsThereDevice = "Нет" | "Есть";
export type TCell10Kv = ReactFlowNode & {
  id: ReactFlowNodeIdCell10Kv;
  // projectId: ProjectId;
  type: (typeof NODE_TYPES)["Cell10Kv"];
  parentId?: ReactFlowNodeIdFixator10Kv;
  expandParent?: boolean;
  selected?: boolean;
  draggable?: boolean;
  position: TNodePosition;
  data?: {
    typeOfCell?: TypeOfCellOptions_10KV;
    typeOfSwitchingDevice?: SwitchingDeviceValue_10Kv;
    switchingDevice?: SwitchingDevice;

    typeOfMeasuringCurrentTransformersDevice?: TypeOfMeasuringCurrentTransformersDeviceOptions_10KV;
    measuringCurrentTransformersDevice?: TMeasuringCurrentTransformersDevice;
    isThereMicroprocessorDevice?: IsThereDevice;
    mpdaa?: Tmpdaa;
    isThereOpnDevice?: IsThereDevice;
    opn?: TOpn;
    tsn?: TTsn;
    tn?: TTn;
    ukrm?: TUkrm;
  };

  // ratedCurrentOfTheMainCircuits10kV?: number
};

export type TSection10Kv = ReactFlowNode & {
  id: ReactFlowNodeIdSection10kv;
  // projectId: ProjectId;
  type: (typeof NODE_TYPES)["Section10Kv"];
  data: {
    width: number;
  };
  position: TNodePosition;
  // measured: {
  //   width: number;
  // };
};

// export type TSectionContainer10Kv = ReactFlowNode & {
//   id: ReactFlowNodeId;
//   projectId: ProjectId;
//   type: (typeof NODE_TYPES)["SectionContainer10Kv"];
//   position: TNodePosition;
//   measured: {
//     width: number;
//   };
// };

export type TFixatorContainer = ReactFlowNode & {
  id: ReactFlowNodeIdFixatorContainer;
  // projectId: ProjectId;
  type: (typeof NODE_TYPES)["FixatorContainer"];
  parentId: ReactFlowNodeIdSection10kv;
  draggable: false;
  deletable: false;
  position: TNodePosition;

  data: {
    width: number;
  };
};
export type TFixator10Kv = ReactFlowNode & {
  id: ReactFlowNodeIdFixator10Kv;
  type: (typeof NODE_TYPES)["Fixator10Kv"];
  // projectId: ProjectId;

  position: TNodePosition;
  parentId?: ReactFlowNodeIdFixatorContainer;
  draggable: false;
  deletable: false;
  className?: string;
};

export type PossibleNode =
  | TCell10Kv
  | TSection10Kv
  // | TSectionContainer10Kv
  | TFixator10Kv
  | TFixatorContainer;

// export type AllPossibleNodes = PossibleNode[]

export type PossibleEdge = Edge;
