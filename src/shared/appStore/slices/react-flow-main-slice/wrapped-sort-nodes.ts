import { WritableDraft } from "immer";
import { SharedSlice } from "../types";

// * В будущем и Edges! (а хотя зачем, они же в отдельном массиве...)
export function wrappedSortNodes(state: WritableDraft<SharedSlice>) {
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
  const sections35Kv = state.nodes.filter((item) => item.type === "Section35Kv");
  const fixators35Kv = state.nodes.filter((item) => item.type === "Fixator35Kv");
  const cells35Kv = state.nodes.filter((item) => item.type === "Cell35Kv");
  state.nodes = [
    ...images,
    ...powerTransformers1004Kv,
    ...sections35Kv,
    ...sections10Kv,
    ...sections04Kv,
    ...fixatorContainers,
    ...fixators35Kv,
    ...fixators10Kv,
    ...fixators04Kv,
    ...cells35Kv,
    ...cells10Kv,
    ...cells04Kv,
  ];
}
