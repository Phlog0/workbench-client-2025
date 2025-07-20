import { TTsn } from "@/shared/types/properties-types";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";
import {
  TSN_DEVICE_DATA_10KV,
  TSN_DEVICE_LABEL_10KV,
  TSN_DEVICE_KEY_1_10KV,
} from "@/shared/constants/10kv";
import { ProjectHeaderInput, ProjectPropertyInput } from "@/entities/project-property";

export function TsnDevice({
  className,
  selectedNodeId,
  tsn,
}: {
  className?: string;
  selectedNodeId: string;
  tsn?: TTsn;
}) {
  return (
    <div>
      <Accordion type="single" collapsible className={className}>
        <AccordionItem value={`accordion-${TSN_DEVICE_KEY_1_10KV}`}>
          <AccordionTrigger className="flex items-center">{TSN_DEVICE_LABEL_10KV}</AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <ProjectHeaderInput
              KEY_1={TSN_DEVICE_KEY_1_10KV}
              LABEL={TSN_DEVICE_LABEL_10KV}
              data={TSN_DEVICE_DATA_10KV[0]}
              defaultValue={tsn?.[TSN_DEVICE_DATA_10KV[0].keyTwo]}
              selectedNodeId={selectedNodeId}
            />
            {TSN_DEVICE_DATA_10KV.slice(1).map((item) => (
              <ProjectPropertyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                value={tsn?.[item.keyTwo]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
