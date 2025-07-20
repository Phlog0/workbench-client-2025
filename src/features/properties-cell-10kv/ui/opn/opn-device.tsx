import { TOpn } from "@/shared/types/properties-types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";
import {
  OPN_DEVICE_DATA_10KV,
  OPN_DEVICE_KEY_1_10KV,
  OPN_DEVICE_LABEL_10KV,
} from "@/shared/constants/10kv";
import { ProjectPropertyInput } from "@/entities/project-property";
import { ProjectHeaderInput } from "@/entities/project-property";
export function OpnDevice({
  className,
  selectedNodeId,
  opnDevice,
}: {
  className?: string;
  selectedNodeId: string;
  opnDevice?: TOpn;
}) {
  return (
    <div>
      <Accordion type="single" collapsible className={className}>
        <AccordionItem value={`accordion-${OPN_DEVICE_KEY_1_10KV}`}>
          <AccordionTrigger className="flex items-center">{OPN_DEVICE_LABEL_10KV}</AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <ProjectHeaderInput
              KEY_1={OPN_DEVICE_KEY_1_10KV}
              LABEL={OPN_DEVICE_LABEL_10KV}
              data={OPN_DEVICE_DATA_10KV[0]}
              defaultValue={opnDevice?.[OPN_DEVICE_DATA_10KV[0].keyTwo as keyof TOpn]}
              selectedNodeId={selectedNodeId}
            />
            {OPN_DEVICE_DATA_10KV.slice(1).map((item) => (
              <ProjectPropertyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                value={opnDevice?.[item.keyTwo as keyof TOpn]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
