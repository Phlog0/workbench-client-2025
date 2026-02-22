import { Position } from "@xyflow/react";
import { cn } from "@/shared/lib";

import { NodeProps } from "@xyflow/react";

import { CellHeaderIcon } from "@/shared/assets/electrical-entities-icons/cell-10kv";

import { memo } from "react";
import { Tooltip, TooltipTrigger } from "@/shared/ui";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { TCell35Kv } from "@/shared/react-flow/nodes/cells/cell-35kv/types";

import { Terminal } from "../../terminal";
import {
  MeasuringCurrentTransformers10KvIcon,
  Opn10KvIcon,
  Tn10KvIcon,
  Vykl10KvIcon,
} from "../shared";
import { useGetLineColor } from "@/shared/lib/use-get-line-color";
import { INITIAL_CELL_10KV_METRICS } from "@/shared/react-flow/nodes/cells/cell-10kv/measures";
import { VerticalLineIcon } from "@/shared/assets/electrical-entities-icons";

export const Cell35KvNode = memo((props: NodeProps<TCell35Kv>) => {
  const { selected, id, data } = props;
  const borderColor = useGetLineColor();
  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={cn(
            "border-4 border-t-0",

            "flex flex-col items-center max-w-full w-full gap-0 h-full bg-none",
            "overflow-hidden relative",
            { "bg-blue-100/20 outline-dashed outline-indigo-600": selected }
          )}
          style={{
            width: INITIAL_CELL_10KV_METRICS.width,
            height: INITIAL_CELL_10KV_METRICS.height,
            borderColor: borderColor,
          }}
        >
          <div className="absolute bottom-0 right-0 text-5xl">35</div>
          <CellHeaderIcon color={borderColor} />
          <Vykl10KvIcon
            value={data?.typeOfSwitchingDevice}
            switchingDevice={data?.switchingDevice}
            typeOfMicroprocessorDevice={data?.typeOfMicroprocessorDevice}
            mpdaa={data?.mpdaa}
            color={borderColor}
          />
          <MeasuringCurrentTransformers10KvIcon
            value={data?.typeOfMeasuringCurrentTransformersDevice}
            transformersData={data?.measuringCurrentTransformersDevice}
            color={borderColor}
          />

          {data?.typeOfCell === "ТН (Трансформатор напряжения)" ? (
            <Tn10KvIcon
              className="bg-violet-300"
              color={borderColor}
            />
          ) : (
            <VerticalLineIcon color={borderColor} />
          )}
          <Opn10KvIcon
            value={data?.typeOfOpnDevice}
            color={borderColor}
          />

          <Terminal
            id={`${id}-source`}
            type="source"
            position={Position.Bottom}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent className="p-4">
        <ul>
          <li>Тип: Ячейка 35 кВ</li>
          <li>id:{id}</li>
        </ul>
      </TooltipContent>
    </Tooltip>
  );
});
