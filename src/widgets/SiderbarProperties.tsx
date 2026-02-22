import { cn } from "@/shared/lib/cn";
import { PropertiesCell10Kv } from "@/features/(properties)/properties-cell-10kv";
import { useBoundStore } from "@/shared/appStore";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { PropertiesCell04Kv } from "@/features/(properties)/properties-cell-04kv";
import { PropertiesSection10Kv } from "@/features/(properties)/properties-section-10kv";
import { PropertiesPt1004Kv } from "@/features/(properties)/properties-pt-1004kv";
import { PropertiesCell35Kv } from "@/features/(properties)/properties-cell-35kv";
import { PropertiesSection04Kv } from "@/features/(properties)/properties-section-04kv";
import { PropertiesSection35Kv } from "@/features/(properties)/properties-section-35kv";
import { PropertiesPt3510Kv } from "@/features/(properties)/properties-pt-3510kv";
import { drag } from "d3-drag";
import { select } from "d3-selection";
import { useEffect, useRef, useState } from "react";
import { useShallow } from "zustand/shallow";
export const SiderbarProperties = ({
  className,
  isModalOpen,
}: {
  className?: string;
  isModalOpen?: boolean;
}) => {
  const selectedNodeIds = useBoundStore(useShallow(state => state.selectedNodeIds));
  const selectedNodeId = selectedNodeIds && selectedNodeIds[0];
  const currentNode = useGetCurrentNode(selectedNodeId);

  const rightDragRef = useRef<HTMLDivElement>(null);

  const [rightWidth, setRightWidth] = useState(25);

  const rightWidthRef = useRef(rightWidth);

  const [isRightDragging, setIsRightDragging] = useState(false);

  useEffect(() => {
    rightWidthRef.current = rightWidth;
  }, [rightWidth]);

  useEffect(() => {
    const element = rightDragRef.current;
    if (!element) {
      return;
    }

    const handler = drag<HTMLDivElement, unknown>()
      .on("start", () => {
        setIsRightDragging(true);
      })
      .on("drag", event => {
        const deltaVw = (event.dx / window.innerWidth) * 100;
        const newWidth = Math.max(0, Math.min(45, rightWidthRef.current - deltaVw));
        setRightWidth(newWidth);
        rightWidthRef.current = newWidth;
      })
      .on("end", () => {
        setIsRightDragging(false);
      });

    select<HTMLDivElement, unknown>(element).call(handler);
    return () => {
      select<HTMLDivElement, unknown>(element).on(".drag", null);
    };
  }, []);

  return (
    <>
      <aside
        className={cn(
          "container-save-scroll overflow-auto project-properties",

          className
        )}
        style={{
          position: isModalOpen ? "static" : "absolute",
          right: 0,
          width: isModalOpen ? "auto" : rightWidth + "vw",
        }}
      >
        <h2>Выбранные элементы: {JSON.stringify(selectedNodeIds)}</h2>

        {selectedNodeIds?.length === 1 && currentNode?.type === "Cell10Kv" && (
          <PropertiesCell10Kv />
        )}
        {selectedNodeIds?.length === 1 && currentNode?.type === "Cell04Kv" && (
          <PropertiesCell04Kv />
        )}
        {selectedNodeIds?.length === 1 && currentNode?.type === "Section10Kv" && (
          <PropertiesSection10Kv />
        )}
        {selectedNodeIds?.length === 1 && currentNode?.type === "Section04Kv" && (
          <PropertiesSection04Kv />
        )}
        {selectedNodeIds?.length === 1 && currentNode?.type === "Section35Kv" && (
          <PropertiesSection35Kv />
        )}
        {selectedNodeIds?.length === 1 && currentNode?.type === "PowerTransformer1004Kv" && (
          <PropertiesPt1004Kv />
        )}
        {selectedNodeIds?.length === 1 && currentNode?.type === "Cell35Kv" && (
          <PropertiesCell35Kv />
        )}
        {selectedNodeIds?.length === 1 && currentNode?.type === "PowerTransformer3510Kv" && (
          <PropertiesPt3510Kv />
        )}
      </aside>
      <div
        className={cn(
          "bg-slate-500 hover:bg-blue-400 transition-colors",
          {
            "bg-blue-400": isRightDragging,
          },
          "block max-lg:hidden",
          { hidden: isModalOpen }
        )}
        ref={rightDragRef}
        style={{
          position: "absolute",
          top: "15dvh",
          bottom: 0,

          right: `${rightWidth}vw`,
          width: "8px",
          cursor: "col-resize",
          pointerEvents: "auto",
        }}
      />
    </>
  );
};
