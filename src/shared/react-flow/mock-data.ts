import { PossibleEdge } from "./edges";
import { PossibleNode } from "./nodes";
import { HALF_CELL_10KV_WIDTH } from "./nodes/cell-10kv/measures";
import { TCell10Kv } from "./nodes/cell-10kv/types";
import { TFixator10Kv } from "./nodes/fixator-10kv/types";
import { TFixatorContainer } from "./nodes/fixator-container/types";
import { INITIAL_SECTION_10KV_METRICS } from "./nodes/section-10kv/measures";

const fixators: TFixator10Kv[] = new Array(4).fill("").map((_, index) => ({
  id: `fixator-10-kv-${index}`,
  projectId: 1,
  type: "Fixator10Kv",
  parentId: `fixator-container-${1}`,
  position: { y: 0, x: index * HALF_CELL_10KV_WIDTH * 2 - 8 },
  data: { id: `f-${index}` },
  draggable: false,
  deletable: false,
  // extent: "parent",
  // expandParent: true
}));
const fixators2: TFixator10Kv[] = new Array(4).fill("").map((_, index) => ({
  id: `fixator-10-kv-${index + 4}`,
  projectId: 1,
  type: "Fixator10Kv",
  parentId: `fixator-container-${2}`,
  position: { y: 0, x: index * HALF_CELL_10KV_WIDTH * 2 - 8 },
  data: { id: `f-${index}` },
  draggable: false,
  deletable: false,
  // extent: "parent",
  // expandParent: true
}));

const cells10Kv: TCell10Kv[] = new Array(4).fill("").map((_, index) => ({
  id: `cell-10-kv-${index}`,
  type: "Cell10Kv",
  position: { x: 150 * index, y: 100 },
  draggable: true,
  projectId: 1,
  data: {
    typeOfCell: "ТСН (Трансформатор собсвтенных нужд)",
    // typeOfSwitchingDevice: "ВВ (Вакуумные выключатели)",
    // switchingDevice: {
    //   typeOfDevice: "VV",
    //   type: "1type",
    //   title: "1tit",
    //   manufacturer: "1man",
    //   ratedCurrent: 123,
    //   ratedBreakingCurrent: 456,
    //   ratedVoltage: 789,
    // },

    typeOfMeasuringCurrentTransformersDevice: "Нет",
  },

  // opn: undefined,
  // tt: undefined,
  // tn: undefined,
  // tsn: undefined,
  // microproc: undefined,
  // switchingDeviceVV: undefined,
  // switchingDeviceR: undefined,
  // switchingDeviceVN: undefined,
  // ratedCurrentOfTheMainCircuits10kV: undefined,
}));
export const initialNodes: PossibleNode[] = [
  {
    id: `section-10-kv-${1}`,
    position: { x: 0, y: 0 },
    type: "Section10Kv",
    // projectId: 1,
    data: {
      width: INITIAL_SECTION_10KV_METRICS.width,
    },
  },
  {
    id: `section-10-kv-${2}`,
    position: { x: INITIAL_SECTION_10KV_METRICS.width + 300, y: 0 },
    data: {
      width: INITIAL_SECTION_10KV_METRICS.width,
    },
    type: "Section10Kv",
    // projectId: 1,
  },

  {
    type: "FixatorContainer",
    id: `fixator-container-${1}`,
    position: { x: INITIAL_SECTION_10KV_METRICS.sectionPadding + HALF_CELL_10KV_WIDTH, y: 0 },
    data: {
      width:
        INITIAL_SECTION_10KV_METRICS.width -
        INITIAL_SECTION_10KV_METRICS.sectionPadding * 2 -
        HALF_CELL_10KV_WIDTH * 2,
    },

    draggable: false,
    parentId: `section-10-kv-${1}`,
    expandParent: true,
    deletable: false,
  } as TFixatorContainer,
  {
    id: `fixator-container-${2}`,
    // projectId: 1,
    type: "FixatorContainer",
    position: { x: INITIAL_SECTION_10KV_METRICS.sectionPadding + HALF_CELL_10KV_WIDTH, y: 0 },
    measured: {
      width:
        INITIAL_SECTION_10KV_METRICS.width -
        INITIAL_SECTION_10KV_METRICS.sectionPadding * 2 -
        HALF_CELL_10KV_WIDTH * 2,
    },

    draggable: false,
    data: {
      width:
        INITIAL_SECTION_10KV_METRICS.width -
        INITIAL_SECTION_10KV_METRICS.sectionPadding * 2 -
        HALF_CELL_10KV_WIDTH * 2,
    },
    parentId: `section-10-kv-${2}`,
    expandParent: true,
    deletable: false,
  } as TFixatorContainer,

  ...fixators,
  ...fixators2,

  ...cells10Kv,
];

export const initialEdges = [
  // { id: 'e1-2', source: '1', target: '2' },
  // { id: 'e2-3', source: '2', target: '3' },
] as PossibleEdge[];

export const empty_initialEdges = [];
export const empty_initialNodes = [];
