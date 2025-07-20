import { useBoundStore } from "@/shared/appStore";
import { PossibleNode } from "@/shared/types";

export function useGetCurrentNode(selectedNodeId: string) {
  const nodes = useBoundStore((state) => state.nodes);
  const node = nodes.find((node) => node.id === selectedNodeId);
  return node as PossibleNode;
}
