import { DEFAULT_CELL_STROKE_WIDTH, ICON_HEIGHT } from "@/shared/react-flow/nodes/measures";

export function VykatnoyRazjemIcon({
  className,
  color = "black",
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
      <g clipPath="url(#clip0_3_1767)">
        <path d="M300 -4V600" stroke={color} strokeWidth={strokeWidth} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M338.1 490H261.89L300 556L338.1 490ZM327.71 496H272.28L300 544L327.71 496Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_1767">
          <rect width="600" height="600" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
