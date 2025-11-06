import { TCell04Kv } from "../cells/cell-04kv/types";
import { TCell10Kv } from "../cells/cell-10kv/types";
import { TFixator04Kv } from "../fixators/fixator-04kv/types";
import { TFixator10Kv } from "../fixators/fixator-10kv/types";
import { TFixatorContainer } from "../fixator-container/types";
import { TPowerTransformer1004Kv } from "../power-transformer-10-04kv";
import { TSection04Kv } from "../sections/section-04kv/types";
import { TSection10Kv } from "../sections/section-10kv/types";
import { TImageNode } from "../image";
import {
  TNonPrimitiveKeys,
  TNonPrimitiveType,
  TPrimitiveKeys,
  TPrimitiveType,
} from "./primitive-keys";
import { TCell35Kv } from "../cells/cell-35kv/types";
import { TSection35Kv } from "../sections/section-35kv/types";
import { TFixator35Kv } from "../fixators/fixator-35kv/types";

export type PossibleNode =
  | TCell04Kv
  | TCell10Kv
  | TCell35Kv
  | TSection04Kv
  | TSection10Kv
  | TSection35Kv
  | TFixator04Kv
  | TFixator10Kv
  | TFixator35Kv
  | TFixatorContainer
  | TPowerTransformer1004Kv
  | TImageNode;

type PossibleNodeData = PossibleNode["data"];

// 😣😣😣 он по-разному маппит типы possible node ({} | {}) и например TCEll10kv

export type TPossibleNodeNonPrimitiveKeys = TNonPrimitiveKeys<PossibleNodeData>;

export type TPossibleNodeNonPrimitiveType = TNonPrimitiveType<PossibleNodeData>;

export type TPossibleNodePrimitiveKeys = TPrimitiveKeys<PossibleNodeData>;

export type TPossibleNodePrimitiveType = TPrimitiveType<PossibleNodeData>;
