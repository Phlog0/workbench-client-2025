import { BaseEdge, EdgeProps, getSmoothStepPath } from "@xyflow/react";
import { memo } from "react";

export const WireEdge = memo(
  ({
    sourceX,
    sourceY,
    targetX,
    targetY,

    markerEnd,
    selected,
  }: EdgeProps) => {
    const [d] = getSmoothStepPath({ sourceX, sourceY, targetX, targetY });
    return (
      <>
        <BaseEdge
          style={{ stroke: "#000000", strokeWidth: selected ? 5 : 2 }}
          path={d}
          markerEnd={markerEnd}
          markerHeight={20}
          markerWidth={20}
        />

        <div className="w-4 h-4 bg-red-500">1</div>
        <svg>
          <defs>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" result="glow" />
            </filter>
          </defs>
          <circle r={4} fill="#3b82f6" filter="url(#glow)">
            <animateMotion dur={"6s"} repeatCount={"indefinite"} path={d} />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </>
    );
  },
);
