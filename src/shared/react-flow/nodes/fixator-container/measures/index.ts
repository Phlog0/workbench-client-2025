import { HALF_CELL_10KV_WIDTH } from "../../cell-10kv/measures";
import { INITIAL_SECTION_10KV_METRICS } from "../../section-10kv/measures";

export const INITIAL_FIXATOR_CONTAINER_METRICS = {
  width:
    INITIAL_SECTION_10KV_METRICS.width -
    INITIAL_SECTION_10KV_METRICS.sectionPadding * 2 -
    HALF_CELL_10KV_WIDTH * 2,
  height: INITIAL_SECTION_10KV_METRICS.height,

  position: {
    x: INITIAL_SECTION_10KV_METRICS.sectionPadding + HALF_CELL_10KV_WIDTH,
    y: 0,
  },
} as const;
