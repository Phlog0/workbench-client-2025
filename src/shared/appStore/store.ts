import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import { immer } from 'zustand/middleware/immer'
import { initialNodes } from './mockData';
import { initialEdges } from './mockData';
import { AppState } from './types';
import { TCell10Kv } from './react-flow-types';
import { AllNodesPropertiesTypes } from './properties-types';
// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<AppState>()(
  immer((set, get) => ({
    nodes: initialNodes,
    edges: initialEdges,
    selectedNodeId: "",
    projectTheme: 'light',
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
      set((state) => {

        state.nodes.push(node)
      })
    },
    setNodes: (nodes) => {

      set({ nodes });
    },
    setEdges: (edges) => {

      set({ edges });

    },

    setSelectedNodeId: (nodeId) => {

      set((state) => {
        state.selectedNodeId = nodeId
      })
    },

    changeSelectPropery: ({ nodeId, prop, value }) => {
      console.log(nodeId)

      set((state) => {
        const node = state.nodes.find((item) => item.id === nodeId) as AllNodesPropertiesTypes
        if (node) {

          node[prop] = value

        }
      })
    },

    changeProjectTheme: (newTheme) => {
      set((state) => {

        state.projectTheme = newTheme
      })
    },

    changeInputPropertyTCell10Kv: ({ nodeId, keyOne, keyTwo, value }) => {
      set((state) => {
        const node = state.nodes.find((item) => item.id === nodeId) as TCell10Kv
        if (node) {

          //ПОТОМ
          node[keyOne][keyTwo] = `${value}`

        }
      })
    },

  })))

export default useStore;



// function isCell10Kv(node: PossibleNode): node is produce.WritableDraft<TCell10Kv> {
//   return (node as TCell10Kv).type === "Cell10Kv"
// }