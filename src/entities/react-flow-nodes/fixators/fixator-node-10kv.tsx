import { TFixator10Kv } from "@/shared/types";
import { cn } from "@/shared/lib";
import { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";

export const FixatorNode10Kv = memo((props: NodeProps<TFixator10Kv>) => {
  const fixator = useGetCurrentNode(props.id);
  // console.log("fixator-render");
  return (
    <div className={cn("w-4 h-4 rounded-full bg-black", fixator?.className)}>
      {/* <div className="absolute top-[-2rem]">
        {nodeInfo.position.x}
        {nodeInfo.position.y}
      </div> */}
    </div>
  );
});
