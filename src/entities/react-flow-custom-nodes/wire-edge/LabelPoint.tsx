import { EdgeLabelRenderer, useReactFlow } from "@xyflow/react";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { D3DragEvent, drag } from "d3-drag";
import { select } from "d3-selection";
import { dragEdge } from "./drag-edge";
type LabelPointProps = {
  setPoints: Dispatch<
    SetStateAction<
      {
        id: number;
        x: number;
        y: number;
      }[]
    >
  >;
  points: { x: number; y: number; id: number }[];
  setTempPoints: Dispatch<
    SetStateAction<
      {
        id: number;
        x: number;
        y: number;
      }[]
    >
  >;
  tempPoints: { x: number; y: number; id: number }[];
  type: "vertical" | "horizontal";
  sourceY: number;
  sourceX: number;
};
export function LabelPoint({ points, type, setPoints, sourceX, sourceY }: LabelPointProps) {
  const { getZoom } = useReactFlow();
  const zoom = getZoom();
  const edgeRef = useRef(null);
  const centerY = (points[0].y + points[1].y) / 2;
  const centerX = (points[0].x + points[1].x) / 2;

  useEffect(() => {
    if (edgeRef?.current) {
      const element: Element = edgeRef.current;
      const d3Selection = select(element);

      d3Selection.call(
        drag().on("drag", (event: D3DragEvent<HTMLDivElement, unknown, unknown>) =>
          dragEdge({ event, setPoints, type, zoom, points, sourceY, sourceX }),
        ),
      );
    }
  }, [edgeRef, zoom, setPoints, type, points, sourceY, sourceX]);

  return (
    <EdgeLabelRenderer>
      <div
        ref={edgeRef}
        draggable={true}
        className="nopan"
        style={{
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${centerX}px,${centerY}px)`,
          background: "#ffcc00",
          padding: 10,
          borderRadius: 5,
          fontSize: 8,
          fontWeight: 700,
          pointerEvents: "all",
        }}
      >
        {points[0].id}-{points[1].id}-{type[0]}
      </div>
      <div
        className="nopan"
        style={{
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${points[0].x}px,${points[0].y}px)`,
          background: "#ff5900",
          padding: 5,
          borderRadius: 9999,
          fontSize: 8,
          fontWeight: 700,
          pointerEvents: "none",
        }}
      />
      <div
        className="nopan"
        style={{
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${points[1].x}px,${points[1].y}px)`,
          background: "#55ff00",
          padding: 5,
          borderRadius: 9999,
          fontSize: 8,
          fontWeight: 700,
          pointerEvents: "none",
        }}
      />
    </EdgeLabelRenderer>
  );
}
