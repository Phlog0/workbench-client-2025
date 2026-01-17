import { NodeProps, Position, useNodeConnections } from "@xyflow/react";
import { PowerTransformer1004Icon } from "@/shared/assets/electrical-entities-icons/power-transformer-10-04";
import { TPowerTransformer1004Kv } from "@/shared/react-flow/nodes/power-transformer-10-04kv";
import { memo, useMemo } from "react";
import { Terminal } from "../terminal/Terminal";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";
import { cn } from "@/shared/lib";

export const PowerTransformer1004KvNode = memo(
  ({ id, selected }: NodeProps<TPowerTransformer1004Kv>) => {
    const connection = useNodeConnections({ id });

    const color = useMemo(() => {
      if (!connection.length) {
        return "yellow";
      }

      const source = connection.find((item) => item.source === id);
      const target = connection.find((item) => item.target === id);

      if (source && target) {
        return "green";
      } else if (source || target) {
        return "orange";
      } else {
        return "red";
      }
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
            <li>СТ 10 (6) \ 04 кВ</li>
            <li>id:{id}</li>
          </ul>
        </TooltipContent>
      </Tooltip>
    );
  },
);
