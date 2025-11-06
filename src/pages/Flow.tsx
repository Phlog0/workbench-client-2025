import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
} from "@xyflow/react";
import { useShallow } from "zustand/react/shallow";
import "@xyflow/react/dist/style.css";
import { nodeTypesEntities, rfEdgeTypes } from "@/entities/react-flow-custom-nodes";

import { reactFlowBaseSelector } from "@/shared/appStore/slices/selectors";

import { cn } from "@/shared/lib";

import { ContextMenu, useReactFlowContextMenu } from "@/features/(react-flow)/context-menu";

import { HelperLinesRenderer } from "@/features/(react-flow)/helper-lines";
import {
  useReactFlowOnNodeDrag,
  useReactFlowOnNodeDragStop,
} from "@/features/(react-flow)/node-drag-on-flow";
import { useDragAndDropItems } from "@/features/(react-flow)/create-new-nodes-by-dnd";
import { useReactFlowOnChange } from "@/features/(react-flow)";
import { useReactFlowHelperLine } from "@/features/(react-flow)/helper-lines";
import { useRemoveNodeIds } from "@/shared/lib/nodes-std";
import { useBoundStore } from "@/shared/appStore";
import { getThemeSelector } from "@/shared/appStore/slices/selectors";
import { Spinner } from "@/shared/ui/spinners";
import { useParams } from "react-router-dom";
import { useValidConnection, useGetProjectScheme } from "@/features";
import { debounce } from "lodash";
import { ExportJsonProjectButton } from "@/features/export-json-project";

import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { RFInstance } from "@/shared/react-flow/types";
import { ImportProjectJsonButton } from "@/features/import-project";
import { PossibleEdge } from "@/shared/react-flow/edges";
import { UploadImageButton } from "@/features/upload-image";
import { SaveSchemeButton } from "@/features/save-scheme";
import { ConnectionLine } from "@/entities/react-flow-custom-nodes/connection-line";

export const Flow = ({ className }: { className?: string }) => {
  const reactFlowWrapper = useRef(null);

  const { onReactFlowNodeDragStop } = useReactFlowOnNodeDragStop();
  const { onReactFlowNodeDrag } = useReactFlowOnNodeDrag();
  const { onDragOver, onReactFlowDrop } = useDragAndDropItems();
  const onChange = useReactFlowOnChange();

  const { helperLineHorizontal, helperLineVertical, updateHelperLines } = useReactFlowHelperLine();

  const extractIds = useRemoveNodeIds();
  const { menu, onNodeContextMenu, onPaneClick, reactFlowRef } = useReactFlowContextMenu();

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setEdges } = useBoundStore(
    useShallow(reactFlowBaseSelector),
  );

  const setViewportSync = useBoundStore((state) => state.setViewportSync);
  const selectedNodeIds = useBoundStore((state) => state.selectedNodeIds);
  const viewport = useBoundStore((state) => state.viewport);
  const removeNode = useBoundStore((state) => state.removeNode);
  const projectTheme = useBoundStore(getThemeSelector);
  const setProjectId = useBoundStore((state) => state.setProjectId);
  const { projectId } = useParams();

  const { isLoading } = useGetProjectScheme(projectId);
  const [rfInstance, setRfInstance] = useState<RFInstance | null>(null);
  useEffect(() => {
    if (!projectId) {
      console.error("Нет id проекта");
      return;
    }
    setProjectId(projectId);
  }, [projectId, setProjectId]);

  const nodeTypes = useMemo(() => nodeTypesEntities, []); //Вынести в хук

  const isValidConnection = useValidConnection();

  const selectedEdgeIds = useBoundStore(useShallow((state) => state.selectedEdgeIds));

  const removeEdge = useBoundStore((state) => state.removeEdge);

  const handleDelete = () => {
    const idsToDelete = extractIds([...selectedNodeIds]);

    removeNode([...idsToDelete, ...selectedNodeIds]);
    removeEdge(selectedEdgeIds);
  };

  const handleNodeChange = useCallback(
    (changes: NodeChange<PossibleNode>[]) => {
      const sections = nodes.filter((item) => item.type === "Section10Kv");
      const updatedChanges = updateHelperLines(changes, sections);

      onNodesChange(updatedChanges);
    },
    [updateHelperLines, nodes, onNodesChange],
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

  const onReconnect = useCallback(
    (oldEdge: PossibleEdge, newConnection: Connection) =>
      setEdges((els) => reconnectEdge(oldEdge, newConnection, els)),
    [],
  );

  return (
    <main className={cn("project-flow dark:bg-slate-800}", className)}>
      <div style={{ width: "100%", height: "100%" }} ref={reactFlowWrapper} className="relative">
        <motion.div
          variants={{
            visible: { opacity: 1, display: "block" },
            hidden: { opacity: 0, display: "none" },
          }}
          initial="visible"
          animate={!isLoading && "hidden"}
          className={cn(
            "absolute top-0 left-0 backdrop-blur-2xl w-full h-full z-10",
            "grid place-content-center",
          )}
        >
          <Spinner />
        </motion.div>

        {/* ФЛАГИ-КОНСТАНТЫ */}

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
          onInit={setRfInstance}
          defaultViewport={viewport}
          onViewportChange={(viewport) => debouncedSetViewport(viewport)}
          connectionLineComponent={ConnectionLine}
          isValidConnection={isValidConnection}
          panOnScroll={true}
          selectionOnDrag={true}
          panOnDrag={false}
          onReconnect={onReconnect}
          selectionMode={SelectionMode.Partial}
        >
          <Controls />
          <MiniMap />
          <Background id="1" gap={10} color="#f1f1f1" variant={BackgroundVariant.Lines} />

          <Background id="2" gap={100} color="#ccc" variant={BackgroundVariant.Lines} />

          {menu && <ContextMenu onClick={onPaneClick} contextMenuCoordinats={menu} />}
          <HelperLinesRenderer horizontal={helperLineHorizontal} vertical={helperLineVertical} />
          {/* <Panel position="top-left">
            <div className="metrics w-8">
              <p>Selected nodes: {selectedNodeIds.join(", ")}</p>
              {JSON.stringify(viewport)}
            </div>
          </Panel> */}
          <Panel position="top-right" className="flex gap-3">
            <ExportJsonProjectButton rfInstance={rfInstance} projectId={projectId} />
            <ImportProjectJsonButton />
            <UploadImageButton
              reactFlowWidth={reactFlowRef.current?.offsetWidth}
              reactFLowHeight={reactFlowRef.current?.offsetHeight}
            />
            <SaveSchemeButton />
          </Panel>
        </ReactFlow>
      </div>
    </main>
  );
};
