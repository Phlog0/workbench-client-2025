import { useMemo, useRef } from "react";

import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  useOnSelectionChange,
  useReactFlow,
  useNodes,
  useNodesState,
  Node,
} from "@xyflow/react";
import { useShallow } from "zustand/react/shallow";
import "@xyflow/react/dist/style.css";
import useStore from "shared/appStore/store";

import { nodeTypesEntities } from "@/entities/react-flow-nodes";

import { useParams } from "react-router-dom";
import { useDnD } from "@/app/DnDContext/DnDContext";

import { useToast } from "@/shared/lib/use-toast";
import {
  getThemeSelector,
  reactFLowSelectors,
} from "@/shared/appStore/my-selectors";
import {
  useReactFlowOnNodeDragStop,
  useReactFlowOnNodeDrag,
  useDragAndDropItems,
  useReactFlowOnChange,
} from "@/features/react-flow";
import { cn } from "@/shared/lib/react-std";
import { useRemoveNodeIds } from "@/shared/lib/model";
import { PossibleNode } from "@/shared/appStore/react-flow-types";

interface ErrorResponse {
  statusCode: number;
  message: string;
}
export const Flow = ({ className }: { className?: string }) => {
  const { id: projectId } = useParams();

  const [type] = useDnD();
  const reactFlowWrapper = useRef(null);
  const { toast } = useToast();

  const { onReactFlowNodeDragStop } = useReactFlowOnNodeDragStop();
  const { onReactFlowNodeDrag } = useReactFlowOnNodeDrag();
  const { onDragOver, onReactFlowDrop } = useDragAndDropItems();
  const { onChange } = useReactFlowOnChange();

  const selectedNodeIds = useStore((state) => state.selectedNodeIds);

  const { extractIds } = useRemoveNodeIds();
  // todo вынести
  // const { data, isFetching, error } = useQuery<
  //   ProjectResponseData,
  //   ErrorResponse
  // >({
  //   queryKey: ["project"],
  //   // onError: (error) => alert(`Something went wrong: ${error.message}`),
  //   queryFn: async (): Promise<ProjectResponseData> => {
  //     const response = await fetch(`${fetchAPI}projects/${projectId}a`);
  //     if (!response.ok) {
  //       console.log(response);
  //       const errorResponse = await response.json();
  //       const { statusCode, message } = errorResponse;
  //       throw { statusCode, message };
  //     }
  //     const result = await response.json();

  //     return result;
  //   },
  // });

  // todo вынести
  // const mutation = useMutation({
  //   mutationFn: (newTodo: PossibleNode) => {
  //     return axios.post(`${fetchAPI}projects`, newTodo);
  //   },
  // });

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(reactFLowSelectors)
  );

  const usenodes = useNodes();
  const nodeTypes = useMemo(() => nodeTypesEntities, []); //Вынести в хук
  const removeNode = useStore((state) => state.removeNode);
  const projectTheme = useStore(getThemeSelector);

  const onReactFlowErrorHandler = (code: string, message: string) => {};

  // useEffect(() => {
  //   if (error) {
  //     toast({
  //       title: `${error.statusCode}`,
  //       description: `${error.message}`,
  //       action: <h1>Undo</h1>,
  //     });
  //   }
  // }, [error]);

  const handleDelete = (nodes: PossibleNode[]) => {
    console.log(nodes);
    const idsToDelete = extractIds([...selectedNodeIds]);
    removeNode([...idsToDelete, ...selectedNodeIds]);
  };
  // * -------------------------SELECTING -------------------------
  // * https://reactflow.dev/api-reference/hooks/use-on-selection-change
  useOnSelectionChange({
    onChange,
  });
  // * ------------------------------------------------------------
  console.log(nodes);
  return (
    <main className={cn("project-flow dark:bg-slate-800}", className)}>
      <div
        style={{ width: "100%", height: "100%" }}
        ref={reactFlowWrapper}
        className="relative"
      >
        {/* <motion.div
        variants={{
          visible: { opacity: 1, display: "block" },
          hidden: { opacity: 0, display: "none" },
        }}
        initial="visible"
        animate={!isFetching && "hidden"}
        className={clsx(
          "absolute top-0 left-0 backdrop-blur-2xl w-full h-full z-10",
          "grid place-content-center"
        )}
      >
        <Spinner />
      </motion.div> */}

        {/* ФЛАГИ-КОНСТАНТЫ */}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onReactFlowDrop}
          onDragOver={onDragOver}
          colorMode={projectTheme}
          onNodeDrag={onReactFlowNodeDrag}
          onNodeDragStop={onReactFlowNodeDragStop}
          minZoom={0.05}
          onNodesDelete={handleDelete}
        >
          <Controls />
          <MiniMap />
          <Background
            id="1"
            gap={10}
            color="#f1f1f1"
            variant={BackgroundVariant.Lines}
          />

          <Background
            id="2"
            gap={100}
            color="#ccc"
            variant={BackgroundVariant.Lines}
          />
          <p>Selected nodes: {selectedNodeIds.join(", ")}</p>
        </ReactFlow>
      </div>
    </main>
  );
};
