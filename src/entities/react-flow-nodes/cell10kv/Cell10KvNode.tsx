import { Handle, Position, useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib/react-std";

import header from "shared/assets/shina/SHINA_HEADER.svg";

import { VyklCell10kv } from "./vykl-cell-10kv";
import { MeasuringCurrentTransformers10Kv } from "./measuring-current-transformers-10kv";
import { TCell10Kv } from "@/shared/appStore/react-flow-types";

type Props = {
  data: {
    id: string;
  };
};

export const Cell10KvNode = ({ data: { id } }: Props) => {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  const { getNode } = useReactFlow();
  const nodeInfo = getNode(id) as TCell10Kv;
  const border = `border-x-2 border-b-2 border-black ${
    nodeInfo?.selected
      ? "bg-blue-100 outline outline-dashed outline-indigo-600"
      : ""
  }`;
  return (
    <div
      className={cn(
        "w-[300px] h-[750px] relative",
        border,
        "flex flex-col items-center"
      )}
    >
      <Handle type="target" position={Position.Top} />
      <img src={header} alt="" className="" />
      <VyklCell10kv value={nodeInfo?.typeOfSwitchingDevice} />
      <MeasuringCurrentTransformers10Kv
        value={nodeInfo?.isMeasuringCurrentTransformersDevice}
      />

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
