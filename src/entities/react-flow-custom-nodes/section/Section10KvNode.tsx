import { Handle, NodeProps, Position } from "@xyflow/react";
import { cn } from "@/shared/lib/cn";

import { memo } from "react";

import { ResizeButtons } from "./ResizeButtons";
import { TSection10Kv } from "@/shared/react-flow/nodes/section-10kv/types";
import { INITIAL_SECTION_10KV_METRICS } from "@/shared/react-flow/nodes/section-10kv/measures";

export const Section10KvNode = memo(function Section10KvNode(props: NodeProps<TSection10Kv>) {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  //* https://pixelsconverter.com/pixels-to-millimeters
  // const millimeters = nodeInfo?.width * (25.4 / 96);
  // `w-[${millimeters}mm]`
  return (
    <div
      className={cn("bg-slate-600 relative z-10")}
      style={{
        width: props.data.width,
        height: INITIAL_SECTION_10KV_METRICS.height,
        zIndex: 10,
      }}
    >
      {/* <div className="absolute text-black top-[-6rem]">
        section10kv:
        {`measured: ${nodeInfo.measured?.width}`}
      </div> */}
      <Handle type="target" position={Position.Top} id={`${props.id}Target`} />
      {props.selected && (
        <ResizeButtons
          sectionVoltage="10"
          sectionWidth={props.data.width}
          sectionId={props.id}
          className="absolute top-[-3rem]"
        />
      )}
      <Handle type="source" position={Position.Bottom} id={`${props.id}Source`} />
    </div>
  );
});
