import { GenericInputs } from "@/entities/project-property";
import { useBoundStore } from "@/shared/appStore";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import {
  MODEL_SECTION_35KV_INPUT_RENDER_DATA,
  MODEL_SECTION_35KV_KEY_1,
  MODEL_SECTION_35KV_LABEL,
} from "@/shared/react-flow/nodes/sections/section-35kv/options";
import { TSection35Kv } from "@/shared/react-flow/nodes/sections/section-35kv/types";

export function PropertiesSection35Kv({ className }: { className?: string }) {
  const selectedNodeIds = useBoundStore(state => state.selectedNodeIds);
  const selectedNodeId = selectedNodeIds[0] as ReactFlowNodeId;
  const section35Kv = useGetCurrentNode(selectedNodeId) as TSection35Kv;

  return (
    <div className={className}>
      <h2>Сецкия 35 кВ</h2>
      <GenericInputs
        selectedNodeId={selectedNodeId}
        inputPropertiesKey1={MODEL_SECTION_35KV_KEY_1}
        inputsLabel={MODEL_SECTION_35KV_LABEL}
        inputRenderData={MODEL_SECTION_35KV_INPUT_RENDER_DATA}
        inputProperties={section35Kv.data.model}
      />
    </div>
  );
}
