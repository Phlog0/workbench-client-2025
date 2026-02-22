import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";

export function useGetNodeChildrenIds(nodeId: ReactFlowNodeId): ReactFlowNodeId[] {
  const nodes = useBoundStore(state => state.nodes);
  const childrenIds = nodes.filter(item => item.parentId === nodeId).map(item => item.id);
  return childrenIds;
}
