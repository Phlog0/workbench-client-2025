import { ICON_HEIGHT, DEFAULT_CELL_STROKE_WIDTH } from "@/shared/react-flow/nodes/measures";

export function TnIcon({
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
      <g clip-path="url(#clip0_3_1712)">
        <path d="M300 -4V600" stroke="black" strokeWidth={strokeWidth} />
        <path d="M423 192L452 210" stroke="black" strokeWidth={strokeWidth} />
        <path d="M428 275L453 287" stroke="black" strokeWidth={strokeWidth} />
        <path d="M482 192L452 212" stroke="black" strokeWidth={strokeWidth} />
        <path d="M476 275L451 287" stroke="black" strokeWidth={strokeWidth} />
        <path d="M474 241L454 211" stroke="black" strokeWidth={strokeWidth} />
        <path d="M453 289L453 210" stroke="black" strokeWidth={strokeWidth} />
        <path d="M439 311L453 286" stroke="black" strokeWidth={strokeWidth} />
        <path d="M470 212L454 211" stroke="black" strokeWidth={strokeWidth} />
        <path d="M469 299L453 286" stroke="black" strokeWidth={strokeWidth} />
        <path
          d="M529 298C553.853 298 574 277.853 574 253C574 228.147 553.853 208 529 208C504.147 208 484 228.147 484 253C484 277.853 504.147 298 529 298Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path
          d="M457 258C481.853 258 502 237.853 502 213C502 188.147 481.853 168 457 168C432.147 168 412 188.147 412 213C412 237.853 432.147 258 457 258Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path
          d="M457 337C481.853 337 502 316.853 502 292C502 267.147 481.853 247 457 247C432.147 247 412 267.147 412 292C412 316.853 432.147 337 457 337Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path
          d="M481 222C486.523 222 491 217.523 491 212C491 206.477 486.523 202 481 202C475.477 202 471 206.477 471 212C471 217.523 475.477 222 481 222Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path
          d="M476 315C481.523 315 486 310.523 486 305C486 299.477 481.523 295 476 295C470.477 295 466 299.477 466 305C466 310.523 470.477 315 476 315Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M552 261.052V256.618L518.022 275.348V230.651L552 249.382V244.948L514 224V282L552 261.052Z"
          fill="black"
        />
        <path d="M457 593V339" stroke="black" strokeWidth={strokeWidth} />
        <path
          d="M300 598C302.761 598 305 595.761 305 593C305 590.239 302.761 588 300 588C297.239 588 295 590.239 295 593C295 595.761 297.239 598 300 598Z"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <path d="M477 421H437V511H477V421Z" stroke="black" strokeWidth={strokeWidth} />
        <path d="M300 593H460" stroke="black" strokeWidth={strokeWidth} />
      </g>
      <defs>
        <clipPath id="clip0_3_1712">
          <rect width="600" height="600" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
