import { addEdge, applyNodeChanges, applyEdgeChanges, MarkerType } from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";

import { ReactFlowNodesSlice } from "../types/react-flow-nodes";

import { ImmerStateCreator } from "../types";
import { throttle } from "lodash";

import { RFJsonObject } from "@/shared/react-flow/types";
import { PossibleEdge } from "@/shared/react-flow/edges";
import { wrappedSortNodes } from "./wrapped-sort-nodes";
import { decreaseSectionWidth } from "./decrease-section-width";
import { increaseSectionWidth } from "./increase-section-width";
import { wrappedSetMultipleProps } from "./wrapped-set-multiple-props";
import { wrappedChangeSelectProperty } from "./wrapped-change-select-property";
import { $api } from "@/shared/api/services";

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
  selectedEdgeIds: [],
  viewport: { x: 0, y: 0, zoom: 0.5 },
  isSyncing: false,
  syncError: null,
  folderType: "",
  projectId: "",

  setFolderType: (value) => {
    set({
      folderType: value,
    });
  },
  setProjectId: (projectId) => {
    set({
      projectId,
    });
  },
  setAfterFetch: (nodes, edges, viewport) => {
    set({
      nodes,
      edges,
      viewport,
      isSyncing: false,
    });
  },
  resetState: () => {
    // get().syncProjectScheme();
    set({
      nodes: [],
      edges: [],
      selectedNodeIds: [],
      selectedEdgeIds: [],
      viewport: { x: 0, y: 0, zoom: 1 },
      isSyncing: false,
      syncError: null,
    });
  },

  setViewportSync: (viewport) => {
    set({
      viewport,
    });
    // get().syncProjectScheme();
  },
  onNodesChange: (changes) => {
    set((state) => {
      const currentNodes = get().nodes;
      if (currentNodes !== null) {
        get().setNodes((oldNodes) => applyNodeChanges(changes, oldNodes));
        return {
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
        get().setEdges((oldEdges) => applyEdgeChanges(changes, oldEdges));
        return {
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
        const edge: PossibleEdge = {
          ...connection,
          type: "Wire",
          id: uuidv4(),
          markerEnd: { type: MarkerType.Arrow, color: "red" },
        };
        return {
          edges: addEdge(edge, currentEdges),
        };
      }
      return state;
    });
    get().syncProjectScheme();
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
  removeEdge(edgeIds) {
    set((state) => {
      state.edges = state.edges.filter((item) => !edgeIds.includes(item.id));
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
    set((state) => {
      state.edges = typeof edges === "function" ? edges(state.edges) : edges;
      state.isSyncing = true;
    });
    get().syncProjectScheme();
  },

  setSelectedNodeId: (nodeIds) => {
    set((state) => {
      state.selectedNodeIds = nodeIds;
      state.nodes = get().nodes.map((item) => {
        if (nodeIds.includes(item.id)) {
          return { ...item, selected: true };
        } else {
          return item;
        }
      });
    });
  },
  setSelectedEdgeId: (edgeIds) => {
    set((state) => {
      state.selectedEdgeIds = edgeIds;
      state.edges = get().edges.map((item) => {
        if (edgeIds.includes(item.id)) {
          return { ...item, selected: true };
        } else {
          return item;
        }
      });
    });
  },

  sortNodes() {
    set((state) => {
      wrappedSortNodes(state);
    });
  },
  changeSelectPropery: ({ nodeId, key1, value }) => {
    set((state) => {
      wrappedChangeSelectProperty(state, { nodeId, key1, value });
    });
    get().syncProjectScheme();
  },

  changeInputPropertyTCell10Kv: ({ nodeId, keyOne, keyTwo, value }) => {
    set((state) => {
      state.isSyncing = true;
      const node = state.nodes.find((item) => item.id === nodeId);
      if (node) {
        if (!node.data) {
          node.data = {};
        }
        if (!node.data[keyOne]) {
          node.data[keyOne] = {};
        }
        if (keyTwo === null) {
          //* typeOfCell, typeOfSwitchingDevice
          // if(keyOne === '')
          node.data[keyOne] = value;
        } else {
          node.data[keyOne][keyTwo] = value;
        }
      }
    });
    get().syncProjectScheme();
  },
  selectReadyMadeSolution: ({ nodeId, keyOne, values }) => {
    set((state) => {
      state.isSyncing = true;
      const node = state.nodes.find((item) => item.id === nodeId);

      if (node) {
        if (!node.data[keyOne]) {
          node.data[keyOne] = {};
        }
        if (node.type === "Cell10Kv") {
          if (node.data.typeOfSwitchingDevice !== "Нет") {
            node.data[keyOne] = {
              ...node.data[keyOne],
              ...values,
            };
          }
        } else {
          node.data[keyOne] = values;
        }
      }
    });
    get().syncProjectScheme();
  },

  // для cell10kv & fixators
  setMultipleProps: ({ nodeId, properties, nodeDataFlag }) => {
    set((state) => {
      wrappedSetMultipleProps(state, { nodeId, nodeDataFlag, properties });
    });
    get().syncProjectScheme();
  },

  increaseSectionWidth: ({ sectionId, fixatorContainerId }) => {
    set((state) => {
      increaseSectionWidth(state, { sectionId, fixatorContainerId });
    });
    get().syncProjectScheme();
  },
  decreaseSectionWidth: ({ sectionId, fixatorContainerId }) => {
    set((state) => {
      decreaseSectionWidth(state, { sectionId, fixatorContainerId });
    });
    get().syncProjectScheme();
  },

  syncProjectScheme: throttle(async () => {
    try {
      set({ isSyncing: true, syncError: null });
      const nodes = get().nodes;
      // const nodes = get().nodes;
      const edges = get().edges;
      const viewport = get().viewport;
      const projectId = get().projectId;

      if (!projectId) return;
      const projectScheme: RFJsonObject = {
        nodes: nodes.map((node) => ({ ...node, selected: false })),
        edges: edges.map((edge) => ({ ...edge, selected: false })),
        viewport: viewport,
      };
      await $api.projects.syncProjectScheme(projectId, projectScheme);
    } catch (error: unknown) {
      // if (axios.isAxiosError<BadAuthResponse>(error)) {
      // }
      set({ syncError: error instanceof Error ? error.message : "Sync failed" });
    } finally {
      set({ isSyncing: false });
    }
  }, 1000),
});
