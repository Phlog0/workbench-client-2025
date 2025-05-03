import { CELL_MEASURES } from "@/shared/appStore/mockData";
import { NodeTypesUnion, PossibleNode, TCell10Kv } from "@/shared/appStore/react-flow-types";
import { v4 as uuidv4 } from "uuid";
import { useCallback } from "react";
import { useReactFlow } from "@xyflow/react";
import { useDnD } from "@/app/DnDContext/DnDContext";
import useStore from "@/shared/appStore/store";
import { INITIAL_CELL_10KV } from "./initial-nodes";
import { INITIAL_CELL_10KV_METRICS, INITIAL_SECTION_10KV_METRICS } from "@/shared/constants/measures";
import { createCell10Kv, createSection10Kv } from "./create-initial-nodes";

export function useDragAndDropItems() {
    const addNode = useStore(state => state.addNode)
    const setNodes = useStore(state => state.setNodes)
    const { screenToFlowPosition } =
        useReactFlow();
    const [type] = useDnD();
    const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }, []);





    const onReactFlowDrop =
        useCallback((
            event: React.DragEvent<HTMLDivElement>,
            // projectId: string
        ) => {

            event.preventDefault();

            if (!type) {
                return;
            }

            let position
            let newNode
            switch (type) {
                case 'Cell10Kv':
                    // position = screenToFlowPosition({
                    //     x: event.clientX - CELL_10KV_METRICS.measured.width / 8,
                    //     y: event.clientY - CELL_10KV_METRICS.measured.height / 8,
                    // });
                    newNode = createCell10Kv({ event, screenToFlowPosition, projectId: '123' })
                    addNode(newNode);
                    break;
                case 'Section10Kv':

                    const newNodes = createSection10Kv({ event, screenToFlowPosition, projectId: '123' })
                    setNodes(prev => [...prev, ...newNodes]);
                    break;

                default:
                    break;
            }



            // mutation.mutate(newNode);
        }, [screenToFlowPosition, type])


    return { onDragOver, onReactFlowDrop }
}
