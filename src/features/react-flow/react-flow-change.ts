import { Node } from "@xyflow/react";
import { SelectedNodeId } from "@/shared/appStore/types";
export const onReactFlowChange =
    (
        setSelectedNodeId: (nodeId: SelectedNodeId) => void,
        setSelectedNodes: React.Dispatch<React.SetStateAction<string[] | []>>) => {

        return ({ nodes }: { nodes: Node[] }) => {
            setSelectedNodes(nodes.map((node) => node.id));
            if (nodes.length > 1 || nodes.length === 0) {
                setSelectedNodeId("");
                return;
            }
            setSelectedNodeId(nodes[0].id);
        }
    }