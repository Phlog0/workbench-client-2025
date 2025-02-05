import { Handle, Position, useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib/react-std";

import header from "shared/assets/shina/SHINA_HEADER.svg";
import { TT_3_ABC } from "shared/assets/transformers";
type Props = {
  data: {
    id: string;
  };
};
export const Section10KvNode = ({ data: { id } }: Props) => {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  const { getNode } = useReactFlow();
  const nodeInfo = getNode(id);
  return (
    <div className={cn("w-[750px] h-[15px] relative bg-slate-600")}>
      <Handle type="target" position={Position.Top} />

      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};
