import useStore from "@/shared/appStore/store";
import { useRemoveNodeIds } from "@/shared/lib/model";
import { cn } from "@/shared/lib/react-std";
import { Button } from "@/shared/ui";

export function RemoveReactFlowNodeButton({
  className,
}: {
  className?: string;
}) {
  const removeNode = useStore((state) => state.removeNode);
  const selectedNodeIds = useStore((state) => state.selectedNodeIds);
  const { extractIds } = useRemoveNodeIds();
  const handleClick = () => {
    const idsToDelete = extractIds(selectedNodeIds);
    // console.log(idsToDelete);
    removeNode([...idsToDelete, ...selectedNodeIds]);
  };

  return (
    <Button
      // disabled={!selectedNodeId}
      onClick={handleClick}
      className={cn(className)}
    >
      Удалить
    </Button>
  );
}
