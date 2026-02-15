import { Point, PointDragEvent, PointHandler, SectionType } from "./types";
type DragEdgeProps = {
  type: SectionType;
  setPoints: PointHandler;
  event: PointDragEvent;
  zoom: number;
  points: Point[];
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
