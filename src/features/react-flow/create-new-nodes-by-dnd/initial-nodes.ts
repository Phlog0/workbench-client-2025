import { TCell10Kv, TFixator10Kv, TFixatorContainer, TSection10Kv } from "@/shared/types";

import {
  INITIAL_CELL_10KV_METRICS,
  INITIAL_FIXATOR_CONTAINER_METRICS,
  INITIAL_SECTION_10KV_METRICS,
} from "@/shared/constants/measures";

type TOmittedInitialNodes<T> = Omit<T, "id" | "projectId" | "data" | "position">;

export const INITIAL_CELL_10KV: TOmittedInitialNodes<TCell10Kv> = {
  type: "Cell10Kv",
  measured: INITIAL_CELL_10KV_METRICS.measured,
  draggable: true,

  // opn: undefined,
  // tt: undefined,
  // tn: undefined,
  // tsn: undefined,
  // microproc: undefined,
  // switchingDeviceVV: undefined,
  // switchingDeviceR: undefined,
  // switchingDeviceVN: undefined,
  // ratedCurrentOfTheMainCircuits10kV: undefined,
};

export const INITIAL_SECTION_10KV: TOmittedInitialNodes<TSection10Kv> = {
  type: "Section10Kv",
};

export const INITIAL_FIXATOR_CONTAINER: Omit<TFixatorContainer, "id" | "projectId" | "parentId"> = {
  type: "FixatorContainer",
  data: { width: INITIAL_FIXATOR_CONTAINER_METRICS.measured.width },
  position: INITIAL_FIXATOR_CONTAINER_METRICS.position,
  deletable: false,
  draggable: false,
};

export const INITIAL_FIXATOR: Omit<
  TFixator10Kv,
  "id" | "projectId" | "data" | "parentId" | "position"
> = {
  type: "Fixator10Kv",
  draggable: false,

  deletable: false,
};
