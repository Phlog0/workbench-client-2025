import { BaseEdge, EdgeProps } from "@xyflow/react";
import { memo, useState } from "react";

import { LabelPoint } from "./LabelPoint";

export const WireEdge = memo(
  ({
    sourceX,
    sourceY,
    targetX,
    targetY,

    markerEnd,
    selected,
  }: EdgeProps) => {
    const centerY = (targetY - sourceY) / 2 + sourceY;
    const centerX = (targetX - sourceX) / 2 + sourceX;
    const centerPoint = (target: number, source: number) => (target - source) / 2 + source;
    const [points, setPoints] = useState([
      // { x: sourceX, y: centerY },
      { x: sourceX, y: centerPoint(centerY, sourceY) },
      { x: centerX, y: centerY },
      { x: targetX, y: centerPoint(centerY, targetY) },
    ]);

    //   const edgePath = `
    //   M ${sourceX} ${sourceY}
    //   v ${(targetY - sourceY) / 2 - 30}
    //   h ${targetX - sourceX}
    //     v ${(targetY - sourceY) / 2 + 30}
    //  `;

    // * лучше конечно делать с абсолютной величиной (большие буквы)
    const edgePath = `
    M ${sourceX} ${sourceY}
    L ${points?.[0]?.x} ${centerY}
    L ${targetX} ${centerY}
    L ${targetX} ${targetY}
    `;
    // // * 1. Сколько линий L столько и точек
    // // * 2. маркер должен быть посередине ЛЮБОЙ линии (линия может быть в 2 раза меньше обычной).
    // // * 3. edgePath и точки немного другие теперь

    // const edgePath = generateOrthogonalEdgePath(sourceX, sourceY, targetX, targetY, 0, 0);
    return (
      <>
        <BaseEdge
          style={{ stroke: "#000000", strokeWidth: selected ? 5 : 2 }}
          path={edgePath}
          markerEnd={markerEnd}
          markerHeight={20}
          markerWidth={20}
        />

        {points?.map((point, index) => (
          <LabelPoint key={index} x={point.x} y={point.y} setPoints={setPoints} id={index} />
          // <EdgeLabelRenderer key={index}>
          //   <div
          //     draggable={true}
          //     className="nopan"
          //     style={{
          //       position: "absolute",
          //       transform: `translate(-50%, -50%) translate(${point.x}px,${point.y}px)`,
          //       background: "#ffcc00",
          //       padding: 10,
          //       borderRadius: 5,
          //       fontSize: 12,
          //       fontWeight: 700,
          //       pointerEvents: "all",
          //     }}
          //     onMouseMove={(e) => {
          //       e.preventDefault();

          //       const dragX = e.clientX;
          //       const dragY = e.clientY;
          //       const pointsArr = [...points];
          //       pointsArr[index] = screenToFlowPosition(
          //         { x: dragX, y: dragY },
          //         { snapToGrid: false },
          //       );
          //       setPoints(pointsArr);
          //       isMouseDown.current = true;
          //     }}
          //   >
          //     hi
          //   </div>
          // </EdgeLabelRenderer>
        ))}
        <div className="w-4 h-4 bg-red-500">1</div>
        <svg>
          <defs>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" result="glow" />
            </filter>
          </defs>
          <circle r={4} fill="#3b82f6" filter="url(#glow)">
            <animateMotion dur={"6s"} repeatCount={"indefinite"} path={edgePath} />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </>
    );
  },
);
