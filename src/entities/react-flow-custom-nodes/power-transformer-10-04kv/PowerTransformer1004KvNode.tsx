import { NodeProps, Position, useNodeConnections } from "@xyflow/react";
import { PowerTransformer1004Icon } from "@/shared/assets/electrical-entities-icons/power-transformer-10-04";
import { TPowerTransformer1004Kv } from "@/shared/react-flow/nodes/power-transformer-10-04kv";
import { memo, useMemo, useState } from "react";
import { Terminal } from "../terminal/Terminal";

export const PowerTransformer1004KvNode = memo(({ id }: NodeProps<TPowerTransformer1004Kv>) => {
  const connection = useNodeConnections({ id });

  const [color, setColor] = useState<"black" | "yellow" | "red">("black");
  useMemo(() => {
    if (!connection.length) {
      return setColor("yellow");
    }
    const source = connection.find((item) => item.source === id);
    const target = connection.find((item) => item.target === id);
    if (!source || !target) {
      return setColor("yellow");
    }
    setColor("black");
  }, [connection, id]);

  return (
    <div className="">
      <Terminal id={`${id}-handleTarget`} type="target" position={Position.Top} />

      <PowerTransformer1004Icon color={color} />

      <Terminal id={`${id}-handleSource`} type="source" position={Position.Bottom} />
    </div>
  );
});
