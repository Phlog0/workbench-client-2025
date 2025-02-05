import { SILOVOY_TRANSFORMATOR } from "shared/assets/other";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib/react-std";

type Props = {
  data: {
    id: string;
  };
};
export const PowerTransformerNode = ({ data: { id } }: Props) => {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  const { getNode } = useReactFlow();
  const nodeInfo = getNode(id);

  return (
    <div
      className={cn("flex justify-center items-center w-[170px] ")}
    >
      <Handle type="target" position={Position.Top} />
      <img className="w-[100%]" src={SILOVOY_TRANSFORMATOR} alt="" />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
