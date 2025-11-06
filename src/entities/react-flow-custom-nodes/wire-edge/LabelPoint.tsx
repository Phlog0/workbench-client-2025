import { useBoundStore } from "@/shared/appStore";
import { EdgeLabelRenderer, useReactFlow } from "@xyflow/react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { drag } from "d3-drag";
import { select } from "d3-selection";
type LabelPointProps = {
  x: number;
  y: number;
  setPoints: Dispatch<SetStateAction<{ x: number; y: number }[]>>;
  id: number;
};
export function LabelPoint({ x, y, setPoints, id }: LabelPointProps) {
  const { screenToFlowPosition } = useReactFlow();
  const zoom = useBoundStore((state) => state.viewport).zoom;
  const edgeRef = useRef(null);
  //   const [point, setPoint] = useState({ x, y });
  useEffect(() => {
    if (edgeRef.current) {
      const d3Selection = select(edgeRef.current);

      d3Selection.call(
        drag().on("drag", (event) => {
          //   setPoint((prev) => ());
          setPoints((prev) => {
            return prev?.map((item, index) => {
              if (index !== id) return item;
              if (index === id) return { x: item.x + event.dx / zoom, y: item.y + event.dy / zoom };
            });
          });
        }),
      );
    }
  }, [edgeRef, zoom, setPoints, id]);
  return (
    <EdgeLabelRenderer>
      <div
        ref={edgeRef}
        draggable={true}
        className="nopan"
        style={{
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${x}px,${y}px)`,
          background: "#ffcc00",
          padding: 10,
          borderRadius: 5,
          fontSize: 12,
          fontWeight: 700,
          pointerEvents: "all",
        }}
        // onMouseMove={(e) => {
        //   e.preventDefault();

        //   const dragX = e.clientX;
        //   const dragY = e.clientY;
        //   const pointsArr = [...points];
        //   pointsArr[index] = screenToFlowPosition({ x: dragX, y: dragY }, { snapToGrid: false });
        //   setPoints(pointsArr);
        // }}
      ></div>
    </EdgeLabelRenderer>
  );
}
