import { useCallback, useRef, useState } from "react";
import { ReactMouseEvent } from "./types";
import { PossibleNode } from "@/shared/appStore/react-flow-node-types";
import { ReactFLowNodeId } from "@/shared/appStore/appStore-types";
import useStore from "@/shared/appStore/store";

type MenuType = {
  id: ReactFLowNodeId;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};
export function useReactFlowContextMenu() {
  const setSelectedNodeId = useStore((state) => state.setSelectedNodeId);
  const selectedNodeIds = useStore((state) => state.selectedNodeIds);
  const [menu, setMenu] = useState<MenuType | null>();
  const reactFlowRef = useRef<null | HTMLDivElement>(null);

  const onNodeContextMenu = useCallback(
    (event: ReactMouseEvent, node: PossibleNode) => {
      // Prevent native context menu from showing
      // return
      if (node.type !== "Cell10Kv") return;
      event.preventDefault();
      //!setSelectedId

      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      const pane = reactFlowRef.current?.getBoundingClientRect();
      if (pane)
        setMenu({
          id: node.id,
          top: event.clientY < pane.height - 200 ? event.clientY : undefined,
          left: event.clientX < pane.width - 200 ? event.clientX : undefined,
          right: event.clientX >= pane.width - 200 ? pane.width - event.clientX : undefined,
          bottom: event.clientY >= pane.height - 200 ? pane.height - event.clientY : undefined,
        });
      setSelectedNodeId([node.id]);
    },
    [setMenu, selectedNodeIds, setSelectedNodeId],
  );
  const onPaneClick = useCallback(() => {
    setMenu(null);
    setSelectedNodeId([]);
  }, [setMenu, setSelectedNodeId]);

  return { menu, reactFlowRef, onNodeContextMenu, onPaneClick };
}
