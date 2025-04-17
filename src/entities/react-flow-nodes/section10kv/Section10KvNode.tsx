import { Handle, Position, useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib/react-std";

import header from "shared/assets/shina/SHINA_HEADER.svg";
import { TT_3_ABC } from "shared/assets/transformers";
import { useState } from "react";
import { ResizeButtons } from "./resize-buttons";
import { TCell10Kv } from "@/shared/appStore/react-flow-types";
type Props = {
  data: {
    id: string;
  };
};
export const Section10KvNode = ({ data: { id } }: Props) => {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);
  const [showButtons, setShowButtons] = useState(false);

  const { getNode } = useReactFlow();
  const handleClick = () => {
    setShowButtons((prev) => !prev);
  };
  const nodeInfo = getNode(id) as TCell10Kv;
  //* https://pixelsconverter.com/pixels-to-millimeters
  // const millimeters = nodeInfo?.width * (25.4 / 96);
  // `w-[${millimeters}mm]`
  return (
    <div className={cn("h-[15px] bg-slate-600 relative")} onClick={handleClick}>
      <Handle type="target" position={Position.Top} />
      {showButtons && (
        <ResizeButtons sectionId={id} className="absolute top-[-3rem]" />
      )}
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};
