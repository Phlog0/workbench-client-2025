import { cn } from "@/shared/lib";
import { memo } from "react";
import { NodeProps } from "@xyflow/react";

import { TFixator10Kv } from "@/shared/react-flow/nodes/fixators/fixator-10kv/types";
import {
  fixator_10kv_height,
  fixator_10kv_width,
} from "@/shared/react-flow/nodes/fixators/fixator-10kv/measures";

export const Fixator10KvNode = memo((props: NodeProps<TFixator10Kv>) => {
  const {
    data: { intersectionClassname },
  } = props;
  return (
    <div
      style={{ width: fixator_10kv_width, height: fixator_10kv_height }}
      className={cn(" rounded-full bg-black", intersectionClassname)}
    >
      {/* <div className="absolute -top-8">
        {nodeInfo.position.x}
        {nodeInfo.position.y}
      </div> */}
    </div>
  );
});
