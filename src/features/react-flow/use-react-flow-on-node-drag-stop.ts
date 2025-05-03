import { PossibleNode, TCell10Kv } from "@/shared/appStore/react-flow-types";
import { NodeDragEventType } from "./types";
import { useReactFlow } from "@xyflow/react";
import useStore from "@/shared/appStore/store";
import { useCallback, useState } from "react";
import { useGetNodeChildrenIds } from "@/shared/lib/model/use-get-node-children";


export function useReactFlowOnNodeDragStop() {
    const [fixatorIdState, setFixatorIdState] = useState<string | null | undefined>(null)
    const nodes = useStore(state => state.nodes)
    const cells = nodes.filter(item => item.type === 'Cell10Kv')
    const { getIntersectingNodes } = useReactFlow();
    const setNodes = useStore(state => state.setNodes)
    const setMultipleProps = useStore(state => state.setMultipleProps)
    // const childOfFixator = useGetNodeChildrenIds(fixatorIdState)
    const onReactFlowNodeDragStop = useCallback((_: NodeDragEventType,
        node: PossibleNode) => {
        const intersec = getIntersectingNodes(node);
        if (!intersec.length) return;
        if (node.type === "Cell10Kv") {
            const fixatorId = intersec?.find(
                (item) => item.type === "Fixator10Kv"
            )?.id;
            console.log({ fixatorId })
            if (fixatorId) {


                const childOfFixator = cells.find(item => item.parentId === fixatorId)

                if (childOfFixator != undefined) return

                setMultipleProps({
                    nodeId: node.id,
                    options: {
                        draggable: false,
                        // expandParent: true,
                        parentId: fixatorId,
                        position: {
                            x: -142,
                            y: 0,
                        },
                    },
                });

                setNodes((ns) =>
                    ns.map((n) => ({
                        ...n,
                        className: "",
                    }))
                );

            }
        }
    }

        , [cells])
    return { onReactFlowNodeDragStop }
}