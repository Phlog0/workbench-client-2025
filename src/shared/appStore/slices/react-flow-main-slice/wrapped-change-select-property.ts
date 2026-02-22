// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { WritableDraft } from "immer";
import { SharedSlice } from "../types";

import { TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS } from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import { resetCell10Kv } from "./reset-properties-cell-10kv";
import {
  TCell10KvData,
  TTypeOfCellCell10Kv,
} from "@/shared/react-flow/nodes/cells/cell-10kv/types";
import { PossibleNode, ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";

export const wrappedChangeSelectProperty = <T extends PossibleNode["data"]>(
  state: WritableDraft<SharedSlice>,
  {
    nodeId,
    key1,
    value,
  }: {
    nodeId: ReactFlowNodeId;
    key1: keyof T;
    value: T[typeof key1]; // Или лучше T[typeof key1] для точности
  }
) => {
  state.isSyncing = true;
  const node = state.nodes.find(item => item.id === nodeId);

  if (node) {
    if (node.type === "Cell10Kv") {
      const nodeData = node.data as WritableDraft<TCell10KvData>;
      nodeData[key1 as keyof TCell10KvData] = value as TCell10KvData[keyof TCell10KvData];
      if (key1 === "typeOfCell" && node.type === "Cell10Kv") {
        resetCell10Kv(value as TTypeOfCellCell10Kv, node.data);
      }
    }
    if (
      key1 === "typeOfSwitchingDevice" &&
      (node.type === "Cell10Kv" || node.type === "Cell35Kv" || node.type === "Cell04Kv")
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
