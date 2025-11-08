import { cn } from "@/shared/lib";
import { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { TFixator35Kv } from "@/shared/react-flow/nodes/fixators/fixator-35kv/types";
import {
  fixator_35kv_height,
  fixator_35kv_width,
} from "@/shared/react-flow/nodes/fixators/fixator-35kv/measures";

export const Fixator35KvNode = memo((props: NodeProps<TFixator35Kv>) => {
  const {
    data: { intersectionClassname },
  } = props;
  console.log("fixator-35kv-render");
  return (
    <div
      style={{ width: fixator_35kv_width, height: fixator_35kv_height }}
      className={cn("rounded-full bg-black", intersectionClassname)}
    ></div>
  );
});
