export const INITIAL_CELL_10KV_METRICS = {
    measured: {
        width: 300,
        height: 836,
    }
} as const

export const halfCellWidth = INITIAL_CELL_10KV_METRICS.measured.width / 2

export const INITIAL_SECTION_10KV_METRICS = {
    measured: {
        width: 1400,
        height: 16,
    },
    sectionPadding: 100
} as const

export const INITIAL_FIXATOR_CONTAINER_METRICS = {
    measured: {
        width: INITIAL_SECTION_10KV_METRICS.measured.width -
            INITIAL_SECTION_10KV_METRICS.sectionPadding * 2 - halfCellWidth * 2,
        height: INITIAL_SECTION_10KV_METRICS.measured.height,
    },
    position: {
        x: INITIAL_SECTION_10KV_METRICS.sectionPadding + halfCellWidth,
        y: 0
    }
} as const



