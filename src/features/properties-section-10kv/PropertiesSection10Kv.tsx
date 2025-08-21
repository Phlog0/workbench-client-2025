import { GenericInputs } from "@/entities/project-property";
import { useBoundStore } from "@/shared/appStore";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes";
import {
  MODEL_SECTION_10KV_INPUT_RENDER_DATA,
  MODEL_SECTION_10KV_KEY_1,
  MODEL_SECTION_10KV_LABEL,
} from "@/shared/react-flow/nodes/section-10kv/options";
import { TSection10Kv } from "@/shared/react-flow/nodes/section-10kv/types";

export function PropertiesSection10Kv({ className }: { className?: string }) {
  const selectedNodeIds = useBoundStore((state) => state.selectedNodeIds);
  const selectedNodeId = selectedNodeIds[0] as ReactFlowNodeId;
  const section10Kv = useGetCurrentNode(selectedNodeId) as TSection10Kv;

return <div className={className}>
    <h2>Сецкия 10 кВ</h2>
    <GenericInputs
      selectedNodeId={selectedNodeId}
      inputPropertiesKey1={MODEL_SECTION_10KV_KEY_1}
      inputsLabel={MODEL_SECTION_10KV_LABEL}
      inputRenderData={MODEL_SECTION_10KV_INPUT_RENDER_DATA}
      inputProperties={section10Kv.data.model}
    />
  </div>;
}
