import { DEFAULT_CELL_STROKE_WIDTH, ICON_HEIGHT } from "@/shared/react-flow/nodes/measures";
//cell-header-icon
export function PowerTransformer1004Icon({
  className,
  color,
  height = ICON_HEIGHT,
  strokeWidth = 7,
}: {
  className?: string;
  height?: number;
  strokeWidth?: number;
  color?: string;
}) {
  return (
    <svg
      className={className}
      width={137 / 3}
      height={393 / 3}
      viewBox="0 0 137 393"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12_2)">
        <path
          d="M68.5 212C104.675 212 134 182.675 134 146.5C134 110.325 104.675 81 68.5 81C32.3253 81 3 110.325 3 146.5C3 182.675 32.3253 212 68.5 212Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path
          d="M68.5 313C104.675 313 134 283.675 134 247.5C134 211.325 104.675 182 68.5 182C32.3253 182 3 211.325 3 247.5C3 283.675 32.3253 313 68.5 313Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26 288.5H110.87L68.44 215L26 288.5ZM36.39 282.5H100.48L68.44 227L36.39 282.5Z"
          fill="black"
        />
        <path d="M69 171.14V130" stroke="black" strokeWidth={strokeWidth} />
        <path d="M68 78V0" stroke="black" strokeWidth={strokeWidth} />
        <path d="M69 393V315" stroke="black" strokeWidth={strokeWidth} />
        <path d="M69 132.57L104.63 112" stroke="black" strokeWidth={strokeWidth} />
        <path d="M68.63 132.57L33 112" stroke="black" strokeWidth={strokeWidth} />
      </g>
      <defs>
        <clipPath id="clip0_12_2">
          <rect width="137" height="393" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
