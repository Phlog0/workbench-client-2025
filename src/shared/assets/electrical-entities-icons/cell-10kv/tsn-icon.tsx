import { ICON_HEIGHT, DEFAULT_CELL_STROKE_WIDTH } from "@/shared/react-flow/nodes/measures";

export function TsnIcon({
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
      <g clip-path="url(#clip0_3_1738)">
        <path d="M300 -4V257" stroke="black" strokeWidth={strokeWidth} />
        <path d="M263 404L300 422" stroke="black" strokeWidth={strokeWidth} />
        <path d="M340 410L298 422" stroke="black" strokeWidth={strokeWidth} />
        <path d="M286 463L300 421" stroke="black" strokeWidth={strokeWidth} />
        <path d="M325 441L300 421" stroke="black" strokeWidth={strokeWidth} />
        <path
          d="M300.5 387C336.675 387 366 357.675 366 321.5C366 285.325 336.675 256 300.5 256C264.325 256 235 285.325 235 321.5C235 357.675 264.325 387 300.5 387Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path
          d="M300.5 487C336.675 487 366 457.675 366 421.5C366 385.325 336.675 356 300.5 356C264.325 356 235 385.325 235 421.5C235 457.675 264.325 487 300.5 487Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M338.1 282H261.89L300 348L338.1 282ZM327.71 288H272.28L300 336L327.71 288Z"
          fill="black"
        />
        <path
          d="M333 457C338.523 457 343 452.523 343 447C343 441.477 338.523 437 333 437C327.477 437 323 441.477 323 447C323 452.523 327.477 457 333 457Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_1738">
          <rect width="600" height="600" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
