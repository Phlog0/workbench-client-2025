import { cn } from "@/shared/lib";
import { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { TFixator10Kv } from "@/shared/react-flow/nodes/fixator-10kv/types";
import {
  fixator_10kv_height,
  fixator_10kv_width,
} from "@/shared/react-flow/nodes/fixator-10kv/measures";

export const Fixator10KvNode = memo((props: NodeProps<TFixator10Kv>) => {
  const fixator = useGetCurrentNode(props.id);
  // console.log("fixator-render");
  return (
    <div
      style={{ width: fixator_10kv_width, height: fixator_10kv_height }}
      className={cn(" rounded-full bg-black", fixator?.className)}
    >
      {/* <div className="absolute top-[-2rem]">
        {nodeInfo.position.x}
        {nodeInfo.position.y}
      </div> */}
    </div>
  );
});
