import { addEdge, applyNodeChanges, applyEdgeChanges, MarkerType } from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";
import { SESSION_STORAGE_KEYS } from "@/shared/constants";
import { ReactFlowNodesSlice } from "./types/react-flow-nodes";
import { resetCell10Kv } from "./reset-properties-cell-10kv";
import { TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS } from "@/shared/react-flow/nodes/cell-10kv/options";
import { ImmerStateCreator } from "./types";
import { throttle } from "lodash";
import { projectApi } from "@/shared/api";
import { RFJsonObject } from "@/shared/react-flow/types";
import { TCell10Kv, TTypeOfCellCell10Kv } from "@/shared/react-flow/nodes/cell-10kv/types";
import { PossibleEdge } from "@/shared/react-flow/edges";

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
  viewport: { x: 0, y: 0, zoom: 1 },
  isSyncing: false,
  syncError: null,
  folderType: "",

  setFolderType: (value) => {
    set({
      folderType: value,
    });
  },
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
          markerEnd: { type: MarkerType.Arrow, width: 20, height: 20, color: "red" },
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
    });
  },
  setSelectedEdgeId: (edgeIds) => {
    set((state) => {
      state.selectedEdgeIds = edgeIds;
    });
  },

  sortNodes() {
    set((state) => {
      state.isSyncing = true;
      const images = state.nodes.filter((item) => item.type === "Image");
      const sections10Kv = state.nodes.filter((item) => item.type === "Section10Kv");
      const fixatorContainers = state.nodes.filter((item) => item.type === "FixatorContainer");
      const fixators10Kv = state.nodes.filter((item) => item.type === "Fixator10Kv");
      const cells10Kv = state.nodes.filter((item) => item.type === "Cell10Kv");
      const powerTransformers1004Kv = state.nodes.filter(
        (item) => item.type === "PowerTransformer1004Kv",
      );
      const sections04Kv = state.nodes.filter((item) => item.type === "Section04Kv");
      const fixators04Kv = state.nodes.filter((item) => item.type === "Fixator04Kv");
      const cells04Kv = state.nodes.filter((item) => item.type === "Cell04Kv");
      state.nodes = [
        ...images,
        ...powerTransformers1004Kv,
        ...sections10Kv,
        ...sections04Kv,
        ...fixatorContainers,
        ...fixators10Kv,
        ...fixators04Kv,
        ...cells10Kv,
        ...cells04Kv,
      ];
    });
  },
  changeSelectPropery: ({ nodeId, key1, value }) => {
    set((state) => {
      state.isSyncing = true;
      const node = state.nodes.find((item) => item.id === nodeId) as TCell10Kv;
      if (node) {
        node.data[key1] = value;
        if (key1 === "typeOfCell") resetCell10Kv(value as TTypeOfCellCell10Kv, node.data);
        if (key1 === "typeOfSwitchingDevice") {
          if (value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.vv)
            node.data.switchingDevice = { typeOfDevice: "VV" };
          if (value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.vn)
            node.data.switchingDevice = { typeOfDevice: "VN" };
          if (value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.r)
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
      console.log(keyOne, keyTwo, value, node?.type);
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
    console.log(nodeId, keyOne, values);
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
  setMultipleProps: ({ nodeId, options }) => {
    set((state) => {
      state.isSyncing = true;

      const node = state.nodes.find((item) => item.id === nodeId);
      if (node?.type === "Cell10Kv" || node?.type === "Cell04Kv")
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
      if (section && (section.type === "Section10Kv" || section.type === "Section04Kv")) {
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
      if (section && (section.type === "Section10Kv" || section.type === "Section04Kv")) {
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
      const projectId = sessionStorage.getItem(SESSION_STORAGE_KEYS.projectId);
      if (!projectId) return;
      const projectScheme: RFJsonObject = {
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
