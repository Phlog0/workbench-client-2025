import useStore from "@/shared/appStore/store";
import { SelectedNodeId } from "@/shared/appStore/types";
import { Edge, Node } from "@xyflow/react";
import { useCallback, useState } from "react";

export function useReactFlowOnChange() {
    // const [selectedNodes, setSelectedNodes] = useState<string[] | []>([]);
    const setSelectedNodeId = useStore(state => state.setSelectedNodeId)

    const onChange = useCallback(
        ({ nodes, edges }: { nodes: Node[], edges: Edge[] }) => {
            if (nodes.length === 0) {
                setSelectedNodeId([""]);
                return;
            }
           //! setSelectedNodes(nodes.map((node) => node.id));
            setSelectedNodeId(nodes.map((node) => node.id));
        }
        , [])
    return {  onChange }
}