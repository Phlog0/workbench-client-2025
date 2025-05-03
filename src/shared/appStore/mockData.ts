import { Edge, Node } from '@xyflow/react';
import { AllPossibleNodes, TCell10Kv, TFixator10Kv } from './react-flow-types';

export const CELL_MEASURES = {
    width: 300,
    height: 836,
}


const defaultTireWidth = 1400
const padding = 100
const halfCellWidth = CELL_MEASURES.width / 2

// const calcFixators = (items: TFixator[]) => {
//     const fixatorCount = items.length;
//     if (items.length === 0) return
//     const leftPadding = 100;
//     const firstFixator = { ...items[0], position: { y: 0, x: leftPadding + 250 + 8 } }
//     const othersFixator = [...items].slice(1).map((item, index) => ({ ...item, position: { y:0, x: } }))
// }



const fixators: TFixator10Kv[] = new Array(4).fill("").map((item, index) => ({
    id: `f-${index}`,
    projectId: '123',
    type: "Fixator10Kv",
    parentId: 'fc-1',
    position: { y: 0, x: (index) * halfCellWidth * 2 - 8 },
    data: { id: `f-${index}`, },
    draggable: false,
    // extent: "parent",
    // expandParent: true
}))

const cells10Kv: TCell10Kv[] = new Array(4).fill("").map((item, index) => ({

    id: `c-10-${index}`,
    type: 'Cell10Kv',
    data: { id: `c-10-${index}`, },
    position: { x: 150 * index, y: 100 },
    draggable: true,
    typeOfCell: "ТСН (Трансформатор собсвтенных нужд)",
    projectId: '123',
    switchingDeviceVv: { type: "1type", title: "1tit", manufacturer: "1man", ratedCurrent: 123, ratedBreakingCurrent: 456, ratedVoltage: 789 }
    ,
    // opn: undefined,
    // tt: undefined,
    // tn: undefined,
    // tsn: undefined,
    // microproc: undefined,
    // switchingDeviceVV: undefined,
    // switchingDeviceR: undefined,
    // switchingDeviceVN: undefined,
    // ratedCurrentOfTheMainCircuits10kV: undefined,
}))
export const initialNodes: AllPossibleNodes = [



    {
        id: '2',
        data: { id: '2' },
        position: { x: 100, y: 0 },
        type: "Section10Kv",
        // width: defaultTireWidth,
        measured: {
            width: defaultTireWidth,
        },
        // customWidth: defaultTireWidth,
        projectId: '123',
    },



    {
        id: 'fc-1',
        projectId: '123',
        type: "FixatorContainer",
        position: { x: padding + halfCellWidth, y: 0 },
        measured: {
            width: defaultTireWidth - padding * 2 - halfCellWidth * 2,
        },
        // customWidth: defaultTireWidth - padding * 2 - halfCellWidth * 2,
        // width: defaultTireWidth - padding * 2 - halfCellWidth * 2,
        zIndex: 0,
        draggable: false,
        data: { id: 'fc-1' },
        parentId: '2',
        expandParent: true,
        // extent: 'parent'
        deletable: false,
    },


    ...fixators,


    ...cells10Kv,

]

export const initialEdges = [
    // { id: 'e1-2', source: '1', target: '2' },
    // { id: 'e2-3', source: '2', target: '3' },
] as Edge[];