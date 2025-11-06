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
  { nodeId, nodeDataFlag, properties },
) => {
  state.isSyncing = true;

  const node = state.nodes.find((item) => item.id === nodeId);
  if (node && nodeDataFlag) {
    Object.assign(node.data, properties);
    return;
  }
  if (node) {
    Object.assign(node, properties);
  }
};
