import { TFixator10Kv } from "@/shared/appStore/react-flow-types";
import { cn } from "@/shared/lib/react-std";
import { useReactFlow } from "@xyflow/react";

type Props = {
  data: {
    id: string;
  };
  className?: string;
};

export const FixatorNode10Kv = ({ data: { id }, className }: Props) => {
  const { getNode } = useReactFlow();
  const nodeInfo = getNode(id) as TFixator10Kv;
  const intersectionClassName = nodeInfo.className;
  return (
    <div
      className={cn(
        "w-4 h-4 bg-black",
        className,
        intersectionClassName,
        "rounded-full",
        'relative'
        
      )}
    >
      {/* <div className="absolute top-[-2rem]">
        {nodeInfo.position.x}
        {nodeInfo.position.y}
      </div> */}
    </div>
  );
};
