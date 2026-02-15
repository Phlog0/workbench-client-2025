import { useBoundStore } from "@/shared/appStore";
import { cn } from "@/shared/lib/cn";
import { useRemoveNodeIds } from "@/shared/lib/nodes-std";
import { Button } from "@/shared/ui";
import { useShallow } from "zustand/shallow";

export function RemoveReactFlowNodeButton({ className }: { className?: string }) {
  const removeNode = useBoundStore((state) => state.removeNode);
  const removeEdge = useBoundStore((state) => state.removeEdge);
  const selectedNodeIds = useBoundStore(useShallow((state) => state.selectedNodeIds));
  const selectedEdgeIds = useBoundStore(useShallow((state) => state.selectedEdgeIds));
  const extractIds = useRemoveNodeIds();
  const handleClick = () => {
    const idsToDelete = extractIds(selectedNodeIds);
    removeNode([...idsToDelete, ...selectedNodeIds]);
    removeEdge(selectedEdgeIds);
  };
  return (
    <Button
      disabled={selectedNodeIds.length === 0 && selectedEdgeIds.length === 0 ? true : false}
      onClick={handleClick}
      className={cn(className)}
    >
      Удалить
    </Button>
  );
}
