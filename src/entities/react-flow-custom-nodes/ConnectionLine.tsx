import {
  ConnectionLineComponentProps,
  getSimpleBezierPath,
  getSmoothStepPath,
} from "@xyflow/react";

export function ConnectionLine({
  fromX,
  fromY,
  toX,
  toY,
  connectionStatus,
}: ConnectionLineComponentProps) {
  const [d] = getSimpleBezierPath({ sourceX: fromX, sourceY: fromY, targetX: toX, targetY: toY });

  let color = "black";
  if (connectionStatus === "valid") color = "#66cd00";
  if (connectionStatus === "invalid") color = "#ff2400";

  return <path className="animated" fill="none" stroke={color} strokeWidth={3} d={d} />;
}
