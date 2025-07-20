import { XYPosition } from "@xyflow/react";
import {
  INITIAL_CELL_10KV,
  INITIAL_FIXATOR,
  INITIAL_FIXATOR_CONTAINER,
  INITIAL_SECTION_10KV,
} from "./initial-nodes";
import { v4 as uuidv4 } from "uuid";
import {
  HALF_CELL_10KV_WIDTH,
  INITIAL_CELL_10KV_METRICS,
  INITIAL_SECTION_10KV_METRICS,
} from "@/shared/constants/measures";
import { TCell10Kv, TFixator10Kv, TFixatorContainer, TSection10Kv } from "@/shared/types";
import { ProjectId } from "@/shared/api/types";
type CreateEntitiesArguments = {
  event: React.DragEvent<HTMLDivElement>;
  screenToFlowPosition: (
    clientPosition: XYPosition,
    options?: {
      snapToGrid: boolean;
    },
  ) => XYPosition;
  projectId: ProjectId;
};

export const createCell10Kv = ({
  event,
  projectId,
  screenToFlowPosition,
}: CreateEntitiesArguments): TCell10Kv => {
  const position = screenToFlowPosition({
    x: event.clientX - INITIAL_CELL_10KV_METRICS.measured.width / 8,
    y: event.clientY - INITIAL_CELL_10KV_METRICS.measured.height / 8,
  });
  const newCellId: TCell10Kv["id"] = `cell-10-kv-${uuidv4()}`;
  return {
    id: newCellId,
    data: {},
    position: position,
    // projectId: projectId,
    draggable: true,
    ...INITIAL_CELL_10KV,
  };
};

export const createSection10Kv = ({
  event,
  projectId,
  screenToFlowPosition,
}: CreateEntitiesArguments) => {
  const position = screenToFlowPosition({
    x: event.clientX - INITIAL_SECTION_10KV_METRICS.measured.width / 8,
    y: event.clientY - INITIAL_SECTION_10KV_METRICS.measured.height / 8,
  });
  const newSectionId: TSection10Kv["id"] = `section-10-kv-${uuidv4()}`;
  const section: TSection10Kv = {
    id: newSectionId,
    data: { width: INITIAL_SECTION_10KV_METRICS.measured.width },
    position: position,
    // projectId: projectId,
    ...INITIAL_SECTION_10KV,
  };

  const newFixatorContainerId: TFixatorContainer["id"] = `fixator-container-${uuidv4()}`;
  const fixatorContainer: TFixatorContainer = {
    id: newFixatorContainerId,

    // projectId: projectId,
    parentId: newSectionId,
    ...INITIAL_FIXATOR_CONTAINER,
  };

  const fixators: TFixator10Kv[] = new Array(4).fill("").map((item, index) => {
    const newFixatorId: TFixator10Kv["id"] = `fixator-10-kv-${uuidv4()}`;
    return {
      id: newFixatorId,
      data: { id: newFixatorId },
      projectId: projectId,
      parentId: newFixatorContainerId,
      position: { y: 0, x: index * HALF_CELL_10KV_WIDTH * 2 - 8 },
      ...INITIAL_FIXATOR,
    };
  });

  return [section, fixatorContainer, ...fixators];
};
