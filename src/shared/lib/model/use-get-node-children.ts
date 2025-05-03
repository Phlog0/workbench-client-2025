import useStore from "@/shared/appStore/store";

export function useGetNodeChildrenIds(nodeId?: string | null) {
  const nodes = useStore((state) => state.nodes);
  const childrenIds = nodes
    .filter((item) => item.parentId === nodeId)
    .map((item) => item.id);
  return childrenIds;
}
