import { Handle, NodeProps, Position } from "@xyflow/react";
import { cn } from "@/shared/lib/cn";

import { memo } from "react";

import { ResizeButtons } from "../ResizeButtons";
import { TSection35Kv } from "@/shared/react-flow/nodes/sections/section-35kv/types";
import { INITIAL_SECTION_35KV_METRICS } from "@/shared/react-flow/nodes/sections/section-35kv/measures";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";

export const Section35KvNode = memo(function Section35KvNode(props: NodeProps<TSection35Kv>) {
  //* https://pixelsconverter.com/pixels-to-millimeters
  // const millimeters = nodeInfo?.width * (25.4 / 96);
  // `w-[${millimeters}mm]`

  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={cn("bg-orange-600 relative z-10", {
            "outline-dashed outline-indigo-600": props.selected,
          })}
          style={{
            width: props.data.width,
            height: INITIAL_SECTION_35KV_METRICS.height,
            zIndex: 10,
          }}
        >
          {/* <div className="absolute text-black -top-24">
        section35kv:
        {`measured: ${nodeInfo.measured?.width}`}
      </div> */}
          <Handle
            type="target"
            position={Position.Top}
            id={`${props.id}Target`}
          />
          {props.selected && (
            <ResizeButtons
              sectionVoltage="35"
              sectionWidth={props.data.width}
              sectionId={props.id}
              className="absolute -top-12"
            />
          )}
          <Handle
            type="source"
            position={Position.Bottom}
            id={`${props.id}Source`}
          />
        </div>{" "}
      </TooltipTrigger>
      <TooltipContent className="bg-primary text-white p-4">
        <ul>
          <li>Секция 35 кВ</li>
          <li>id:{props.id}</li>
        </ul>
      </TooltipContent>
    </Tooltip>
  );
});
