import { Handle, Position, useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib/react-std";

import { VyklIcon10Kv } from "./vykl-icon-10kv";
import { MeasuringCurrentTransformersIcon10Kv } from "./measuring-current-transformers-icon-10kv";
import { TCell10Kv } from "@/shared/appStore/react-flow-node-types";
import { OpnIcon10Kv } from "./opn-icon-10kv";
import { HeaderTireIcon, VykatnoyRazjem1Icon } from "@/shared/assets/ui";
import { TnIcon10Kv } from "./tn-icon-10kv";
import { ICON_HEIGHT } from "@/shared/constants";
import { INITIAL_CELL_10KV_METRICS } from "@/shared/constants/measures/measures";

type Props = {
  data: {
    id: string;
  };
};

export const CellNode10Kv = ({ data: { id } }: Props) => {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  const { getNode } = useReactFlow();
  const nodeInfo = getNode(id) as TCell10Kv;
  // console.log(nodeInfo)
  const border = `border-x-2 border-b-2 border-black ${
    nodeInfo?.selected ? "bg-blue-100/20 outline outline-dashed outline-indigo-600" : ""
  }`;
  return (
    <div
      className={cn(
        border,
        "flex flex-col items-center max-w-full w-full overflow-hidden gap-0 h-full bg-none",
      )}
      style={{
        width: INITIAL_CELL_10KV_METRICS.measured.width,
        height: INITIAL_CELL_10KV_METRICS.measured.height,
      }}
    >
      <Handle type="target" position={Position.Top} />
      {/* <img src={header} alt="" className="" /> */}
      <HeaderTireIcon width={300} height={35} strokeWidth={4} />
      <VyklIcon10Kv value={nodeInfo?.typeOfSwitchingDevice} />
      <MeasuringCurrentTransformersIcon10Kv
        value={nodeInfo?.typeOfMeasuringCurrentTransformersDevice}
      />
      {/* <VerticalLine height={50} strokeWidth={12} /> */}
      {nodeInfo.typeOfCell?.includes("ТН") && <TnIcon10Kv />}
      <OpnIcon10Kv value={nodeInfo?.isThereOpnDevice} />
      <VykatnoyRazjem1Icon height={ICON_HEIGHT} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
