import { v4 as uuidv4 } from "uuid";

import { TSection10Kv } from "@/shared/react-flow/nodes/sections/section-10kv/types";
import { TFixatorContainer } from "@/shared/react-flow/nodes/fixator-container/types";
import { TFixator10Kv } from "@/shared/react-flow/nodes/fixators/fixator-10kv/types";
import { INITIAL_CELL_10KV_METRICS } from "@/shared/react-flow/nodes/cells/cell-10kv/measures";
import { CreateEntitiesArguments } from "./types";
import { INITIAL_FIXATOR_CONTAINER_METRICS } from "@/shared/react-flow/nodes/fixator-container/measures";

import { INITIAL_SECTION_04KV_METRICS } from "@/shared/react-flow/nodes/sections/section-04kv/measures";
import { INITIAL_SECTION_10KV_METRICS } from "@/shared/react-flow/nodes/sections/section-10kv/measures";
import { TSection04Kv } from "@/shared/react-flow/nodes/sections/section-04kv/types";
import { TFixator04Kv } from "@/shared/react-flow/nodes/fixators/fixator-04kv/types";
import { INITIAL_CELL_04KV_METRICS } from "@/shared/react-flow/nodes/cells/cell-04kv/measures";
import { ElectricityVoltage } from "@/shared/react-flow/nodes/shared/type-of-voltage";
import { INITIAL_CELL_35KV_METRICS } from "@/shared/react-flow/nodes/cells/cell-35kv/measures";
import { TSection35Kv } from "@/shared/react-flow/nodes/sections/section-35kv/types";
import { TFixator35Kv } from "@/shared/react-flow/nodes/fixators/fixator-35kv/types";
import { INITIAL_SECTION_35KV_METRICS } from "@/shared/react-flow/nodes/sections/section-35kv/measures";
const sectionAndCellSizes = {
  cell04: INITIAL_CELL_04KV_METRICS,
  cell10: INITIAL_CELL_10KV_METRICS,
  cell35: INITIAL_CELL_35KV_METRICS,
  section04: INITIAL_SECTION_04KV_METRICS,
  section10: INITIAL_SECTION_10KV_METRICS,
  section35: INITIAL_SECTION_35KV_METRICS,
} as const;
export const createSection = ({
  event,
  screenToFlowPosition,
  sectionVoltage,
}: CreateEntitiesArguments & { sectionVoltage: Exclude<ElectricityVoltage, "06"> }) => {
  const sectionMetrics = sectionAndCellSizes[`section${sectionVoltage}`];

  const cellMetrics = sectionAndCellSizes[`cell${sectionVoltage}`];
  const position = screenToFlowPosition({
    x: event.clientX - sectionMetrics.width / 8,
    y: event.clientY - sectionMetrics.height / 8,
  });
  const newSectionId:
    | TSection10Kv["id"]
    | TSection35Kv["id"]
    | TSection04Kv["id"] = `section-${sectionVoltage}-kv-${uuidv4()}`;

  let section: TSection10Kv | TSection04Kv | TSection35Kv;

  if (sectionVoltage === "10") {
    section = {
      id: newSectionId,
      data: { typeOfVoltage: "10 кВ", width: sectionMetrics.width },
      position: position,
      type: `Section${sectionVoltage}Kv`,
    };
  } else if (sectionVoltage === "04" || sectionVoltage === "35") {
    section = {
      id: newSectionId,
      data: { width: sectionMetrics.width },
      position: position,
      type: `Section${sectionVoltage}Kv`,
    };
  } else {
    throw new Error("unsupported section voltage: ", sectionVoltage);
  }

  const newFixatorContainerId: TFixatorContainer["id"] = `fixator-container-${uuidv4()}`;
  const fixatorContainer: TFixatorContainer = {
    id: newFixatorContainerId,

    parentId: newSectionId,
    type: "FixatorContainer",
    data: { width: INITIAL_FIXATOR_CONTAINER_METRICS.width },
    position: INITIAL_FIXATOR_CONTAINER_METRICS.position,
    deletable: false,
    draggable: false,
    selectable: false,
  };

  const fixators = new Array(4).fill("").map((_, index) => {
    const newFixatorId:
      | TFixator10Kv["id"]
      | TFixator35Kv["id"]
      | TFixator04Kv["id"] = `fixator-${sectionVoltage}-kv-${uuidv4()}`;
    const newItem: TFixator04Kv | TFixator10Kv | TFixator35Kv = {
      id: newFixatorId,
      data: { id: newFixatorId },
      parentId: newFixatorContainerId,
      position: { y: 0, x: ((index * cellMetrics.width) / 2) * 2 - 8 },
      type: `Fixator${sectionVoltage}Kv`,
      draggable: false,

      deletable: false,
      selectable: false,
    };
    return newItem;
  });

  return [section, fixatorContainer, ...fixators];
};
