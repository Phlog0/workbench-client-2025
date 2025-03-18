import { Handle, Position, useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib/react-std";

import header from "shared/assets/shina/SHINA_HEADER.svg";
import { TT_3_ABC } from "shared/assets/transformers";
import { VYKATNOY_RAZJEM_TRANSF } from "@/shared/assets/other";
type Props = {
  data: {
    id: string;
  };
};
export const Cell10KvNode = ({ data: { id } }: Props) => {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  const { getNode } = useReactFlow();
  const nodeInfo = getNode(id);
  const border = `border-x-2 border-b-2 border-black ${nodeInfo?.selected ? 'bg-blue-100 outline outline-dashed outline-indigo-600' :""}`;
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
        <img src={TT_3_ABC} alt="" className="" />
        <img src={TT_3_ABC} alt="" className="" />
        <img src={TT_3_ABC} alt="" className="" />
        <img src={VYKATNOY_RAZJEM_TRANSF} alt="" className="" />
        
      </div>
      <Handle type="source" position={Position.Bottom}/>
    </div>
  );
};
