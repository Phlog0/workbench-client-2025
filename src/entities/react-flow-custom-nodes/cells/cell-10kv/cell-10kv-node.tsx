import { Position, useNodeConnections } from "@xyflow/react";
import { cn } from "@/shared/lib";

import { NodeProps } from "@xyflow/react";
import { TCell10Kv } from "@/shared/react-flow/nodes/cells/cell-10kv/types";
import { INITIAL_CELL_10KV_METRICS } from "@/shared/react-flow/nodes/cells/cell-10kv/measures";

import {
  Vykl10KvIcon,
  MeasuringCurrentTransformers10KvIcon,
  Opn10KvIcon,
  Tn10KvIcon,
} from "../shared";

import { memo, useEffect } from "react";
import { VerticalLineIcon } from "@/shared/assets/electrical-entities-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";
import { Terminal } from "../../terminal";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { TPowerTransformer1004Kv } from "@/shared/react-flow/nodes/power-transformer-10-04kv";
import { useBoundStore } from "@/shared/appStore";
import { CellHeaderIcon } from "@/shared/assets/electrical-entities-icons/cell-10kv";

export const Cell10KvNode = memo((props: NodeProps<TCell10Kv>) => {
  const { data, selected, id } = props;

  const connections = useNodeConnections({ id });
  const pt = useGetCurrentNode(connections[0]?.target) as TPowerTransformer1004Kv;
  const setMultipleProps = useBoundStore((state) => state.setMultipleProps);

  useEffect(() => {
    const power = pt?.data?.parameters?.power;
    if (power && Number(power) && data?.typeOfVoltage && Number(parseInt(data?.typeOfVoltage))) {
      const typeOfVoltage = parseInt(data?.typeOfVoltage);
      const ratedCurrent = power / typeOfVoltage;
      console.log(typeOfVoltage);
      setMultipleProps({
        nodeId: id,
        nodeDataFlag: true,
        properties: { sPower: power, ratedCurrent: ratedCurrent },
      });
    } else {
      setMultipleProps({
        nodeId: id,
        nodeDataFlag: true,
        properties: { sPower: undefined, ratedCurrent: undefined },
      });
    }
  }, [pt?.data, setMultipleProps, data.sPower, data.ratedCurrent, data.typeOfVoltage, id]);
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
            width: INITIAL_CELL_10KV_METRICS.width,
            height: INITIAL_CELL_10KV_METRICS.height,
          }}
        >
          <CellHeaderIcon />
          <Vykl10KvIcon
            value={data?.typeOfSwitchingDevice}
            switchingDevice={data?.switchingDevice}
            typeOfMicroprocessorDevice={data?.typeOfMicroprocessorDevice}
            mpdaa={data?.mpdaa}
          />
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

          <Terminal id={`${id}-source`} type="source" position={Position.Bottom} />
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-primary text-white p-4">
        <ul>
          <li>Тип: Ячейка 10 кВ</li>
          <li>id:{id}</li>
        </ul>
      </TooltipContent>
    </Tooltip>
  );
});
