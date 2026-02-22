//* нужен для быстрой смены SelectedNodeId

import { useBoundStore } from "@/shared/appStore";
import { PossibleEdge } from "@/shared/react-flow/edges";
import { PossibleNode } from "@/shared/react-flow/nodes/shared";

import { useCallback } from "react";

export function useReactFlowOnChange() {
  // const [selectedNodes, setSelectedNodes] = useState<string[] | []>([]);
  const setSelectedNodeId = useBoundStore(state => state.setSelectedNodeId);
  const setSelectedEdgeId = useBoundStore(state => state.setSelectedEdgeId);
  const setFolderType = useBoundStore(state => state.setFolderType);

  const onChange = useCallback(
    ({ nodes, edges }: { nodes: PossibleNode[]; edges: PossibleEdge[] }) => {
      setSelectedNodeId(nodes.map(node => node.id));
      setSelectedEdgeId(edges.map(edge => edge.id));
      setFolderType(nodes[0]?.type || "");
    },
    //   {
    //   if (nodes.length === 0) {
    //     setSelectedNodeId([]);
    //     setFolderType("");
    //   }
    //   if (edges.length === 0) {
    //     setSelectedEdgeId([]);
    //   }

    //   setSelectedNodeId(
    //     nodes
    //       .filter(
    //         (node) =>
    //           node.type === "Cell04Kv" ||
    //           node.type === "Cell10Kv" ||
    //           node.type === "Section10Kv" ||
    //           node.type === "Section04Kv" ||
    //           node.type === "PowerTransformer1004Kv" ||
    //           node.type === "Image",
    //       )
    //       .map((node) => node.id),
    //   );
    //   setSelectedEdgeId(edges.map((edge) => edge.id));
    //   if (nodes[0]?.type && nodes.length === 1) {
    //     setFolderType(nodes[0].type);
    //   }
    // }
    [setFolderType, setSelectedEdgeId, setSelectedNodeId]
  );
  return onChange;
}
