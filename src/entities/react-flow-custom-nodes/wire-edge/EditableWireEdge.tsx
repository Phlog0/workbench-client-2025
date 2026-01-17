import { BaseEdge, EdgeProps } from "@xyflow/react";
import { memo, useState } from "react";
import { LabelPoint } from "./LabelPoint";
import { createOrthogonalEdgePath } from "./generate-orthogonal-edge-path";

export const EditableWireEdge = memo(
  ({ sourceX, sourceY, targetX, targetY, markerEnd, markerStart, selected }: EdgeProps) => {
    const [points, setPoints] = useState([
      { id: 0, x: sourceX, y: sourceY }, // Начальная точка
      { id: 1, x: sourceX, y: 250 }, // Первый изгиб: вертикаль → горизонталь (v1)
      { id: 2, x: -1100, y: 250 }, // Второй изгиб: горизонталь → вертикаль (h1)
      { id: 3, x: -1100, y: 480 }, // Третий изгиб: вертикаль → горизонталь (v2)
      { id: 4, x: -900, y: 480 }, // Четвертый изгиб: горизонталь → вертикаль (h2)
      { id: 5, x: -900, y: 650 }, // Пятый изгиб: вертикаль → горизонталь
      { id: 6, x: targetX, y: 650 }, // Предпоследняя точка
      { id: 7, x: targetX, y: targetY }, // Конечная точка
    ]);

    const [tempPoints, setTempPoints] = useState(points);
    const edgePath = createOrthogonalEdgePath(points);
    return (
      <>
        {/* Основная линия */}

        <BaseEdge
          style={{
            stroke: selected ? "#3b82f6" : "#000000",
            strokeWidth: selected ? 3 : 2,
            fill: "none",
          }}
          path={edgePath}
          markerEnd={markerEnd}
          markerStart={markerStart}
          markerHeight={20}
          markerWidth={20}
        />

        {/* Точки управления */}
        {selected &&
          new Array(points.length - 1).fill(null).map((_, index) => {
            const point1 = points[index];
            const point2 = points[index + 1];
            return (
              <LabelPoint
                sourceX={sourceX}
                sourceY={sourceY}
                key={index}
                points={[point1, point2]}
                setPoints={setPoints}
                tempPoints={tempPoints}
                setTempPoints={setTempPoints}
                type={index % 2 === 0 ? "vertical" : "horizontal"}
              />
            );
          })}

        {/* Анимированный маркер */}
        <svg style={{ overflow: "visible", position: "absolute", top: 0, left: 0 }}>
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Маркер-стрелка */}
            <marker
              id="arrow-marker"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
            </marker>
          </defs>

          {/* Анимированная точка */}
          <circle r="4" fill="#3b82f6" filter="url(#glow)">
            <animateMotion dur="4s" repeatCount="indefinite" path={edgePath} rotate="auto" />
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </>
    );
  },
);

EditableWireEdge.displayName = "EditableWireEdge";
