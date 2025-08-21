import { TCell04Kv } from "./cell-04kv/types";
import { TCell10Kv } from "./cell-10kv/types";
import { TFixator04Kv } from "./fixator-04kv/types";
import { TFixator10Kv } from "./fixator-10kv/types";
import { TFixatorContainer } from "./fixator-container/types";
import { TPowerTransformer1004Kv } from "./power-transformer-10-04kv";
import { TSection04Kv } from "./section-04kv/types";
import { TSection10Kv } from "./section-10kv/types";
import { TImageNode } from "./image";
export type PossibleNode =
  | TCell10Kv
  | TSection10Kv
  | TFixator10Kv
  | TFixatorContainer
  | TPowerTransformer1004Kv
  | TCell04Kv
  | TSection04Kv
  | TFixator04Kv
  | TImageNode;
