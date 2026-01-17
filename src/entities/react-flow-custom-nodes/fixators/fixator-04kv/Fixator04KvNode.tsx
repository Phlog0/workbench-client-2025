import { cn } from "@/shared/lib";
import { memo } from "react";
import { NodeProps } from "@xyflow/react";
// import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { TFixator04Kv } from "@/shared/react-flow/nodes/fixators/fixator-04kv/types";
import {
  fixator_04kv_height,
  fixator_04kv_width,
} from "@/shared/react-flow/nodes/fixators/fixator-04kv/measures";

export const Fixator04KvNode = memo((props: NodeProps<TFixator04Kv>) => {
  const {
    data: { intersectionClassname },
  } = props;
  return (
    <div
      style={{ width: fixator_04kv_width, height: fixator_04kv_height }}
      className={cn("rounded-full bg-black", intersectionClassname)}
    ></div>
  );
});
