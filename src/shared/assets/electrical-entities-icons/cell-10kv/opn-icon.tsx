import { ICON_HEIGHT, DEFAULT_CELL_STROKE_WIDTH } from "@/shared/react-flow/nodes/measures";

export function OpnIcon({
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
      <g clip-path="url(#clip0_3_1670)">
        <path d="M300 -4V600" stroke="black" strokeWidth={strokeWidth} />
        <path d="M300 7H460" stroke="black" strokeWidth={strokeWidth} />
        <path d="M458 82V4" stroke="black" strokeWidth={strokeWidth} />
        <path d="M405 196V163" stroke="black" strokeWidth={strokeWidth} />
        <path d="M458 208V175" stroke="black" strokeWidth={strokeWidth} />
        <path d="M404 165L510 88" stroke="black" strokeWidth={strokeWidth} />
        <path
          d="M300 12C302.761 12 305 9.76142 305 7C305 4.23858 302.761 2 300 2C297.239 2 295 4.23858 295 7C295 9.76142 297.239 12 300 12Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path d="M478 82H438V172H478V82Z" stroke="black" strokeWidth={strokeWidth} />
        <path d="M425 210H491" stroke="black" strokeWidth={strokeWidth} />
        <path d="M478 225L438 225.05" stroke="black" strokeWidth={strokeWidth} />
        <path d="M467 240L448 240.02" stroke="black" strokeWidth={strokeWidth} />
      </g>
      <defs>
        <clipPath id="clip0_3_1670">
          <rect width="600" height="600" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
