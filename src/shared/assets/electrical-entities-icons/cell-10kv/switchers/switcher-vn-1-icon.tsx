import { DEFAULT_CELL_STROKE_WIDTH, ICON_HEIGHT } from "@/shared/react-flow/nodes/measures";

export function SwitcherVn1Icon({
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
      <g clip-path="url(#clip0_3_1565)">
        <path d="M300 335V600" stroke="black" strokeWidth={strokeWidth} />
        <path d="M180 300H270" stroke="black" strokeWidth={strokeWidth} />
        <path d="M210 414H300" stroke="black" strokeWidth={strokeWidth} />
        <path d="M180 396V297" stroke="black" strokeWidth={strokeWidth} />
        <path d="M119.99 395.98L210 354.01" stroke="black" strokeWidth={strokeWidth} />
        <path d="M55 396H122" stroke="black" strokeWidth={strokeWidth} />
        <g opacity="0.9">
          <path d="M53 429V363" stroke="black" strokeWidth={strokeWidth} />
        </g>
        <g opacity="0.9">
          <path d="M36 416V376" stroke="black" strokeWidth={strokeWidth} />
        </g>
        <g opacity="0.9">
          <path d="M19 405V386" stroke="black" strokeWidth={strokeWidth} />
        </g>
        <path d="M210 432V396" stroke="black" strokeWidth={strokeWidth} />
        <path d="M300 -5V255" stroke="black" strokeWidth={strokeWidth} />
        <path d="M240 264L300.9 336.58" stroke="black" strokeWidth={strokeWidth} />
        <path d="M286 258H314.28" stroke="black" strokeWidth={strokeWidth} />
        <path
          d="M300 272C303.866 272 307 268.866 307 265C307 261.134 303.866 258 300 258C296.134 258 293 261.134 293 265C293 268.866 296.134 272 300 272Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path
          d="M299 419C301.761 419 304 416.761 304 414C304 411.239 301.761 409 299 409C296.239 409 294 411.239 294 414C294 416.761 296.239 419 299 419Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_1565">
          <rect width="600" height="600" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
