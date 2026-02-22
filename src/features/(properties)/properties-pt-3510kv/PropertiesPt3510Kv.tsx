import { GenericInputs } from "@/entities/project-property";
import { useBoundStore } from "@/shared/appStore";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TPowerTransformer3510Kv } from "@/shared/react-flow/nodes/power-transformer-35-10kv";
import {
  POWER_TRANSFORMER_3510KV_INPUT_RENDER_DATA,
  POWER_TRANSFORMER_3510KV_KEY_1,
  POWER_TRANSFORMER_3510KV_LABEL,
} from "@/shared/react-flow/nodes/power-transformer-35-10kv";

export function PropertiesPt3510Kv() {
  const selectedNodeIds = useBoundStore(state => state.selectedNodeIds);
  const selectedNodeId = selectedNodeIds[0] as ReactFlowNodeId;
  const pt3510Kv = useGetCurrentNode(selectedNodeId) as TPowerTransformer3510Kv;
  return (
    <GenericInputs
      inputPropertiesKey1={POWER_TRANSFORMER_3510KV_KEY_1}
      inputRenderData={POWER_TRANSFORMER_3510KV_INPUT_RENDER_DATA}
      selectedNodeId={selectedNodeId}
      inputsLabel={POWER_TRANSFORMER_3510KV_LABEL}
      inputProperties={pt3510Kv?.data?.parameters}
    />
  );
}
