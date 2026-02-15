import { useCallback, useEffect, useRef, useState } from "react";
import { ReactMouseEvent } from "../types";

import { useBoundStore } from "@/shared/appStore";
import { PossibleNode, ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { ExternalReactFlowDimensions, SetExternalReactFlowDimensions } from "@/pages/FlowLayout";

type MenuType = {
  id: ReactFlowNodeId;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};
export function useReactFlowContextMenu(
  externalReactFlowDimensions: ExternalReactFlowDimensions,
  setExternalReactFlowDimensions: SetExternalReactFlowDimensions,
) {
  const setSelectedNodeId = useBoundStore((state) => state.setSelectedNodeId);

  const [menu, setMenu] = useState<MenuType | null>();

  const reactFlowRef = useRef<null | HTMLDivElement>(null);
  // const [reactFlowDimensions, setReactFlowDimensions] = useState({
  //   width: 0,
  //   height: 0,
  // });

  useEffect(() => {
    if (!reactFlowRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      setExternalReactFlowDimensions({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(reactFlowRef.current);

    return () => {
      observer.disconnect();
    };
  }, [setExternalReactFlowDimensions]);
  const onNodeContextMenu = useCallback(
    (event: ReactMouseEvent, node: PossibleNode) => {
      if (!(node.type === "Cell10Kv" || node.type === "Cell04Kv" || node.type === "Cell35Kv"))
        return;
      event.preventDefault();

      const pane = reactFlowRef.current?.getBoundingClientRect();
      if (pane) {
        setMenu({
          id: node.id,
          top: event.clientY < pane.height - 150 ? event.clientY : undefined,
          left: event.clientX < pane.width - 150 ? event.clientX : undefined,
          right: event.clientX >= pane.width - 150 ? pane.width - event.clientX : undefined,
          bottom: event.clientY >= pane.height - 150 ? pane.height - event.clientY : undefined,
        });
        setSelectedNodeId([node.id]);
      }
    },
    [reactFlowRef, setSelectedNodeId, setMenu],
  );
  const onPaneClick = useCallback(() => {
    setMenu(null);
    setSelectedNodeId([]);
  }, [setMenu, setSelectedNodeId]);

  return { menu, reactFlowRef, onNodeContextMenu, onPaneClick, externalReactFlowDimensions };
}
