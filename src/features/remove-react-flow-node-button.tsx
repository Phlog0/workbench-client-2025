import { useBoundStore } from "@/shared/appStore";
import { cn } from "@/shared/lib/cn";
import { useRemoveNodeIds } from "@/shared/lib/nodes-std";
import { Button } from "@/shared/ui";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

export function RemoveReactFlowNodeButton({ className }: { className?: string }) {
  const removeNode = useBoundStore((state) => state.removeNode);
  const selectedNodeIds = useBoundStore(useShallow((state) => state.selectedNodeIds));
  const extractIds = useRemoveNodeIds();
  const handleClick = () => {
    const idsToDelete = extractIds(selectedNodeIds);
    // console.log({ selectedNodeIds, idsToDelete });
    removeNode([...idsToDelete, ...selectedNodeIds]);
  };
  // console.log(selectedNodeIds);
  return (
    <Button
      disabled={selectedNodeIds.length === 0 ? false : false}
      onClick={handleClick}
      className={cn(className)}
    >
      Удалить
    </Button>
  );
}
