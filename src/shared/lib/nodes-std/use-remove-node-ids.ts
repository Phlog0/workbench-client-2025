import { PossibleNode, ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { useNodes } from "@xyflow/react";

// Переименовать. Это не просто useRemoveNodeIds, это найти всех детей по иерархии (section -> section-container -> fixator -> cell)
export function useRemoveNodeIds() {
  const nodes = useNodes<PossibleNode>();

  const extractIds = (rootId: ReactFlowNodeId[]) => {
    const ids: ReactFlowNodeId[] = [];

    const findChildren = (parentId: ReactFlowNodeId[]) => {
      const childrenIds = nodes
        .filter(item => {
          if (item.parentId) return parentId.includes(item?.parentId);
        })
        .map(item => item.id);
      childrenIds.forEach(item => ids.push(item));
      if (childrenIds.length !== 0) {
        findChildren(childrenIds);
      } else {
        return;
      }
    };
    findChildren(rootId);
    return ids;
  };

  return extractIds;
}
