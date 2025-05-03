export function TsnIcon({
  className,
  color,
  height,
  strokeWidth,
}: {
  className?: string;
  height?: number;
  strokeWidth?: number;
  color?: string;
}) {
  return (
    <svg
      width="600.000000"
      height={height || "600.000000"}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip4_4780">
          <rect
            id="TSN"
            width="600.000000"
            height="600.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="TSN"
        width="600.000000"
        height="600.000000"
        fill="#FFFFFF"
        fill-opacity="0"
      />
      <g clip-path="url(#clip4_4780)">
        <path
          id="Vector 2"
          d="M300 -4L300 257"
          stroke="#000000"
          stroke-opacity="1.000000"
          stroke-width={strokeWidth || "6.000000"}
        />
        <path
          id="Vector 18"
          d="M263 404L300 422"
          stroke="#000000"
          stroke-opacity="1.000000"
          stroke-width={strokeWidth || "6.000000"}
        />
        <path
          id="Vector 26"
          d="M340 410L298 422"
          stroke="#000000"
          stroke-opacity="1.000000"
          stroke-width={strokeWidth || "6.000000"}
        />
        <path
          id="Vector 27"
          d="M286 463L300 421"
          stroke="#000000"
          stroke-opacity="1.000000"
          stroke-width={strokeWidth || "6.000000"}
        />
        <path
          id="Vector 28"
          d="M325 441L300 421"
          stroke="#000000"
          stroke-opacity="1.000000"
          stroke-width={strokeWidth || "6.000000"}
        />
        <circle
          id="Эллипс 3"
          cx="300.500000"
          cy="321.500000"
          r="65.500000"
          stroke="#000000"
          stroke-opacity="1.000000"
          stroke-width={strokeWidth || "6.000000"}
        />
        <circle
          id="Эллипс 4"
          cx="300.500000"
          cy="421.500000"
          r="65.500000"
          stroke="#000000"
          stroke-opacity="1.000000"
          stroke-width={strokeWidth || "6.000000"}
        />
        <path
          id="Многоугольник 2"
          d="M338.1 282L261.89 282L300 348L338.1 282ZM327.71 288L272.28 288L300 336L327.71 288Z"
          fill="#000000"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
        <circle
          id="Эллипс 5"
          cx="333.000000"
          cy="447.000000"
          r="10.000000"
          stroke="#000000"
          stroke-opacity="1.000000"
          stroke-width={strokeWidth || "6.000000"}
        />
      </g>
    </svg>
  );
}
