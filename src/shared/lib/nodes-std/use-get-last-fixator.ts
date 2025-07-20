import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/appStore/slices/types/react-flow-nodes";

export function useGetLastFixator(fixatorContainerId: ReactFlowNodeId) {
  const nodes = useBoundStore((state) => state.nodes);
  const fixators = nodes.filter(
    (item) => item.type === "Fixator10Kv" && item.parentId === fixatorContainerId,
  );

  const lastFixator = fixators.reduce((acc, item, index, array) => {
    acc = acc.position.x < item.position.x ? item : acc;
    return acc;
  }, fixators[0]);

  return { lastFixatorId: lastFixator?.id };
}
