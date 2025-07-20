export function VykatnoyRazjem1Icon({
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
      className={className}
      width="600.000000"
      height={height || "600.000000"}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip5_64">
          <rect
            id="VYKATNOY_RAZJEM_1"
            width="600.000000"
            height="600.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="VYKATNOY_RAZJEM_1"
        width="600.000000"
        height="600.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip5_64)">
        <path
          id="Vector 2"
          d="M300 -4L300 600"
          stroke="#000000"
          strokeOpacity="1.000000"
          strokeWidth={strokeWidth || "6.000000"}
        />
        <path
          id="Многоугольник 3"
          d="M338.1 490L261.89 490L300 556L338.1 490ZM327.71 496L272.28 496L300 544L327.71 496Z"
          fill="#000000"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}
