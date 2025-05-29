import { Handle, Position, useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib/react-std";

import { memo, useState } from "react";
import { ResizeButtons } from "./resize-buttons";
import { TSection10Kv } from "@/shared/appStore/react-flow-node-types";
import { useGetNodeChildrenIds } from "@/shared/lib/model/use-get-node-children";
import { INITIAL_SECTION_10KV_METRICS } from "@/shared/constants/measures/measures";
type Props = {
  data: {
    id: string;
  };
};
export const Section10KvNode = memo(function Section10KvNode({ data: { id } }: Props) {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  const { getNode } = useReactFlow();

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
        zIndex: 10,
      }}
    >
      {/* <div className="absolute text-black top-[-6rem]">
        section10kv:
        {`measured: ${nodeInfo.measured?.width}`}
      </div> */}
      <Handle type="target" position={Position.Top} />
      {/* {nodeInfo.selected && (
        <ResizeButtons
          sectionWidth={nodeInfo.measured?.width}
          sectionId={id}
          className="absolute top-[-3rem]"
        />
      )} */}
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
});
