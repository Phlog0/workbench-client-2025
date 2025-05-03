import { XYPosition } from "@xyflow/react"
import { INITIAL_CELL_10KV, INITIAL_FIXATOR, INITIAL_FIXATOR_CONTAINER, INITIAL_SECTION_10KV } from "./initial-nodes"
import { v4 as uuidv4 } from "uuid"
import { halfCellWidth, INITIAL_CELL_10KV_METRICS, INITIAL_SECTION_10KV_METRICS } from "@/shared/constants/measures";
import { TCell10Kv, TFixator10Kv, TFixatorContainer, TSection10Kv } from "@/shared/appStore/react-flow-types";
type CreateEntitiesArguments = {
    event: React.DragEvent<HTMLDivElement>,
    screenToFlowPosition: (clientPosition: XYPosition, options?: {
        snapToGrid: boolean;
    }) => XYPosition, projectId: string
}


export const createCell10Kv = ({ event, projectId, screenToFlowPosition }: CreateEntitiesArguments): TCell10Kv => {
    const position = screenToFlowPosition({
        x: event.clientX - INITIAL_CELL_10KV_METRICS.measured.width / 8,
        y: event.clientY - INITIAL_CELL_10KV_METRICS.measured.height / 8,
    });
    const newCellId = `c-10-${uuidv4()}`;
    return {
        id: newCellId,
        data: { id: newCellId, },
        position: position,
        projectId: projectId,
        draggable: true,
        ...INITIAL_CELL_10KV,
    }
}


export const createSection10Kv = ({ event, projectId, screenToFlowPosition }: CreateEntitiesArguments
) => {
    const position = screenToFlowPosition({
        x: event.clientX - INITIAL_SECTION_10KV_METRICS.measured.width / 8,
        y: event.clientY - INITIAL_SECTION_10KV_METRICS.measured.height / 8,
    });
    const newSectionId = `s-10-${uuidv4()}`;
    const section: TSection10Kv = {
        id: newSectionId,
        data: { id: newSectionId },
        position: position,
        projectId: projectId,
        ...INITIAL_SECTION_10KV,
    }

    const newFixatorContainerId = `fc-${uuidv4()}`;
    const fixatorContainer: TFixatorContainer = {
        id: newFixatorContainerId,
        data: { id: newFixatorContainerId },
        projectId: projectId,
        parentId: newSectionId,
        ...INITIAL_FIXATOR_CONTAINER,
    }

    const fixators: TFixator10Kv[] = new Array(4).fill("").map((item, index) => {
        const newFixatorId = `f-10-${uuidv4()}`;
        return {
            id: newFixatorId,
            data: { id: newFixatorId },
            projectId: projectId,
            parentId: newFixatorContainerId,
            position: { y: 0, x: (index) * halfCellWidth * 2 - 8 },
            ...INITIAL_FIXATOR
        }
    })

    return [section, fixatorContainer, ...fixators]
}