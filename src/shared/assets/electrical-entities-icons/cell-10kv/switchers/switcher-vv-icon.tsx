import { ICON_HEIGHT, DEFAULT_CELL_STROKE_WIDTH } from "@/shared/react-flow/nodes/measures";

export function SwitcherVvIcon({
  className,
  color,
  height = ICON_HEIGHT,
  strokeWidth = DEFAULT_CELL_STROKE_WIDTH,
}: {
  className?: string;
  height?: number;
  strokeWidth?: number;
  color?: string;
}) {
  return (
    <svg
      className={className}
      width="600"
      height={height || "600"}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M300 335V522" stroke="black" strokeWidth={strokeWidth} />
      <path d="M300 0V60" stroke="black" strokeWidth={strokeWidth} />
      <path d="M300 60V260" stroke="black" strokeWidth={strokeWidth} />
      <path d="M300 540V600" stroke="black" strokeWidth={strokeWidth} />
      <path d="M242 265L301 337" stroke="black" strokeWidth={strokeWidth} />
      <path d="M276 82L302 56" stroke="black" strokeWidth={strokeWidth} />
      <path d="M302 526L276 500" stroke="black" strokeWidth={strokeWidth} />
      <path d="M276 100L302 74" stroke="black" strokeWidth={strokeWidth} />
      <path d="M302 544L276 518" stroke="black" strokeWidth={strokeWidth} />
      <path d="M298 56L324 82" stroke="black" strokeWidth={strokeWidth} />
      <path d="M324 500L298 526" stroke="black" strokeWidth={strokeWidth} />
      <path d="M298 74L324 100" stroke="black" strokeWidth={strokeWidth} />
      <path d="M290 253L310 273" stroke="black" strokeWidth={strokeWidth} />
      <path d="M290 273L310 253" stroke="black" strokeWidth={strokeWidth} />
      <path d="M324 518L298 544" stroke="black" strokeWidth={strokeWidth} />
    </svg>
  );
}
