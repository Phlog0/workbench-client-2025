import { Position } from "@xyflow/react";
import { cn } from "@/shared/lib";

import { NodeProps } from "@xyflow/react";

import { CellHeaderIcon } from "@/shared/assets/electrical-entities-icons/cell-10kv";

import { memo } from "react";
import { Tooltip, TooltipTrigger } from "@/shared/ui";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { TCell35Kv } from "@/shared/react-flow/nodes/cells/cell-35kv/types";
import { INITIAL_CELL_35KV_METRICS } from "@/shared/react-flow/nodes/cells/cell-35kv/measures";
import { Terminal } from "../terminal";

export const Cell35KvNode = memo((props: NodeProps<TCell35Kv>) => {
  const { selected, id, type } = props;
  console.log({ type });
  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={cn(
            "border-x-2 border-b-2 border-black",
            "flex flex-col items-center max-w-full w-full gap-0 h-full bg-none",
            "overflow-hidden",
            { "bg-blue-100/20 outline-dashed outline-indigo-600": selected },
          )}
          style={{
            width: INITIAL_CELL_35KV_METRICS.width,
            height: INITIAL_CELL_35KV_METRICS.height,
          }}
        >
          <Terminal id={`${id}Target`} type="target" position={Position.Top} />
          <CellHeaderIcon className="bg-blue-500" />
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-primary text-white p-4">
        <ul>
          <li>Тип: Ячейка 35 кВ</li>
          <li>id:{id}</li>
        </ul>
      </TooltipContent>
    </Tooltip>
  );
});
