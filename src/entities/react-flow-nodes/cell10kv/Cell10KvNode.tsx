import { Handle, Position, useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib/react-std";
import header from "shared/assets/shina/SHINA_HEADER.svg";

import { VyklCell10kv } from "./vykl-cell-10kv";
import { MeasuringCurrentTransformers10Kv } from "./measuring-current-transformers-10kv";
import { TCell10Kv } from "@/shared/appStore/react-flow-types";
import { OpnCell10Kv } from "./opn-cell-10kv";
import {
  HeaderTireIcon,
  VerticalLine,
  VykatnoyRazjem1Icon,
} from "@/shared/assets/ui";
import { TnCell10kv } from "./tn-cell-10kv";
import { HEIGHT } from "./measures";
import { INITIAL_CELL_10KV_METRICS } from "@/shared/constants/measures";

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
  // console.log(nodeInfo)
  const border = `border-x-2 border-b-2 border-black ${
    nodeInfo?.selected
      ? "bg-blue-100/20 outline outline-dashed outline-indigo-600"
      : ""
  }`;
  return (
    <div
      className={cn(
        border,
        "flex flex-col items-center max-w-full w-full overflow-hidden gap-0 h-full bg-none"
      )}
      style={{
        width: INITIAL_CELL_10KV_METRICS.measured.width,
        height: INITIAL_CELL_10KV_METRICS.measured.height,
      }}
    >
      <Handle type="target" position={Position.Top} />
      {/* <img src={header} alt="" className="" /> */}
      <HeaderTireIcon width={300} height={35} strokeWidth={4} />
      <VyklCell10kv value={nodeInfo?.typeOfSwitchingDevice} />
      <MeasuringCurrentTransformers10Kv
        value={nodeInfo?.isMeasuringCurrentTransformersDevice}
      />
      {/* <VerticalLine height={50} strokeWidth={12} /> */}
      {nodeInfo.typeOfCell?.includes("ТН") && <TnCell10kv />}
      <OpnCell10Kv value={nodeInfo?.isThereOpnDevice} />
      <VykatnoyRazjem1Icon height={HEIGHT} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
