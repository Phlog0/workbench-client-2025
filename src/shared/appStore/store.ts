import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import { immer } from 'zustand/middleware/immer'
import { initialNodes } from './mockData';
import { initialEdges } from './mockData';
import { AppPropertiesAction, AppReactFlowBasicActions, AppState } from './types';
import { TCell10Kv, TFixatorContainer, TSection10Kv } from './react-flow-types';
import { AllNodesPropertiesTypes } from './properties-types';
import { resetCell10Kv } from './actions-utils';
// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<AppState & AppReactFlowBasicActions & AppPropertiesAction>()(
  immer((set, get) => ({
    nodes: initialNodes,
    edges: initialEdges,
    selectedNodeIds: [""],
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

    removeNode(nodeIds) {
      console.log(nodeIds)
      set(state => { state.nodes = state.nodes.filter(item => !(nodeIds.includes(item.id))) })
    },
    setNodes: (nodes) => {

      set((state) => ({ nodes: typeof nodes === 'function' ? nodes(state.nodes) : nodes }));
    },
    setEdges: (edges) => {

      set({ edges });

    },

    setSelectedNodeId: (nodeIds) => {

      set((state) => {
        state.selectedNodeIds = nodeIds
      })
    },

    changeSelectPropery: ({ nodeId, prop, value }) => {
      console.log(nodeId, prop, value)

      set((state) => {
        const node = state.nodes.find((item) => item.id === nodeId) as AllNodesPropertiesTypes
        if (node) {
          node[prop] = value
          if (prop === 'typeOfCell') resetCell10Kv(value, node)

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

          if (!keyTwo) {
            node[keyOne] = value
            return
          }

          if (!node[keyOne]) {
            node[keyOne] = {}
          }
          //ПОТОМ
          node[keyOne][keyTwo] = `${value}`

        }
      })
    },
    selectReadyMadeSolution: ({ nodeId, keyOne, value }) => {
      console.log(nodeId, keyOne, value)
      set((state) => {
        const node = state.nodes.find((item) => item.id === nodeId) as TCell10Kv
        if (node) {
          node[keyOne] = { ...value }

        }
      })
    },

    setMultipleProps: ({ nodeId, options }) => {
      set((state) => {
        const node = state.nodes.find((item) => item.id === nodeId) as TCell10Kv
        if (node) {
          for (const key in options) {
            node[key] = options[key]
          }

        }
      })
    },


    increaseSectionWidth: ({ sectionId, fixatorContainerId }) => {
      set((state) => {
        const section = state.nodes.find(item => item.id === sectionId) as (TSection10Kv)
        const fixatorContainer = state.nodes.find(item => item.id === fixatorContainerId) as TFixatorContainer
        if (section.measured?.width && fixatorContainer?.measured?.width) {
          // ! Uncaught TypeError: Cannot assign to read only property 'width' of object '#<Object>'
          // ! https://reactflow.dev/api-reference/types/node#notes
          console.log('++++++++++++#0')
          section.measured.width += 300
          fixatorContainer.measured.width += 300

          // fixatorContainer.width += 300
        }


      })
    },
    decreaseSectionWidth: ({ sectionId, fixatorContainerId, lastFixatorId }) => {
      set((state) => {
        const section = state.nodes.find(item => item.id === sectionId) as (TSection10Kv)
        const fixatorContainer = state.nodes.find(item => item.id === fixatorContainerId) as TFixatorContainer
        if (section.measured?.width && fixatorContainer?.measured?.width) {
          section.measured.width -= 300
          fixatorContainer.measured.width -= 300

          state.nodes = state.nodes.filter(item => item.id !== lastFixatorId)
          // fixatorContainer.width += 300
        }


      })
    },

  })))

export default useStore;



// function isCell10Kv(node: PossibleNode): node is produce.WritableDraft<TCell10Kv> {
//   return (node as TCell10Kv).type === "Cell10Kv"
// }