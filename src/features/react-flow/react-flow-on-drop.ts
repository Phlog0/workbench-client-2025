import { cell10KvProperties } from "@/entities/mockNodeProperties";
import { nodeTypes, NodeTypesUnion, PossibleNode, TCell10Kv } from "@/shared/appStore/react-flow-types";
import { XYPosition } from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";
type ScreenToFlowPosition = (
    clientPosition: XYPosition,
    options?: {
        snapToGrid: boolean;
    }
) => XYPosition

export const onReactFlowDrop =
    (
        event: React.DragEvent<HTMLDivElement>,
        addNode: (node: PossibleNode) => void,
        screenToFlowPosition: ScreenToFlowPosition,
        type: NodeTypesUnion,
        projectId: string
    ) => {
        event.preventDefault();

        if (!type) {
            return;
        }

        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });
        const newNodeId = uuidv4();
        let otherProps = {};
        if (type === 'Cell10Kv') {
            otherProps = cell10KvProperties;

            const newNode: TCell10Kv = {
                ...otherProps,
                id: newNodeId,
                type,
                position,
                data: { id: `${newNodeId}` },
                projectId,
                selected: false,
                opn: undefined,

            };
            addNode(newNode);
        }
        // mutation.mutate(newNode);
    }
