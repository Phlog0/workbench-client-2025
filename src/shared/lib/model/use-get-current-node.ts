import useStore from "@/shared/appStore/store"
import { AllNodesPropertiesTypes } from "@/shared/appStore/properties-types"

export function useGetCurrentNode(selectedNodeId: string) {

    const nodes = useStore(state => state.nodes)
    const node = nodes.find(node => node.id === selectedNodeId) as AllNodesPropertiesTypes
    return { node }

}