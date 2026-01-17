import { useBoundStore } from "@/shared/appStore";
import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { useMemo } from "react";

export function useGetCurrentNode(selectedNodeId: string) {
  const nodes = useBoundStore((state) => state.nodes);
  const node = useMemo(() => {
    return nodes.find((node) => node.id === selectedNodeId);
  }, [selectedNodeId, nodes]);
  return node as PossibleNode;
}
