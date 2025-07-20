import { Tmpdaa } from "@/shared/types/properties-types";
import { TCell10Kv } from "@/shared/types/react-flow-node-types";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";
import { useReactFlow } from "@xyflow/react";
import {
  MICROPROCESSOR_DEVICE_DATA_10KV,
  MICROPROCESSOR_DEVICE_KEY_1_10KV,
  MICROPROCESSOR_DEVICE_LABEL_10KV,
} from "@/shared/constants/10kv";
import { ProjectPropertyInput } from "@/entities/project-property";
import { ProjectHeaderInput } from "@/entities/project-property";
export function MicroprocessorProtectionDevice({
  className,
  selectedNodeId,
  microProc,
}: {
  className?: string;
  selectedNodeId: string;
  microProc?: Tmpdaa;
}) {
  // const { node } = useGetCurrentNode(selectedNodeId);
  // console.log(node);
  const { getNode } = useReactFlow();

  const cell10kv = getNode(selectedNodeId) as TCell10Kv;

  return (
    <div>
      <Accordion type="single" collapsible className={className}>
        <AccordionItem value={`accordion-${MICROPROCESSOR_DEVICE_KEY_1_10KV}`}>
          <AccordionTrigger className="flex items-center">
            {MICROPROCESSOR_DEVICE_LABEL_10KV}
          </AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <ProjectHeaderInput
              KEY_1={MICROPROCESSOR_DEVICE_KEY_1_10KV}
              LABEL={MICROPROCESSOR_DEVICE_LABEL_10KV}
              data={MICROPROCESSOR_DEVICE_DATA_10KV[0]}
              defaultValue={microProc?.[MICROPROCESSOR_DEVICE_DATA_10KV[0].keyTwo as keyof Tmpdaa]}
              selectedNodeId={selectedNodeId}
            />
            {MICROPROCESSOR_DEVICE_DATA_10KV.slice(1).map((item) => (
              <ProjectPropertyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                value={microProc?.[item.keyTwo as keyof Tmpdaa]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
