import { useReactFlow } from "@xyflow/react";
import { ReactFlowNodeId } from "../../../shared/appStore/slices/types/react-flow-nodes";
import { Button } from "../../../shared/ui";
import { TCell10Kv } from "../../../shared/types/react-flow-node-types";
import { useBoundStore } from "../../../shared/appStore";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
type ContextMenuCoordinatsProps = {
  id: ReactFlowNodeId;
  top?: number; // CSS position properties can be string (e.g., "10px", "50%") or number (e.g., 10, which defaults to px)
  left?: number;
  right?: number;
  bottom?: number;
};

type ContextMenuProps = {
  onClick: () => void;
  contextMenuCoordinats: ContextMenuCoordinatsProps;
};
export function ContextMenu({ contextMenuCoordinats, onClick }: ContextMenuProps) {
  //   const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
  const setMultipleProps = useBoundStore((state) => state.setMultipleProps);
  const { bottom, id, left, top, right } = contextMenuCoordinats;

  const { getNodesBounds } = useReactFlow();
  const cell10kv = useGetCurrentNode(id);
  const bounds = getNodesBounds([cell10kv]);
  const handleClick = () => {
    setMultipleProps({
      nodeId: id,
      options: {
        parentId: "",
        draggable: true,
        position: {
          y: bounds.y + 50,
          x: bounds.x + 50,
        },
      },
    });
  };
  return (
    <div
      style={{ top, left, right, bottom }}
      className="bg-slate-200 absolute p-1 flex flex-col gap-1 text-center z-10"
      onClick={onClick}
    >
      <h3>node: {id}</h3>
      <Button className="cursor-pointer" onClick={handleClick}>
        Отсоединить ячейку
      </Button>
    </div>
  );
}
