import { TTn } from "@/shared/types/properties-types";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";
import {
  VOLTAGE_TRANSFORMER_DEVICE_DATA_10KV,
  VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV,
  VOLTAGE_TRANSFORMER_DEVICE_LABEL_10KV,
} from "@/shared/constants/10kv";
import { ReactFlowNodeId } from "@/shared/appStore/slices/types/react-flow-nodes";
import { ProjectHeaderInput, ProjectPropertyInput } from "@/entities/project-property";

export function VoltageTransformerDevice({
  className,
  selectedNodeId,
  voltageTransformer,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  voltageTransformer?: TTn;
}) {
  return (
    <div>
      <Accordion type="single" collapsible className={className}>
        <AccordionItem value={`accordion-${VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}`}>
          <AccordionTrigger className="flex items-center">
            {VOLTAGE_TRANSFORMER_DEVICE_LABEL_10KV}
          </AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <ProjectHeaderInput
              KEY_1={VOLTAGE_TRANSFORMER_DEVICE_KEY_1_10KV}
              LABEL={VOLTAGE_TRANSFORMER_DEVICE_LABEL_10KV}
              data={VOLTAGE_TRANSFORMER_DEVICE_DATA_10KV[0]}
              defaultValue={voltageTransformer?.[VOLTAGE_TRANSFORMER_DEVICE_DATA_10KV[0].keyTwo]}
              selectedNodeId={selectedNodeId}
            />
            {VOLTAGE_TRANSFORMER_DEVICE_DATA_10KV.slice(1).map((item) => (
              <ProjectPropertyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                value={voltageTransformer?.[item.keyTwo]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
