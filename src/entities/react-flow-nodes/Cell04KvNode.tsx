import { Handle, Position, useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib/react-std";

import header from "shared/assets/shina/SHINA_HEADER.svg";
type Props = {
  data: {
    id: string;
  };
};
export const Cell04KvNode = ({ data: { id } }: Props) => {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  const { getNode } = useReactFlow();
  const nodeInfo = getNode(id);
  const border = `border-x-2 border-b-2 border-black ${nodeInfo?.selected ? 'bg-red-100' :""}`;
  return (
    <div
      className={cn(
        "w-[300px] h-[750px] relative",
        border,
        "flex flex-col items-center"
      )}
    >
      <Handle type="target" position={Position.Top} />
      <img src={header} alt="" className="" />
      <div className="w-[60%]">
       cell04
      </div>
      <Handle type="source" position={Position.Bottom}/>
    </div>
  );
};
