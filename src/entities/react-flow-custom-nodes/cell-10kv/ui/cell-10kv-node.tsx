import { Position } from "@xyflow/react";
import { cn } from "@/shared/lib";

import { NodeProps } from "@xyflow/react";
import { TCell10Kv } from "@/shared/react-flow/nodes/cell-10kv/types";
import { INITIAL_CELL_10KV_METRICS } from "@/shared/react-flow/nodes/cell-10kv/measures";

import { Vykl10KvIcon } from "./Vykl10KvIcon";
import { MeasuringCurrentTransformers10KvIcon } from "./MeasuringCurrentTransformers10KvIcon";
import { Opn10KvIcon } from "./Opn10KvIcon";
import { CellHeaderIcon } from "@/shared/assets/electrical-entities-icons/cell-10kv";

import { Tn10KvIcon } from "./Tn10KvIcon";
import { memo } from "react";
import { VerticalLineIcon } from "@/shared/assets/electrical-entities-icons";
import { Tooltip, TooltipTrigger } from "@/shared/ui";
import { Terminal } from "../../Terminal";

export const Cell10KvNode = memo((props: NodeProps<TCell10Kv>) => {
  const { data, selected, id } = props;

  const border = `border-x-2 border-b-2 border-black ${
    selected ? "bg-blue-100/20 outline outline-dashed outline-indigo-600" : ""
  }`;

  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={cn(
            border,
            "flex flex-col items-center max-w-full w-full gap-0 h-full bg-none",
            "overflow-hidden",
          )}
          style={{
            width: INITIAL_CELL_10KV_METRICS.width,
            height: INITIAL_CELL_10KV_METRICS.height,
          }}
        >
          <CellHeaderIcon className="bg-blue-500" />
          <Vykl10KvIcon value={data?.typeOfSwitchingDevice} className="bg-green-300" />
          <MeasuringCurrentTransformers10KvIcon
            value={data?.typeOfMeasuringCurrentTransformersDevice}
            transformersData={data?.measuringCurrentTransformersDevice}
          />

          {data?.typeOfCell === "ТН (Трансформатор напряжения)" ? (
            <Tn10KvIcon className="bg-violet-300" />
          ) : (
            <VerticalLineIcon />
          )}
          <Opn10KvIcon value={data?.typeOfOpnDevice} className="bg-amber-300" />

          <Terminal id={`${id}Source`} type="source" position={Position.Bottom} validNodeType="" />
        </div>
      </TooltipTrigger>
      {/* <TooltipContent className="bg-primary text-white p-4">
        <ul>
          <li>Тип: Ячейка 10 кВ</li>
          <li>id:{id}</li>
        </ul>
      </TooltipContent> */}
    </Tooltip>
  );
});
