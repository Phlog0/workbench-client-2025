import { useDnD } from "@/app/DnDContext";
import { cn } from "@/shared/lib/cn";

import { RF_NODE_TYPES, RFNodeTypesValues } from "@/shared/react-flow/nodes/shared";
import { drag } from "d3-drag";
import { select } from "d3-selection";
import { useEffect, useRef, useState } from "react";
import { Button } from "shared/ui";

const items = [
  {
    title: "Секция 35 кВ",
    type: RF_NODE_TYPES.section35Kv,
  },
  {
    title: "Ячейка 35 кВ",
    type: RF_NODE_TYPES.cell35Kv,
  },
  {
    title: "Силовой трансформатор 35 / 10 кВ",
    type: RF_NODE_TYPES.powerTransformer3510Kv,
  },
  {
    title: "Секция 10 (6) кВ",
    type: RF_NODE_TYPES.section10Kv,
  },
  {
    title: "Ячейка 10 (6) кВ",
    type: RF_NODE_TYPES.cell10Kv,
  },
  {
    title: "Силовой трансформатор 10(6) / 04",
    type: RF_NODE_TYPES.powerTransformer1004Kv,
  },
  {
    title: "Секция 04 кВ",
    type: RF_NODE_TYPES.section04Kv,
  },
  {
    title: "Ячейка 04 кВ",
    type: RF_NODE_TYPES.cell04Kv,
  },
];

export const SidebarFigures = ({
  className,
  isModalOpen,
}: {
  className?: string;
  isModalOpen?: boolean;
}) => {
  const { setType } = useDnD();
  const onDragStart = (event: React.DragEvent, nodeType: RFNodeTypesValues) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  const leftDragRef = useRef<HTMLDivElement>(null);
  const [leftWidth, setLeftWidth] = useState(10);
  const [isLeftDragging, setIsLeftDragging] = useState(false);
  const leftWidthRef = useRef(leftWidth);

  useEffect(() => {
    leftWidthRef.current = leftWidth;
  }, [leftWidth]);

  useEffect(() => {
    const element = leftDragRef.current;
    if (!element) {
      return;
    }

    const handler = drag<HTMLDivElement, unknown>()
      .on("start", () => {
        setIsLeftDragging(true);
      })
      .on("drag", event => {
        const deltaVw = (event.dx / window.innerWidth) * 100;
        const newWidth = Math.max(0, Math.min(45, leftWidthRef.current + deltaVw));
        setLeftWidth(newWidth);
        leftWidthRef.current = newWidth;
      })
      .on("end", () => {
        setIsLeftDragging(false);
      });

    select<HTMLDivElement, unknown>(element).call(handler);
    return () => {
      select<HTMLDivElement, unknown>(element).on(".drag", null);
    };
  }, []);

  return (
    <>
      <aside
        className={cn("project-items", className)}
        // style={{ left: 0, width: leftWidth + "vw" }}
        style={{
          position: isModalOpen ? "static" : "absolute",
          left: 0,
          width: isModalOpen ? "auto" : leftWidth + "vw",
        }}
      >
        <div className="flex flex-col">
          {items.map(item => (
            <Button
              className="rounded-none border-b border-slate-300"
              key={item.type}
              onDragStart={event => onDragStart(event, item.type)}
              draggable
            >
              {item.title}
            </Button>
          ))}
        </div>
      </aside>
      <div
        className={cn(
          "bg-slate-500 hover:bg-blue-400 transition-colors",
          {
            "bg-blue-400": isLeftDragging,
          },
          "block max-lg:hidden",
          { hidden: isModalOpen }
        )}
        ref={leftDragRef}
        style={{
          position: "absolute",
          top: "15dvh",
          bottom: 0,
          left: `${leftWidth}vw`,
          width: "8px",
          cursor: "col-resize",
          pointerEvents: "auto",
          zIndex: 2,
        }}
      />
    </>
  );
};
