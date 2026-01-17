import { D3DragEvent } from "d3-drag";
import { Dispatch, SetStateAction } from "react";
type DragEdgeProps = {
  type: "horizontal" | "vertical";
  setPoints: Dispatch<
    SetStateAction<
      {
        id: number;
        x: number;
        y: number;
      }[]
    >
  >;
  event: D3DragEvent<HTMLDivElement, unknown, unknown>;
  zoom: number;
  points: { x: number; y: number; id: number }[];
  sourceY: number;
  sourceX: number;
};
export function dragEdge({
  event,
  setPoints,
  type,
  zoom,
  points,
  sourceY,
  sourceX,
}: DragEdgeProps) {
  console.log(event);
  const isFirstPair = points[0].id === 0;
  if (isFirstPair) {
    setPoints((prev) => {
      const newSegment = [
        { id: -2, x: sourceX, y: sourceY },
        { id: -1, x: points[0].x, y: points[0].y },
      ];

      const shiftedPoints = prev.map((p) => ({
        ...p,
        id: p.id + 2,
      }));

      return [...newSegment, ...shiftedPoints];
    });
  }

  setPoints((prev) => {
    return prev?.map((item) => {
      if (points[0].id === item.id || points[1].id === item.id) {
        console.log(item.id);
        if (type === "horizontal") {
          return {
            ...item,
            y: item.y + event.dy / zoom,
          };
        }
        if (type === "vertical") {
          return {
            ...item,
            x: item.x + event.dx / zoom,
          };
        }
      }

      return item;
    });
  });
}
