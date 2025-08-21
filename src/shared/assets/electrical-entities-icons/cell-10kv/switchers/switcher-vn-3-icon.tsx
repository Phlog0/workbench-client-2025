import { DEFAULT_CELL_STROKE_WIDTH, ICON_HEIGHT } from "@/shared/react-flow/nodes/measures";

export function SwitcherVn3Icon({
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
      <path d="M300 336V600" stroke="black" strokeWidth={strokeWidth} />
      <path d="M190 339H301" stroke="black" strokeWidth={strokeWidth} />
      <path d="M210 453H300" stroke="black" strokeWidth={strokeWidth} />
      <path d="M193 435V336" stroke="black" strokeWidth={strokeWidth} />
      <path d="M132.99 434.98L223 393.01" stroke="black" strokeWidth={strokeWidth} />
      <path d="M68 435H135" stroke="black" strokeWidth={strokeWidth} />
      <path d="M66 468V402" stroke="black" strokeWidth={strokeWidth} />
      <path d="M49 455V415" stroke="black" strokeWidth={strokeWidth} />
      <path d="M32 444V425" stroke="black" strokeWidth={strokeWidth} />
      <path d="M210 471V435" stroke="black" strokeWidth={strokeWidth} />
      <path d="M300 0V260" stroke="black" strokeWidth={strokeWidth} />
      <path d="M240 266L300.9 338.58" stroke="black" strokeWidth={strokeWidth} />
      <path d="M286 257H314.28" stroke="black" strokeWidth={strokeWidth} />
      <path
        d="M300 271C303.866 271 307 267.866 307 264C307 260.134 303.866 257 300 257C296.134 257 293 260.134 293 264C293 267.866 296.134 271 300 271Z"
        stroke="black"
        strokeWidth={strokeWidth}
      />
      <path
        d="M300 458C302.761 458 305 455.761 305 453C305 450.239 302.761 448 300 448C297.239 448 295 450.239 295 453C295 455.761 297.239 458 300 458Z"
        stroke="black"
        strokeWidth={strokeWidth}
      />
      <path d="M181 301H271" stroke="black" strokeWidth={strokeWidth} />
      <path d="M211 176H301" stroke="black" strokeWidth={strokeWidth} />
      <path d="M181 303V204" stroke="black" strokeWidth={strokeWidth} />
      <path d="M135.99 170.97L226 129" stroke="black" strokeWidth={strokeWidth} />
      <path d="M211 194V158" stroke="black" strokeWidth={strokeWidth} />
      <path d="M71 170.98H138" stroke="black" strokeWidth={strokeWidth} />
      <path d="M69 203.98V137.98" stroke="black" strokeWidth={strokeWidth} />
      <path d="M52 190.98V150.98" stroke="black" strokeWidth={strokeWidth} />
      <path d="M35 179.98V160.98" stroke="black" strokeWidth={strokeWidth} />
    </svg>
  );
}
