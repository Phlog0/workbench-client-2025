import { Handle, Position, useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib/react-std";

import header from "shared/assets/shina/SHINA_HEADER.svg";
import { TT_3_ABC } from "shared/assets/transformers";
import { useState } from "react";
type Props = {
  data: {
    id: string;
  };
};
export const Section04KvNode = ({ data: { id } }: Props) => {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  const { getNode } = useReactFlow();
  const nodeInfo = getNode(id);
  const [showButtons, setShowButtons] = useState(false);
  return (
    <div className={cn("relative bg-slate-600")}>
      <Handle type="target" position={Position.Top} />

      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};
