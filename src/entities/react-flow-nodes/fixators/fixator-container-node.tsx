import { TFixatorContainer } from "@/shared/types/react-flow-node-types";
import { INITIAL_FIXATOR_CONTAINER_METRICS } from "@/shared/constants/measures/measures";
import { memo } from "react";
import { NodeProps } from "@xyflow/react";

export const FixatorContainerNode = memo(({ data }: NodeProps<TFixatorContainer>) => {
  return (
    <div
      className={
        "bg-blue-800 h-4 flex justify-center items-center text-white rounded-full relative z-[-1]"
      }
      style={{
        width: data.width,
        height: INITIAL_FIXATOR_CONTAINER_METRICS.measured.height,
        display: "none",
      }}
    >
      <div className="absolute text-black top-[-3rem]">
        fixator-container: {`measured: ${data.width}`}
      </div>
    </div>
  );
});
