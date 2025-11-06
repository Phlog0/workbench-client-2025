import { DEFAULT_CELL_STROKE_WIDTH, ICON_HEIGHT } from "@/shared/react-flow/nodes/measures";

export function UkrmIcon({
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
      <g clipPath="url(#clip0_3_1753)">
        <path d="M300 -4V257" stroke={color} strokeWidth={strokeWidth} />
        <path d="M283.1 426V536" stroke={color} strokeWidth={strokeWidth} />
        <path d="M412.36 335L317.1 390" stroke={color} strokeWidth={strokeWidth} />
        <path d="M187.71 336L282.97 391" stroke={color} strokeWidth={strokeWidth} />
        <path d="M317.1 426V536" stroke={color} strokeWidth={strokeWidth} />
        <path d="M428.97 364L333.71 419" stroke={color} strokeWidth={strokeWidth} />
        <path d="M171.1 365L266.36 420" stroke={color} strokeWidth={strokeWidth} />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M366.008 365.158L360.812 368.158L300.099 263L238.922 368.961L233.727 365.961L300.099 251L366.008 365.158ZM219.988 389.756L164.999 485H286.099V479H175.392L225.185 392.756L219.988 389.756ZM435.199 485H314.099V479H424.807L374.55 391.953L379.746 388.953L435.199 485Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_1753">
          <rect width="600" height="600" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
