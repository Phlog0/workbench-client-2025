import { TFixator10Kv } from "@/shared/appStore/react-flow-node-types";
import { cn } from "@/shared/lib/react-std";
import { useReactFlow } from "@xyflow/react";
import { memo } from "react";

type Props = {
  data: {
    id: string;
  };
};

export const FixatorNode10Kv = memo(({ data: { id } }: Props) => {
  const { getNode } = useReactFlow();
  const nodeInfo = getNode(id) as TFixator10Kv;
  // console.log({ classname: nodeInfo?.className });
  const intersectionClassName = nodeInfo?.className;
  // console.log("fixator-render");
  return (
    <div className={cn("w-4 h-4", "rounded-full", "relative", "bg-black", intersectionClassName)}>
      {/* <div className="absolute top-[-2rem]">
        {nodeInfo.position.x}
        {nodeInfo.position.y}
      </div> */}
    </div>
  );
});
