import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';

import { initialNodes } from './mockData';
import { initialEdges } from './mockData';
import { AppState } from './types';
// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<AppState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  selectedNodeId: null,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },

  addNode: (node) => {
    console.log(node)
    set({ nodes: [...get().nodes, node] })
  },
  setNodes: (nodes) => {
    console.log(nodes)
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },

  setSelectedNodeId: (selectedNodeId) => {
    console.log('store')
    set(() => ({ selectedNodeId: selectedNodeId }))
  }
}));

export default useStore;