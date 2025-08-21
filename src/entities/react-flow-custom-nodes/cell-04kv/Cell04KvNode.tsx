import { Handle, Position } from "@xyflow/react";
import { cn } from "@/shared/lib";

import { NodeProps } from "@xyflow/react";

import { CellHeaderIcon } from "@/shared/assets/electrical-entities-icons/cell-04kv";

import { memo } from "react";
import { Tooltip, TooltipTrigger } from "@/shared/ui";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { TCell04Kv } from "@/shared/react-flow/nodes/cell-04kv/types";
import { INITIAL_CELL_04KV_METRICS } from "@/shared/react-flow/nodes/cell-04kv/measures";

export const Cell04KvNode = memo((props: NodeProps<TCell04Kv>) => {
  const { data, selected, type, id } = props;

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
            width: INITIAL_CELL_04KV_METRICS.width,
            height: INITIAL_CELL_04KV_METRICS.height,
          }}
        >
          <Handle type="target" position={Position.Top} />
          <CellHeaderIcon className="bg-blue-500" />

          <Handle type="source" position={Position.Bottom} />
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-primary text-white p-4">
        <ul>
          <li>Тип: Ячейка 04 кВ</li>
          <li>id:{id}</li>
        </ul>
      </TooltipContent>
    </Tooltip>
  );
});
