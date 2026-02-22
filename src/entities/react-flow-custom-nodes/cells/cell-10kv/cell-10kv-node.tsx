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
import { useGetLineColor } from "@/shared/lib/use-get-line-color";

export const Cell10KvNode = memo((props: NodeProps<TCell10Kv>) => {
  const { data, selected, id } = props;

  const connections = useNodeConnections({ id });
  const pt = useGetCurrentNode(connections[0]?.target) as TPowerTransformer1004Kv;
  const setMultipleProps = useBoundStore(state => state.setMultipleProps);

  useEffect(() => {
    const power = pt?.data?.parameters?.power;
    if (power && Number(power) && data?.typeOfVoltage && Number(parseInt(data?.typeOfVoltage))) {
      const typeOfVoltage = parseInt(data?.typeOfVoltage);
      const ratedCurrent = power / typeOfVoltage;
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
  const borderColor = useGetLineColor();

  useEffect(() => {
    if (!data.switchingDevice) {
      setMultipleProps({
        nodeId: id,
        nodeDataFlag: true,
        properties: {
          switchDeviceHasEmptyFields: false,
        },
      });
    }
    const isEmpty = Object.values({ ...data.switchingDevice, typeOfDevice: undefined }).every(
      item => item === "" || item === undefined || item === null
    );
    setMultipleProps({
      nodeId: id,
      nodeDataFlag: true,
      properties: {
        switchDeviceHasEmptyFields: isEmpty,
      },
    });
  }, [data.switchingDevice, id, setMultipleProps]);
  // const hasEmptyFields = useMemo(() => {
  //   if (!data.switchingDevice) return true;
  //   return Object.values({ ...data.switchingDevice, typeOfDevice: undefined }).every(
  //     (item) => item === "" || item === undefined || item === null,
  //   );
  // }, [data.switchingDevice]);
  useEffect(() => {
    if (!(data.typeOfSwitchingDevice === "ВВ (Вакуумные выключатели)")) {
      setMultipleProps({
        nodeId: id,
        nodeDataFlag: true,
        properties: {
          switchDeviceHasInvalidVv: false,
        },
      });
      return;
    }
    if (data.typeOfSwitchingDevice === "ВВ (Вакуумные выключатели)") {
      if (data.typeOfMicroprocessorDevice === "Нет") {
        setMultipleProps({
          nodeId: id,
          nodeDataFlag: true,
          properties: {
            switchDeviceHasInvalidVv: true,
          },
        });
        return;
      }

      if (!data.mpdaa) {
        setMultipleProps({
          nodeId: id,
          nodeDataFlag: true,
          properties: {
            switchDeviceHasInvalidVv: true,
          },
        });
      }

      if (data.mpdaa) {
        const isMpdaaEmpty = Object.values(data.mpdaa).every(
          item => item === "" || item === undefined || item === null
        );
        setMultipleProps({
          nodeId: id,
          nodeDataFlag: true,
          properties: {
            switchDeviceHasInvalidVv: isMpdaaEmpty,
          },
        });
      }
    }
  }, [
    data.mpdaa,
    data.typeOfMicroprocessorDevice,
    data.typeOfSwitchingDevice,
    id,
    setMultipleProps,
  ]);
  // const hasInvalidVv = useMemo(() => {
  //   if (!(data.typeOfSwitchingDevice === "ВВ (Вакуумные выключатели)")) {
  //     return false;
  //   }
  //   if (data.typeOfMicroprocessorDevice === "Нет") return true;

  //   if (!data.mpdaa) return true;
  //   return Object.values(data.mpdaa).every(
  //     (item) => item === "" || item === undefined || item === null,
  //   );
  // }, [data.mpdaa, data.typeOfMicroprocessorDevice, data.typeOfSwitchingDevice]);

  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={cn(
            "border-4 border-t-0",
            "flex flex-col items-center max-w-full w-full gap-0 h-full bg-none",
            "overflow-hidden, relative",
            { "bg-blue-100/20 outline-dashed outline-indigo-600": selected }
          )}
          style={{
            width: INITIAL_CELL_10KV_METRICS.width,
            height: INITIAL_CELL_10KV_METRICS.height,
            borderColor: borderColor,
          }}
        >
          <div className="absolute bottom-0 right-0 text-5xl">10</div>
          <CellHeaderIcon color={borderColor} />
          <Vykl10KvIcon
            value={data?.typeOfSwitchingDevice}
            switchingDevice={data?.switchingDevice}
            typeOfMicroprocessorDevice={data?.typeOfMicroprocessorDevice}
            mpdaa={data?.mpdaa}
            color={borderColor}
            hasEmptyFields={data?.switchDeviceHasEmptyFields}
            hasInvalidVv={data?.switchDeviceHasInvalidVv}
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
          <li>Тип: Ячейка 10 кВ</li>
          <li>id:{id}</li>
        </ul>
      </TooltipContent>
    </Tooltip>
  );
});
