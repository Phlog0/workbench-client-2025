//* нужен для быстрой смены SelectedNodeId

import { useBoundStore } from "@/shared/appStore";
import { PossibleEdge, PossibleNode } from "@/shared/types";
import { Edge } from "@xyflow/react";
import { useCallback } from "react";
import { useShallow } from "zustand/shallow";
export function useReactFlowOnChange() {
  // const [selectedNodes, setSelectedNodes] = useState<string[] | []>([]);
  const setSelectedNodeId = useBoundStore((state) => state.setSelectedNodeId);
  const selectedNodeIds = useBoundStore(useShallow((state) => state.selectedNodeIds));

  const onChange = useCallback(({ nodes }: { nodes: PossibleNode[]; edges: PossibleEdge[] }) => {
    console.log("hi");
    if (nodes.length === 0) {
      setSelectedNodeId([]);
      return;
    }
    console.log(nodes);
    setSelectedNodeId(nodes.map((node) => node.id));
  }, []);
  return { onChange };
}
