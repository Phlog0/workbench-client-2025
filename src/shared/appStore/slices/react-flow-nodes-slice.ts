import { addEdge, applyNodeChanges, applyEdgeChanges } from "@xyflow/react";

import { SESSION_STORAGE_KEYS } from "@/shared/constants";
import { ReactFlowNodesSlice } from "./types/react-flow-nodes";
import { TCell10Kv } from "../../types/react-flow-node-types";
import { resetCell10Kv } from "./reset-properties-cell-10kv";
import {
  TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV,
  TypeOfCellOptions_10KV,
} from "@/shared/constants/10kv";
import { ImmerStateCreator } from "./types";
import { debounce, throttle } from "lodash";
import { projectApi } from "@/shared/api";
import { RFinstance } from "@/shared/api/types";

// const syncProjectScheme = debounce(async (rFInstance: RFinstance) => {
//   const projectId = Number(sessionStorage.getItem(SESSION_STORAGE_KEYS.projectId));
//   const projectScheme: RFinstance = {
//     nodes: rFInstance.nodes.map((node) => ({ ...node, selected: false })),
//     edges: rFInstance.edges,
//     viewport: rFInstance.viewport,
//   };
//   await projectApi.syncProjectScheme(projectId, projectScheme);
// }, 1000);

export const createReactFlowNodesSlice: ImmerStateCreator<ReactFlowNodesSlice> = (set, get) => ({
  nodes: [],
  edges: [],
  selectedNodeIds: [],
  viewport: { x: 0, y: 0, zoom: 1 },
  isSyncing: false,
  syncError: null,

  setAfterFetch: (nodes, edges, viewport) => {
    console.log(nodes, edges, viewport);
    set({
      nodes,
      edges,
      viewport,
      isSyncing: false,
    });
  },
  resetState: () => {
    set({
      nodes: [],
      edges: [],
      selectedNodeIds: [],
      viewport: { x: 0, y: 0, zoom: 1 },
      isSyncing: false,
      syncError: null,
    });
  },
  setViewportSync: (viewport) => {
    console.log("Я СРАБОТАЛ");

    set({
      viewport,
    });
    // get().syncProjectScheme();
  },
  onNodesChange: (changes) => {
    set((state) => {
      const currentNodes = get().nodes;
      if (currentNodes !== null) {
        return {
          nodes: applyNodeChanges(changes, currentNodes),
          isSyncing: true,
        };
      }
      return state;
    });
    get().syncProjectScheme();
  },
  onEdgesChange: (changes) => {
    set((state) => {
      const currentEdges = get().edges;
      if (currentEdges !== null) {
        return {
          edges: applyEdgeChanges(changes, currentEdges),
          isSyncing: true,
        };
      }
      return state;
    });
    get().syncProjectScheme();
  },
  onConnect: (connection) => {
    set((state) => {
      const currentEdges = get().edges;
      if (currentEdges !== null) {
        return {
          edges: addEdge(connection, currentEdges),
          isSyncing: true,
        };
      }
      return state;
    });
  },

  addNode: (node) => {
    set((state) => {
      if (state.nodes !== null) {
        state.nodes.push(node);
        state.isSyncing = true;
      }
      return state;
    });
    get().sortNodes();

    get().syncProjectScheme();
  },

  removeNode(nodeIds) {
    set((state) => {
      state.nodes = state.nodes.filter((item) => !nodeIds.includes(item.id));
      state.isSyncing = true;
    });
    get().syncProjectScheme();
  },
  setNodes: (nodes) => {
    set((state) => {
      state.nodes = typeof nodes === "function" ? nodes(state.nodes) : nodes;
      state.isSyncing = true;
    });
    // get().sortNodes()
    get().syncProjectScheme();
  },
  setEdges: (edges) => {
    set({ edges, isSyncing: true });
    get().syncProjectScheme();
  },

  setSelectedNodeId: (nodeIds) => {
    set((state) => {
      state.selectedNodeIds = nodeIds;
      state.nodes = state.nodes.map((node) => {
        return {
          ...node,
          selected: nodeIds.includes(node.id),
        };
      });
    });
  },

  sortNodes() {
    set((state) => {
      state.isSyncing = true;
      const sections10Kv = state.nodes.filter((item) => item.type === "Section10Kv");
      const fixatorContainers = state.nodes.filter((item) => item.type === "FixatorContainer");
      const fixators10Kv = state.nodes.filter((item) => item.type === "Fixator10Kv");
      const cells10Kv = state.nodes.filter((item) => item.type === "Cell10Kv");
      state.nodes = [...sections10Kv, ...fixatorContainers, ...fixators10Kv, ...cells10Kv];
    });
  },
  changeSelectPropery: ({ nodeId, key1, value }) => {
    set((state) => {
      state.isSyncing = true;
      const node = state.nodes.find((item) => item.id === nodeId) as TCell10Kv;
      if (node) {
        node.data[key1] = value;
        if (key1 === "typeOfCell") resetCell10Kv(value as TypeOfCellOptions_10KV, node.data);
        if (key1 === "typeOfSwitchingDevice") {
          if (value === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV.vv)
            node.data.switchingDevice = { typeOfDevice: "VV" };
          if (value === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV.vn)
            node.data.switchingDevice = { typeOfDevice: "VN" };
          if (value === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV.r)
            node.data.switchingDevice = { typeOfDevice: "R" };
        }
      }
    });
    get().syncProjectScheme();
  },

  changeInputPropertyTCell10Kv: ({ nodeId, keyOne, keyTwo, value }) => {
    set((state) => {
      state.isSyncing = true;
      const node = state.nodes.find((item) => item.id === nodeId);
      if (node?.type === "Cell10Kv") {
        if (node) {
          if (!node.data) {
            node.data = {};
          }
          if (!node.data[keyOne]) {
            node.data[keyOne] = {};
          }
          if (!keyTwo) {
            node.data[keyOne] = value;
          } else {
            node.data[keyOne][keyTwo] = `${value}`;
          }
        }
      }
    });
    get().syncProjectScheme();
  },
  selectReadyMadeSolution: ({ nodeId, keyOne, value }) => {
    set((state) => {
      state.isSyncing = true;
      const node = state.nodes.find((item) => item.id === nodeId);
      if (node) {
        if (node?.type === "Cell10Kv") {
          if (!node.data[keyOne]) node.data[keyOne] = {};
          if (node.data.typeOfSwitchingDevice !== "Нет") {
            node.data[keyOne] = {
              ...node.data[keyOne],
              ...value,
            };
          } else {
            node.data[keyOne] = value;
          }
        }
      }
    });
    get().syncProjectScheme();
  },

  // для cell10kv & fixators
  setMultipleProps: ({ nodeId, options }) => {
    set((state) => {
      state.isSyncing = true;

      const node = state.nodes.find((item) => item.id === nodeId);
      if (node?.type === "Cell10Kv")
        if (node) {
          for (const key in options) {
            node[key] = options[key];
          }
        }
    });
    get().syncProjectScheme();
  },

  increaseSectionWidth: ({ sectionId, fixatorContainerId }) => {
    set((state) => {
      state.isSyncing = true;
      const section = state.nodes.find((item) => item.id === sectionId);
      if (section && section.type === "Section10Kv") {
        const fixatorContainer = state.nodes.find((item) => item.id === fixatorContainerId);
        section.data.width += 300;
        if (fixatorContainer && fixatorContainer.type === "FixatorContainer") {
          fixatorContainer.data.width += 300;
        }
      }
    });
    get().syncProjectScheme();
  },
  decreaseSectionWidth: ({ sectionId, fixatorContainerId }) => {
    set((state) => {
      state.isSyncing = true;
      const section = state.nodes.find((item) => item.id === sectionId);
      if (section && section.type === "Section10Kv") {
        const fixatorContainer = state.nodes.find((item) => item.id === fixatorContainerId);
        section.data.width -= 300;
        if (fixatorContainer && fixatorContainer.type === "FixatorContainer") {
          fixatorContainer.data.width -= 300;
        }
      }
    });
    get().syncProjectScheme();
  },

  syncProjectScheme: throttle(async () => {
    try {
      const nodes = get().nodes;
      const edges = get().edges;
      const viewport = get().viewport;

      set({ isSyncing: true, syncError: null });
      const projectId = Number(sessionStorage.getItem(SESSION_STORAGE_KEYS.projectId));

      const projectScheme: RFinstance = {
        nodes: nodes.map((node) => ({ ...node, selected: false })),
        edges: edges,
        viewport: viewport,
      };
      await projectApi.syncProjectScheme(projectId, projectScheme);
    } catch (error: unknown) {
      set({ syncError: error instanceof Error ? error.message : "Sync failed" });
    } finally {
      set({ isSyncing: false });
    }
  }, 1000),
});

// export default useStore;

// function isCell10Kv(node: PossibleNode): node is produce.WritableDraft<TCell10Kv> {
//   return (node as TCell10Kv).type === "Cell10Kv"
// }
