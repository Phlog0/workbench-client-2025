import { NodeProps, Position, useNodeConnections } from "@xyflow/react";
import { PowerTransformer1004Icon } from "@/shared/assets/electrical-entities-icons/power-transformer-10-04";
import { TPowerTransformer3510Kv } from "@/shared/react-flow/nodes/power-transformer-35-10kv";
import { memo, useMemo } from "react";
import { Terminal } from "../terminal/Terminal";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";
import { cn } from "@/shared/lib";

export const PowerTransformer3510KvNode = memo(
  ({ id, selected }: NodeProps<TPowerTransformer3510Kv>) => {
    const connection = useNodeConnections({ id });

    const color: "black" | "yellow" | "red" = useMemo(() => {
      if (!connection.length) {
        return "yellow";
      }
      const source = connection.find((item) => item.source === id);
      const target = connection.find((item) => item.target === id);
      if (!source || !target) {
        return "yellow";
      }
      return "black";
    }, [connection, id]);

    return (
      <Tooltip>
        <TooltipTrigger>
          <div className={cn({ "bg-blue-100/20 outline-dashed outline-indigo-600": selected })}>
            <Terminal id={`${id}-target`} type="target" position={Position.Top} />

            <PowerTransformer1004Icon color={color} />
            <Terminal id={`${id}-source`} type="source" position={Position.Bottom} />
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-primary text-white p-4">
          <ul>
            <li>СТ 35 \ 10 кВ</li>
            <li>id:{id}</li>
          </ul>
        </TooltipContent>
      </Tooltip>
    );
  },
);
