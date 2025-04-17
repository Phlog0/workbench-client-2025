import { Edge, Node } from '@xyflow/react';
import { AllPossibleNodes } from './react-flow-types';

export const initialNodes: AllPossibleNodes = [
    {
        id: '1',
        type: 'Cell10Kv',
        data: { id: '1' },
        position: { x: 250, y: 25 },
        draggble: true,
        typeOfCell: "",
        projectId: '',
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

    },
    {
        id: '8',
        type: 'Cell10Kv',
        data: { id: '8' },
        position: { x: 250, y: 25 },
        draggble: true,
        typeOfCell: "",
        projectId: '',
        switchingDeviceVv: { type: "1typeнщщщ", title: "1tit", manufacturer: "1man", ratedCurrent: 123, ratedBreakingCurrent: 456, ratedVoltage: 789 }
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

    },

    {
        id: '2',
        data: { id: '2' },
        position: { x: 100, y: 125 },
        type: "Section10Kv",
        width: 1500,
    },
    // {
    //     id: '3',
    //     type: 'Cell10Kv',
    //     data: { id: '3' },
    //     position: { x: 250, y: 250 },
    // },
    {
        id: '4',
        type: 'Section10Kv',
        data: { id: '4' },
        position: { x: 350, y: 250 },
        width: 750,
    },
]

export const initialEdges = [
    // { id: 'e1-2', source: '1', target: '2' },
    // { id: 'e2-3', source: '2', target: '3' },
] as Edge[];