import { PossibleNode, ReactFlowNodeId } from "@/shared/react-flow/nodes";
import { useNodes } from "@xyflow/react";

export function useRemoveNodeIds() {
  const nodes = useNodes() as PossibleNode[];

  const extractIds = (rootId: ReactFlowNodeId[]) => {
    const ids: ReactFlowNodeId[] = [];

    const findChildren = (parentId: ReactFlowNodeId[]) => {
      const childrenIds = nodes
        .filter((item) => {
          if (item.parentId) return parentId.includes(item?.parentId);
        })
        .map((item) => item.id);
      // console.log({ childrenIds })
      childrenIds.forEach((item) => ids.push(item));
      // console.log({ ids })
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
