import { WritableDraft } from "immer";
import { SharedSlice } from "../types";
import { ReactFlowNodesPropertiesActions } from "../types/react-flow-nodes";
type OriginalAction = ReactFlowNodesPropertiesActions["increaseSectionWidth"];

type WrappedAction = (
  state: WritableDraft<SharedSlice>,
  ...args: Parameters<OriginalAction>
) => void;
export const increaseSectionWidth: WrappedAction = (state, { fixatorContainerId, sectionId }) => {
  state.isSyncing = true;
  const section = state.nodes.find(item => item.id === sectionId);
  if (
    section &&
    (section.type === "Section10Kv" ||
      section.type === "Section04Kv" ||
      section.type === "Section35Kv")
  ) {
    const fixatorContainer = state.nodes.find(item => item.id === fixatorContainerId);
    section.data.width += 300;
    if (fixatorContainer && fixatorContainer.type === "FixatorContainer") {
      fixatorContainer.data.width += 300;
    }
  }
};
