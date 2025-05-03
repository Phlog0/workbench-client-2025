import useStore from "@/shared/appStore/store"
import { ReactFLowNodeId } from "@/shared/appStore/types";

export function useGetLastFixator(fixatorContainerId: ReactFLowNodeId) {

    const nodes = useStore(state => state.nodes);
    const fixators = nodes.filter(item => item.type === 'Fixator10Kv')

    const lastFixator = fixators.reduce((acc, item, index, array) => {
        acc = acc.position.x < item.position.x ? item : acc
        return acc
    }, fixators[0])

    return { lastFixatorId: lastFixator?.id }
}