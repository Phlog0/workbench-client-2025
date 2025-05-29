import useStore from "@/shared/appStore/store";
import { Edge, Node } from "@xyflow/react";
import { useCallback } from "react";

export function useReactFlowOnChange() {
  // const [selectedNodes, setSelectedNodes] = useState<string[] | []>([]);
  const setSelectedNodeId = useStore((state) => state.setSelectedNodeId);

  const onChange = useCallback(({ nodes }: { nodes: Node[]; edges: Edge[] }) => {
    if (nodes.length === 0) {
      setSelectedNodeId([""]);
      return;
    }
    setSelectedNodeId(nodes.map((node) => node.id));
  }, []);
  return { onChange };
}
