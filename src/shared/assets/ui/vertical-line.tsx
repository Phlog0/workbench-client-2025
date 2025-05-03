export function VerticalLine({
  className='a',
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
      height={height?.toString() || "600.000000"}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip21_68">
          <rect
            id="TT_0"
            rx="-0.500000"
            width="599.000000"
            height="599.000000"
            transform="translate(0.500000 0.500000)"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="TT_0"
        rx="-0.500000"
        width="599.000000"
        height="599.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fill-opacity="0"
      />
      <g clip-path="url(#clip21_68)">
        <path
          id="Vector 2"
          d="M300 -1L300 600"
          stroke={color || "#000000"}
          stroke-opacity="1.000000"
          stroke-width={strokeWidth?.toString() || "6.000000"}
        />
      </g>
    </svg>
  );
}
