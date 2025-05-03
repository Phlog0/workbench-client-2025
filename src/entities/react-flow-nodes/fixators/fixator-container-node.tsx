import { TFixatorContainer } from "@/shared/appStore/react-flow-types";
import { INITIAL_FIXATOR_CONTAINER_METRICS } from "@/shared/constants/measures";
import { useReactFlow } from "@xyflow/react";

type Props = {
  data: {
    id: string;
  };
};

export const FixatorContainerNode = ({ data: { id } }: Props) => {
  const { getNode } = useReactFlow();
  const nodeInfo = getNode(id) as TFixatorContainer;
  return (
    <div
      className={
        "bg-blue-800 h-4 flex justify-center items-center text-white rounded-full relative z-[-1]"
      }
      style={{
        width: nodeInfo?.measured?.width,
        height: INITIAL_FIXATOR_CONTAINER_METRICS.measured.height,
      }}
    >
      <div className="absolute text-black top-[-3rem]">
        fixator-container: {`measured: ${nodeInfo?.measured?.width}`}
      </div>
    </div>
  );
};
