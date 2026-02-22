import { GenericInputs } from "@/entities/project-property";
import { useBoundStore } from "@/shared/appStore";
import { useGetCurrentNode } from "@/shared/lib/nodes-std";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { TPowerTransformer1004Kv } from "@/shared/react-flow/nodes/power-transformer-10-04kv";
import {
  POWER_TRANSFORMER_1004KV_INPUT_RENDER_DATA,
  POWER_TRANSFORMER_1004KV_KEY_1,
  POWER_TRANSFORMER_1004KV_LABEL,
} from "@/shared/react-flow/nodes/power-transformer-10-04kv/options";

export function PropertiesPt1004Kv() {
  const selectedNodeIds = useBoundStore(state => state.selectedNodeIds);
  const selectedNodeId = selectedNodeIds[0] as ReactFlowNodeId;
  const pt1004Kv = useGetCurrentNode(selectedNodeId) as TPowerTransformer1004Kv;
  return (
    <GenericInputs
      inputPropertiesKey1={POWER_TRANSFORMER_1004KV_KEY_1}
      inputRenderData={POWER_TRANSFORMER_1004KV_INPUT_RENDER_DATA}
      selectedNodeId={selectedNodeId}
      inputsLabel={POWER_TRANSFORMER_1004KV_LABEL}
      inputProperties={pt1004Kv?.data?.parameters}
    />
  );
}
