import { useCallback, useEffect, useMemo, useRef } from "react";
import { motion } from "motion/react";
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  useOnSelectionChange,
  NodeChange,
  Panel,
  Connection,
  reconnectEdge,
  SelectionMode,
  useReactFlow,
  ConnectionMode,
} from "@xyflow/react";

import { useShallow } from "zustand/react/shallow";
import "@xyflow/react/dist/style.css";
import { nodeTypesEntities, rfEdgeTypes } from "@/entities/react-flow-custom-nodes";

import { reactFlowBaseSelector } from "@/shared/appStore/slices/selectors";

import { cn } from "@/shared/lib";

import { ContextMenu, useReactFlowContextMenu } from "@/features/(react-flow)/context-menu";

import {
  useReactFlowOnNodeDrag,
  useReactFlowOnNodeDragStop,
} from "@/features/(react-flow)/node-drag-on-flow";
import { useDragAndDropItems } from "@/features/(react-flow)/create-new-nodes-by-dnd";
import { useReactFlowOnChange } from "@/features/(react-flow)";

import { useRemoveNodeIds } from "@/shared/lib/nodes-std";
import { useBoundStore } from "@/shared/appStore";
import { getThemeSelector } from "@/shared/appStore/slices/selectors";
import { Spinner } from "@/shared/ui/spinners";
import { useParams } from "react-router-dom";
import { useValidConnection, useGetProjectScheme } from "@/features";
import { debounce } from "lodash";

import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { PossibleEdge } from "@/shared/react-flow/edges";
import { ConnectionLine } from "@/entities/react-flow-custom-nodes/connection-line";
import { toast } from "sonner";
import { useKeyboard } from "@/features/(react-flow)/keyboard-events";
import { CircuitBoard } from "lucide-react";
import { DrawerUI } from "@/shared/ui";
import { ErrorModal, SidebarFigures } from "@/widgets";

import { ExternalReactFlowDimensions, SetExternalReactFlowDimensions } from "./FlowLayout";

