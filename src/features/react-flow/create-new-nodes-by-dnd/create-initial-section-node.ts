import { v4 as uuidv4 } from "uuid";

import { TSection10Kv } from "@/shared/react-flow/nodes/section-10kv/types";
import { TFixatorContainer } from "@/shared/react-flow/nodes/fixator-container/types";
import { TFixator10Kv } from "@/shared/react-flow/nodes/fixator-10kv/types";
import {
  HALF_CELL_10KV_WIDTH,
  INITIAL_CELL_10KV_METRICS,
} from "@/shared/react-flow/nodes/cell-10kv/measures";
import { CreateEntitiesArguments } from "./types";
import { INITIAL_FIXATOR_CONTAINER_METRICS } from "@/shared/react-flow/nodes/fixator-container/measures";
import { ElectricityVoltage, PossibleNode } from "@/shared/react-flow/nodes";
import { INITIAL_SECTION_04KV_METRICS } from "@/shared/react-flow/nodes/section-04kv/measures";
import { INITIAL_SECTION_10KV_METRICS } from "@/shared/react-flow/nodes/section-10kv/measures";
import { TSection04Kv } from "@/shared/react-flow/nodes/section-04kv/types";
import { TFixator04Kv } from "@/shared/react-flow/nodes/fixator-04kv/types";
import { INITIAL_CELL_04KV_METRICS } from "@/shared/react-flow/nodes/cell-04kv/measures";

export const createSection = ({
  event,
  screenToFlowPosition,
  sectionVoltage,
}: CreateEntitiesArguments & { sectionVoltage: ElectricityVoltage }) => {
  const sectionMetrics =
    sectionVoltage === "10" ? INITIAL_SECTION_10KV_METRICS : INITIAL_SECTION_04KV_METRICS;
  const cellMetrics =
    sectionVoltage === "10" ? INITIAL_CELL_10KV_METRICS : INITIAL_CELL_04KV_METRICS;
  const position = screenToFlowPosition({
    x: event.clientX - sectionMetrics.width / 8,
    y: event.clientY - sectionMetrics.height / 8,
  });
  const newSectionId:
    | TSection10Kv["id"]
    | TSection04Kv["id"] = `section-${sectionVoltage}-kv-${uuidv4()}`;

  const section: TSection10Kv | TSection04Kv = {
    id: newSectionId,
    data: { width: sectionMetrics.width },
    position: position,
    type: `Section${sectionVoltage}Kv`,
  };

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
      | TFixator04Kv["id"] = `fixator-${sectionVoltage}-kv-${uuidv4()}`;
    let newItem: TFixator04Kv | TFixator10Kv = {
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
