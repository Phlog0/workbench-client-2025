import { TSwitchingDeviceR } from "@/shared/types/properties-types";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";
import {
  SWITCHING_DEVICE_R_DATA_10KV,
  SWITCHING_DEVICE_R_KEY_1_10KV,
  SWITCHING_DEVICE_R_LABEL_10KV,
} from "@/shared/constants/10kv";
import { ProjectPropertyInput } from "@/entities/project-property";
import { ProjectHeaderInput } from "@/entities/project-property";
export function SwitchingDeviceR({
  className,
  selectedNodeId,
  switchingDevice,
}: {
  className?: string;
  selectedNodeId: string;
  switchingDevice?: TSwitchingDeviceR;
}) {
  return (
    <div>
      <Accordion type="single" collapsible className={className}>
        <AccordionItem value={`accordion-${SWITCHING_DEVICE_R_KEY_1_10KV}`}>
          <AccordionTrigger className="flex items-center">
            {SWITCHING_DEVICE_R_LABEL_10KV}
          </AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <ProjectHeaderInput
              KEY_1={SWITCHING_DEVICE_R_KEY_1_10KV}
              LABEL={SWITCHING_DEVICE_R_LABEL_10KV}
              data={SWITCHING_DEVICE_R_DATA_10KV[0]}
              defaultValue={switchingDevice?.[SWITCHING_DEVICE_R_DATA_10KV[0].keyTwo]}
              selectedNodeId={selectedNodeId}
            />
            {SWITCHING_DEVICE_R_DATA_10KV.slice(1).map((item) => (
              <ProjectPropertyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                value={switchingDevice?.[item.keyTwo]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
