import { DEFAULT_CELL_STROKE_WIDTH, ICON_HEIGHT } from "@/shared/react-flow/nodes/measures";

export function SwitcherVn2Icon({
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
      <path d="M300 396V600" stroke={color} strokeWidth={strokeWidth} />
      <path d="M180 362H270" stroke={color} strokeWidth={strokeWidth} />
      <path d="M210 237H300" stroke={color} strokeWidth={strokeWidth} />
      <path d="M180 364V265" stroke={color} strokeWidth={strokeWidth} />
      <path d="M134.99 231.97L225 190" stroke={color} strokeWidth={strokeWidth} />
      <path d="M70 232H137" stroke={color} strokeWidth={strokeWidth} />
      <path d="M68 264.98V198.98" stroke={color} strokeWidth={strokeWidth} />
      <path d="M51 251.98V211.98" stroke={color} strokeWidth={strokeWidth} />
      <path d="M34 240.98V221.98" stroke={color} strokeWidth={strokeWidth} />
      <path d="M210 255V219" stroke={color} strokeWidth={strokeWidth} />
      <path d="M300 0V300" stroke={color} strokeWidth={strokeWidth} />
      <path d="M240 326L300.9 398.58" stroke={color} strokeWidth={strokeWidth} />
      <path d="M286 303H314.28" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M300 317C303.866 317 307 313.866 307 310C307 306.134 303.866 303 300 303C296.134 303 293 306.134 293 310C293 313.866 296.134 317 300 317Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M300 242C302.761 242 305 239.761 305 237C305 234.239 302.761 232 300 232C297.239 232 295 234.239 295 237C295 239.761 297.239 242 300 242Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
