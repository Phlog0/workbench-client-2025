import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Node, XYPosition } from "@xyflow/react";
import { motion } from "framer-motion";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  Connection,
  useOnSelectionChange,
  useReactFlow,
  useNodes,
} from "@xyflow/react";
import { useShallow } from "zustand/react/shallow";
import "@xyflow/react/dist/style.css";
import useStore from "shared/appStore/store";
import { AllNodes, AppState, PossibleNode } from "shared/appStore/types";
import {
  Cell04KvNode,
  Cell10KvNode,
  nodeTypesEntities,
  PowerTransformerNode,
  Section04KvNode,
  Section10KvNode,
} from "@/entities/react-flow-nodes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchAPI } from "@/shared/constants";
import { ProjectResponseData } from "@/shared/appStore/project-response-types";
import { useParams } from "react-router-dom";
import { Button, Spinner } from "@/shared/ui";
import { useDnD } from "@/app/DnDContext/DnDContext";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { cell10KvProperties } from "@/entities/mockNodeProperties";

import { useToast } from "@/shared/lib/use-toast";
import clsx from "clsx";
import { reactFLowSelectors } from "@/shared/appStore/my-selectors";
import { onReactFlowChange, onReactFlowDrop } from "@/features/react-flow";

interface ErrorResponse {
  statusCode: number;
  message: string;
}
export const Flow = () => {
  const { id: projectId } = useParams();
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();
  const reactFlowWrapper = useRef(null);
  const { toast } = useToast();

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

  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setSelectedNodeId,
    addNode,
  } = useStore(useShallow(reactFLowSelectors));
  const usenodes = useNodes();
  const { getNodesBounds } = useReactFlow();
  // console.log(getNodesBounds(nodes));
  const nodeTypes = useMemo(() => nodeTypesEntities, []);
  const [selectedNodes, setSelectedNodes] = useState<string[] | []>([]);

  // const onChange = useCallback(
  //   ({ usenodes }: { usenodes: Node[] }) => {
  //     console.log(useNodes)
  //     setSelectedNodes(usenodes.map((node) => node.id));
  //     if (usenodes.length === 0) {
  //       setSelectedNodeId(null);
  //     }
  //     // setSelectedNodeId(nodes[0].id);
  //   },

  //   []
  // );

  // * -------------------------SELECTING -------------------------
  const onChange = useCallback(
    onReactFlowChange(setSelectedNodeId, setSelectedNodes),
    []
  );
  useOnSelectionChange({
    onChange,
  });
  // * ------------------------------------------------------------

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);


  const onDrop = useCallback(onReactFlowDrop, [screenToFlowPosition, type]);

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

  return (
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
        nodes={nodes || []}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={(event) =>
          onDrop(event, addNode, screenToFlowPosition, type, projectId)
        }
        onDragOver={onDragOver}
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
        <p>Selected nodes: {selectedNodes.join(", ")}</p>
      </ReactFlow>
    </div>
  );
};
