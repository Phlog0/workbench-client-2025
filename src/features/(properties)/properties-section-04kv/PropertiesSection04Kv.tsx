import { GenericInputs } from "@/entities/project-property";
import { useBoundStore } from "@/shared/appStore";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import {
  MODEL_SECTION_04KV_INPUT_RENDER_DATA,
  MODEL_SECTION_04KV_KEY_1,
  MODEL_SECTION_04KV_LABEL,
} from "@/shared/react-flow/nodes/sections/section-04kv/options";
import { TSection04Kv } from "@/shared/react-flow/nodes/sections/section-04kv/types";

export function PropertiesSection04Kv({ className }: { className?: string }) {
  const selectedNodeIds = useBoundStore((state) => state.selectedNodeIds);
  const selectedNodeId = selectedNodeIds[0] as ReactFlowNodeId;
  const section04Kv = useGetCurrentNode(selectedNodeId) as TSection04Kv;

  return (
    <div className={className}>
      <h2>Сецкия 04 кВ</h2>
      <GenericInputs
        selectedNodeId={selectedNodeId}
        inputPropertiesKey1={MODEL_SECTION_04KV_KEY_1}
        inputsLabel={MODEL_SECTION_04KV_LABEL}
        inputRenderData={MODEL_SECTION_04KV_INPUT_RENDER_DATA}
        inputProperties={section04Kv.data.model}
      />
    </div>
  );
}
