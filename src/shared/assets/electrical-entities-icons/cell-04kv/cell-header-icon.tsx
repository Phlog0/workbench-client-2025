//cell-header-icon
export function CellHeaderIcon({
  className = "",
  color = "black",
  height = 35,
  strokeWidth = 6,
}: {
  className?: string;
  height?: number;
  strokeWidth?: number;
  color?: string;
}) {
  return (
    <svg
      className={className}
      width={300}
      height={height}
      viewBox="0 0 600 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3_699)">
        <path d="M0 19H604" stroke={color} strokeWidth={strokeWidth} />
        <path d="M300 70V19" stroke={color} strokeWidth={strokeWidth} />
        <path
          d="M300.5 34C309.06 34 316 27.0604 316 18.5C316 9.93959 309.06 3 300.5 3C291.94 3 285 9.93959 285 18.5C285 27.0604 291.94 34 300.5 34Z"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </g>
      {/* <defs>
        <clipPath id="clip0_3_699">
          <rect width="600" height="70" fill="white" />
        </clipPath>
      </defs> */}
    </svg>
  );
}
