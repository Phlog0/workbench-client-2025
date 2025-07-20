export function HeaderTireIcon({
  className,
  color,
  height,
  strokeWidth,
  width
}: {
  className?: string;
  height?: number;
  width?: number;
  strokeWidth?: number;
  color?: string;
}) {
  return (
    <svg
      width={width || "600.000000"}
      height={height || "70.000000"}
      viewBox="0 0 600 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip5_72">
          <rect
            id="SHINA_HEADER"
            width="600.000000"
            height="70.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="SHINA_HEADER"
        width="600.000000"
        height="70.000000"
        fill="#FFFFFF"
        fill-opacity="0"
      />
      <g clip-path="url(#clip5_72)">
        <path
          id="Vector 41"
          d="M0 19L604 19"
          stroke="#000000"
          stroke-opacity="1.000000"
          stroke-width={strokeWidth || "6.000000"}
        />
        <path
          id="Vector 42"
          d="M300 70L300 19"
          stroke="#000000"
          stroke-opacity="1.000000"
          stroke-width={strokeWidth || "6.000000"}
        />
        <circle
          id="Эллипс 8"
          cx="300.500000"
          cy="18.500000"
          r="15.500000"
          stroke="#000000"
          stroke-opacity="1.000000"
          stroke-width={strokeWidth || "6.000000"}
        />
      </g>
    </svg>
  );
}
