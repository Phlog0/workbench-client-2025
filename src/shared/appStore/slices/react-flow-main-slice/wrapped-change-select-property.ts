import { WritableDraft } from "immer";
import { SharedSlice } from "../types";
import { ReactFlowNodesPropertiesActions } from "../types/react-flow-nodes";
import { TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS } from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import { resetCell10Kv } from "./reset-properties-cell-10kv";
import { TTypeOfCellCell10Kv } from "@/shared/react-flow/nodes/cells/cell-10kv/types";

type OriginalReducer = ReactFlowNodesPropertiesActions["changeSelectPropery"];

type WrappedReducer = (
  state: WritableDraft<SharedSlice>,
  ...args: Parameters<OriginalReducer>
) => void;
export const wrappedChangeSelectProperty: WrappedReducer = (state, { key1, nodeId, value }) => {
  state.isSyncing = true;
  const node = state.nodes.find((item) => item.id === nodeId);

  if (node) {
    node.data[key1] = value;
    if (key1 === "typeOfCell" && node.type === "Cell10Kv") {
      resetCell10Kv(value as TTypeOfCellCell10Kv, node.data);
    }
    if (
      key1 === "typeOfSwitchingDevice" &&
      (node.type === "Cell10Kv" || node.type === "Cell35Kv")
    ) {
      if (value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.vv) {
        node.data.switchingDevice = { typeOfDevice: "VV" };
      }
      if (value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.vn) {
        node.data.switchingDevice = { typeOfDevice: "VN" };
      }
      if (value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.r) {
        node.data.switchingDevice = { typeOfDevice: "R" };
      }
    }
  }
};
