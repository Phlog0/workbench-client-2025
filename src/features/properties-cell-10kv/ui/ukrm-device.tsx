import { TUkrm } from "@/shared/types/properties-types";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";
import {
  UKRM_DEVICE_DATA_10KV,
  UKRM_DEVICE_KEY_1_10KV,
  UKRM_DEVICE_LABEL_10KV,
} from "@/shared/constants/10kv";
import { ProjectHeaderInput, ProjectPropertyInput } from "@/entities/project-property";
export function UkrmDevice({
  className,
  selectedNodeId,
  ukrm,
}: {
  className?: string;
  selectedNodeId: string;
  ukrm?: TUkrm;
}) {
  // const { node } = useGetCurrentNode(selectedNodeId);
  // console.log(node);

  return (
    <div>
      <Accordion type="single" collapsible className={className}>
        <AccordionItem value={`accordion-${UKRM_DEVICE_KEY_1_10KV}`}>
          <AccordionTrigger className="flex items-center">
            {UKRM_DEVICE_LABEL_10KV}
          </AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <ProjectHeaderInput
              KEY_1={UKRM_DEVICE_KEY_1_10KV}
              LABEL={UKRM_DEVICE_LABEL_10KV}
              data={UKRM_DEVICE_DATA_10KV[0]}
              defaultValue={ukrm?.[UKRM_DEVICE_DATA_10KV[0].keyTwo]}
              selectedNodeId={selectedNodeId}
            />
            {UKRM_DEVICE_DATA_10KV.slice(1).map((item) => (
              <ProjectPropertyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                value={ukrm?.[item.keyTwo]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
