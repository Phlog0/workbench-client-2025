import { WritableDraft } from "immer";
import { SharedSlice } from "../types";
import { ReactFlowNodesPropertiesActions } from "../types/react-flow-nodes";

type OriginalSetMultipleProps = ReactFlowNodesPropertiesActions["setMultipleProps"];

type WrappedSetMultipleProps = (
  state: WritableDraft<SharedSlice>,
  ...args: Parameters<OriginalSetMultipleProps>
) => void;

export const wrappedSetMultipleProps: WrappedSetMultipleProps = (
  state,
  { nodeId, nodeDataFlag, properties }
) => {
  state.isSyncing = true;

  const node = state.nodes.find(item => item.id === nodeId);
  if (!node) {
    return;
  }
  if (nodeDataFlag) {
    Object.assign(node.data, properties);
    // node.data = merge({}, node.data, properties);
  } else {
    Object.assign(node, properties);
    // merge(node, properties);
  }
};
