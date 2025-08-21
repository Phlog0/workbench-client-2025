import { Handle, NodeProps, Position, useConnection } from "@xyflow/react";
import { cn } from "@/shared/lib/cn";
import { PowerTransformer1004Icon } from "@/shared/assets/electrical-entities-icons/power-transformer-10-04";
import { TPowerTransformer1004Kv } from "@/shared/react-flow/nodes/power-transformer-10-04kv";
import { memo } from "react";
import { Terminal } from "../Terminal";

import { TCell10Kv } from "@/shared/react-flow/nodes/cell-10kv/types";

export const PowerTransformer1004KvNode = memo(
  ({ isConnectable, id }: NodeProps<TPowerTransformer1004Kv>) => {
    const validNodeType: TCell10Kv["type"] = "Cell10Kv";

    return (
      <div className="">
        <Terminal
          id={`${id}HandleTarget`}
          validNodeType={validNodeType}
          type="target"
          position={Position.Top}
        />

        <PowerTransformer1004Icon />

        <Terminal
          id={`${id}HandleSource`}
          type="source"
          validNodeType={validNodeType}
          position={Position.Bottom}
        />
      </div>
    );
  },
);
