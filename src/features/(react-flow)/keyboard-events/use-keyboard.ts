import { v4 as uuidv4 } from "uuid";
import { useBoundStore } from "@/shared/appStore";
// import { PossibleEdge } from "@/shared/react-flow/edges";
import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function useKeyboard() {
  const { setSelectedNodeId, nodes, edges, setSelectedEdgeId, selectedNodeIds, setNodes } =
    useBoundStore((state) => state);
  const [copyNodesTemp, setCopyNodesTemp] = useState<PossibleNode[]>([]);
  //   const [copyEdgesTemp, setCopyEdgesTemp] = useState<PossibleEdge[]>([]);
  useEffect(() => {
    const handleSelectAll = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key.toLowerCase() === "a" || event.key.toLowerCase() === "ф")
      ) {
        event.preventDefault();
        console.log({ nodes });
        setSelectedNodeId(nodes.map((item) => item.id));
        setSelectedEdgeId(edges.map((item) => item.id));
      }
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key.toLowerCase() === "c" || event.key.toLowerCase() === "с")
      ) {
        event.preventDefault();
        if (!selectedNodeIds.length) {
          return;
        }
        const newNodes: PossibleNode[] = nodes
          .filter((item) => selectedNodeIds.includes(item.id))
          .map((node) => ({
            ...node,
            id: uuidv4(),
            position: {
              x: node.position.x + 100,
              y: node.position.y + 100,
            },
          }));

        // у Edge есть source & target. Тебе нужно соотнести старые nodes с копиями и присвоить нужные id (это похоже на то, как я делал импорт проекта в 1 версии с циклами)
        // const newEdges: PossibleEdge[] = edges
        //   .filter((item) => selectedNodeIds.includes(item.id))
        //   .map((edge) => ({
        //     ...edge,
        //     id: uuidv4(),

        //   }));

        setCopyNodesTemp(newNodes);
        // setCopyEdgesTemp(newEdges);
        toast.info("Скопировано!");
      }
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key.toLowerCase() === "v" || event.key.toLowerCase() === "м")
      ) {
        event.preventDefault();
        setNodes((prev) => [...prev, ...copyNodesTemp]);
        // setEdges((prev) => [...prev, ...copyEdgesTemp]);
      }
    };

    document.addEventListener("keydown", handleSelectAll);
    return () => {
      document.removeEventListener("keydown", handleSelectAll);
    };
  }, [
    copyNodesTemp,
    edges,
    nodes,
    setSelectedEdgeId,
    selectedNodeIds,
    setNodes,
    setSelectedNodeId,
  ]);
}
