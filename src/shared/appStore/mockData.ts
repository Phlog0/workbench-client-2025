import { AppNode } from './types';
import { Edge } from '@xyflow/react';

export const initialNodes = [
    {
        id: '1',
        type: 'Cell10Kv',
        data: { id: '1' },
        position: { x: 250, y: 25 },

    },

    {
        id: '2',
        data: { id: '2' },
        position: { x: 100, y: 125 },
        type:"Section10Kv"
    },
    {
        id: '3',
        type: 'Cell10Kv',
        data: { id: '3' },
        position: { x: 250, y: 250 },
    },
    {
        id: '4',
        type: 'PowerTransformer',
        data: { id: '4' },
        position: { x: 350, y: 250 },
    },
] as AppNode[];

export const initialEdges = [
    // { id: 'e1-2', source: '1', target: '2' },
    // { id: 'e2-3', source: '2', target: '3' },
] as Edge[];