import { AllNodes } from "@/shared/appStore/types";
import { Node } from "@xyflow/react";

export const onReactFlowChange =
    (
        setSelectedNodeId: (selectedNodeId: string | null) => void,
        setSelectedNodes: React.Dispatch<React.SetStateAction<string[] | []>>) => {

        return ({ nodes }: { nodes: Node[] }) => {
            setSelectedNodes(nodes.map((node) => node.id));
            if (nodes.length > 1 || nodes.length === 0) {
                setSelectedNodeId(null);
                return;
            }
            setSelectedNodeId(nodes[0].id);
        }
    }