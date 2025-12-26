import { Position } from "@xyflow/react";
import { cn } from "@/shared/lib";

import { NodeProps } from "@xyflow/react";

import { CellHeaderIcon } from "@/shared/assets/electrical-entities-icons/cell-04kv";

import { memo } from "react";
import { Tooltip, TooltipTrigger } from "@/shared/ui";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { TCell04Kv } from "@/shared/react-flow/nodes/cells/cell-04kv/types";
import { INITIAL_CELL_04KV_METRICS } from "@/shared/react-flow/nodes/cells/cell-04kv/measures";
import { Terminal } from "../../terminal";
import { MeasuringCurrentTransformers10KvIcon, Vykl10KvIcon } from "../shared";
import { VerticalLineIcon } from "@/shared/assets/electrical-entities-icons";

export const Cell04KvNode = memo((props: NodeProps<TCell04Kv>) => {
  const { selected, id, data } = props;

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
          <CellHeaderIcon />
          {/* по какой-то причине в cell04Kv я решил делать только рубильники ("Р (Разъединители)") */}
          <Vykl10KvIcon value={"Р (Разъединители)"} switchingDevice={data?.switch} />
          <MeasuringCurrentTransformers10KvIcon
            value={data?.typeOfMeasuringCurrentTransformersDevice}
            transformersData={data?.measuringCurrentTransformersDevice}
          />

          <VerticalLineIcon />

          <Terminal id={`${id}Target`} type="target" position={Position.Bottom} />
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
