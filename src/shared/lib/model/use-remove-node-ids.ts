import { PossibleNode } from "@/shared/appStore/react-flow-types";
import { ReactFLowNodeId } from "@/shared/appStore/types";
import { useNodes } from "@xyflow/react";

export function useRemoveNodeIds() {

    const nodes = useNodes() as PossibleNode[]

    const extractIds = (rootId: ReactFLowNodeId | ReactFLowNodeId[]) => {
        let ids: ReactFLowNodeId[] = []

        const findChildren = (parentId: ReactFLowNodeId | ReactFLowNodeId[]) => {


            const childrenIds = nodes.filter(item => {
                if (item.parentId) return parentId.includes(item?.parentId)
            }).map(item => item.id)
            // console.log({ childrenIds })
            childrenIds.forEach(item => ids.push(item))
            // console.log({ ids })
            if (childrenIds.length !== 0) { findChildren(childrenIds) } else { return }
        }
        findChildren(rootId)
        return ids
    }


    return { extractIds }
}