export const Flow = ({
  className,
  externalReactFlowDimensions,
  setExternalReactFlowDimensions,
}: {
  className?: string;
  externalReactFlowDimensions: ExternalReactFlowDimensions;
  setExternalReactFlowDimensions: SetExternalReactFlowDimensions;
}) => {
  const reactFlowWrapper = useRef(null);

  const onReactFlowNodeDragStop = useReactFlowOnNodeDragStop();
  const onReactFlowNodeDrag = useReactFlowOnNodeDrag();
  const { onDragOver, onReactFlowDrop } = useDragAndDropItems();
  const onChange = useReactFlowOnChange();

  const extractIds = useRemoveNodeIds();
  const { menu, onNodeContextMenu, onPaneClick, reactFlowRef } = useReactFlowContextMenu(
    externalReactFlowDimensions,
    setExternalReactFlowDimensions
  );

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setEdges } = useBoundStore(
    useShallow(reactFlowBaseSelector)
  );

  const setViewportSync = useBoundStore(state => state.setViewportSync);
  const selectedNodeIds = useBoundStore(useShallow(state => state.selectedNodeIds));
  const viewport = useBoundStore(state => state.viewport);
  const removeNode = useBoundStore(state => state.removeNode);
  const projectTheme = useBoundStore(getThemeSelector);
  const setProjectId = useBoundStore(state => state.setProjectId);
  const { projectId } = useParams();

  const { isLoading, data, isError, error } = useGetProjectScheme(projectId ?? "");
  const setAfterFetch = useBoundStore(state => state.setAfterFetch);
  const { setViewport } = useReactFlow();
  useEffect(() => {
    if (data && "projectScheme" in data && data.projectScheme) {
      setViewport(data.projectScheme.viewport);
      setAfterFetch(
        data.projectScheme.nodes,
        data.projectScheme.edges,
        data.projectScheme.viewport
      );
    }
  }, [data, setViewport, setAfterFetch]);
  // const [rfInstance, setRfInstance] = useState<RFInstance | null>(null);
  useEffect(() => {
    if (!projectId) {
      console.error("Нет id проекта");
      return;
    }
    setProjectId(projectId);
  }, [projectId, setProjectId]);

  useEffect(() => {
    if (isError && error) {
      toast.error(
        `Ошибка. Не смогли загрузить проект из хранилища. Ваши действия не синхронизированы... ${
          error.response?.data.message || "Ошибка"
        }`
      );
    }
  }, [isError, error]);

  const nodeTypes = useMemo(() => nodeTypesEntities, []); //Вынести в хук

  const isValidConnection = useValidConnection();

  const selectedEdgeIds = useBoundStore(useShallow(state => state.selectedEdgeIds));
  useKeyboard();

  const removeEdge = useBoundStore(state => state.removeEdge);

  const handleDelete = () => {
    const idsToDelete = extractIds([...selectedNodeIds]);

    removeNode([...idsToDelete, ...selectedNodeIds]);
    removeEdge(selectedEdgeIds);
  };

  const handleNodeChange = useCallback(
    (changes: NodeChange<PossibleNode>[]) => {
      // const sections = nodes.filter(
      //   (item) =>
      //     item.type === "Section10Kv" || item.type === "Section04Kv" || item.type === "Section35Kv",
      // );
      // const updatedChanges = updateHelperLines(changes, sections);

      // onNodesChange(updatedChanges);
      onNodesChange(changes);
    },
    [onNodesChange]
  );

  // * -------------------------SELECTING -------------------------
  // * https://reactflow.dev/api-reference/hooks/use-on-selection-change

  useOnSelectionChange({
    onChange,
  });

  // * ------------------------------------------------------------
  // const debouncedSetViewport = debounce(setViewportSync, 1000);

  const debouncedSetViewport = useMemo(() => debounce(setViewportSync, 1000), [setViewportSync]);

  // Очистка при размонтировании
  useEffect(() => {
    return () => debouncedSetViewport.cancel();
  }, [debouncedSetViewport]);

  // edge отсоединять и переподсоединять на другие ячейки и тд...
  const onReconnect = (oldEdge: PossibleEdge, newConnection: Connection) =>
    setEdges(els => reconnectEdge(oldEdge, newConnection, els));

  return (
    <main className={cn("project-flow dark:bg-slate-800}", className)}>
      <div
        style={{ width: "100%", height: "100%" }}
        ref={reactFlowWrapper}
        className="relative"
      >
        <motion.div
          variants={{
            visible: { opacity: 1, display: "block" },
            hidden: { opacity: 0, display: "none" },
          }}
          initial="visible"
          animate={!isLoading && "hidden"}
          className={cn(
            "absolute top-0 left-0 backdrop-blur-2xl w-full h-full z-10",
            "grid place-content-center"
          )}
        >
          <Spinner />
        </motion.div>

        <ReactFlow
          ref={reactFlowRef}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={rfEdgeTypes}
          onNodesChange={handleNodeChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onReactFlowDrop}
          onDragOver={onDragOver}
          colorMode={projectTheme}
          onNodeDrag={onReactFlowNodeDrag}
          onNodeDragStop={onReactFlowNodeDragStop}
          minZoom={0.05}
          onDelete={handleDelete}
          onNodeContextMenu={onNodeContextMenu}
          onPaneClick={onPaneClick}
          defaultViewport={viewport}
          onViewportChange={viewport => debouncedSetViewport(viewport)}
          connectionLineComponent={ConnectionLine}
          isValidConnection={isValidConnection}
          panOnScroll={true}
          selectionOnDrag={true}
          panOnDrag={false}
          onReconnect={onReconnect}
          selectionMode={SelectionMode.Partial}
          connectionMode={ConnectionMode.Loose}
          style={{ zIndex: 1000 }}
        >
          <Controls />
          <MiniMap />
          {projectTheme === "light" ? (
            <>
              <Background
                id="1"
                gap={50}
                color="#ccc"
                variant={BackgroundVariant.Cross}
                bgColor="white"
              />
            </>
          ) : (
            <>
              <Background
                id="2"
                gap={50}
                color="#747474"
                variant={BackgroundVariant.Cross}
                bgColor="#454545"
              />
            </>
          )}

          {menu && (
            <ContextMenu
              onClick={onPaneClick}
              contextMenuCoordinats={menu}
            />
          )}

          <Panel
            position="bottom-left"
            style={{ bottom: "7rem" }}
            className="hidden max-lg:block"
          >
            <DrawerUI
              trigger={<CircuitBoard />}
              content={<SidebarFigures isModalOpen={true} />}
              title="Элементы"
              direction="left"
              className="h-screen max-w-[33%] shadow-2xl"
            />
          </Panel>
          <ErrorModal />
        </ReactFlow>
      </div>
    </main>
  );
};
