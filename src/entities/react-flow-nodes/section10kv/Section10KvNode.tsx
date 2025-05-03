import { Handle, Position, useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib/react-std";

import { useState } from "react";
import { ResizeButtons } from "./resize-buttons";
import { TSection10Kv } from "@/shared/appStore/react-flow-types";
import { useGetNodeChildrenIds } from "@/shared/lib/model/use-get-node-children";
import { INITIAL_SECTION_10KV_METRICS } from "@/shared/constants/measures";
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
  const nodeInfo = getNode(id) as TSection10Kv;
  //* https://pixelsconverter.com/pixels-to-millimeters
  // const millimeters = nodeInfo?.width * (25.4 / 96);
  // `w-[${millimeters}mm]`
  return (
    <div
      className={cn("bg-slate-600 relative z-10")}
      style={{
        width: nodeInfo.measured?.width,
        height: INITIAL_SECTION_10KV_METRICS.measured.height,
      }}
      onClick={handleClick}
    >
      <div className="absolute text-black top-[-6rem]">
        section10kv:
        {`measured: ${nodeInfo.measured?.width}`}
      </div>
      <Handle type="target" position={Position.Top} />
      {showButtons && (
        <ResizeButtons sectionId={id} className="absolute top-[-3rem]" />
      )}
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};
