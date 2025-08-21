import { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { TFixatorContainer } from "@/shared/react-flow/nodes/fixator-container/types";
import { INITIAL_FIXATOR_CONTAINER_METRICS } from "@/shared/react-flow/nodes/fixator-container/measures";

export const FixatorContainerNode = memo((props: NodeProps<TFixatorContainer>) => {
  return (
    <div
      className={
        "bg-blue-800 h-4 flex justify-center items-center text-white rounded-full relative z-[-1]"
      }
      style={{
        width: props.data.width,
        height: INITIAL_FIXATOR_CONTAINER_METRICS.height,
        display: "none",
      }}
    >
      {/* <div className="absolute text-black top-[-3rem]">
        fixator-container: {`measured: ${props.data.width}`}
      </div> */}
    </div>
  );
});
