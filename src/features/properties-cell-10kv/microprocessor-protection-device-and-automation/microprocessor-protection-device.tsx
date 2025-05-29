import { Tmpdaa } from "@/shared/appStore/properties-types";
import { TCell10Kv } from "@/shared/appStore/react-flow-node-types";
import { UiInput, HeaderInput } from "@/shared/components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";
import { useReactFlow } from "@xyflow/react";
import {
  MICROPROCESSOR_DEVICE_DATA_10KV,
  MICROPROCESSOR_DEVICE_KEY_1_10KV,
  MICROPROCESSOR_DEVICE_LABEL_10KV,
} from "@/shared/constants";
export function MicroprocessorProtectionDevice({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  // const { node } = useGetCurrentNode(selectedNodeId);
  // console.log(node);
  const { getNode } = useReactFlow();

  const nodeValue = getNode(selectedNodeId as string) as TCell10Kv;

  return (
    <div>
      <Accordion type="single" collapsible className={className}>
        <AccordionItem value={`accordion-${MICROPROCESSOR_DEVICE_KEY_1_10KV}`}>
          <AccordionTrigger className="flex items-center">
            {MICROPROCESSOR_DEVICE_LABEL_10KV}
          </AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <HeaderInput
              KEY_1={MICROPROCESSOR_DEVICE_KEY_1_10KV}
              LABEL={MICROPROCESSOR_DEVICE_LABEL_10KV}
              data={MICROPROCESSOR_DEVICE_DATA_10KV[0]}
              defaultValue={
                nodeValue?.[MICROPROCESSOR_DEVICE_KEY_1_10KV]?.[
                  MICROPROCESSOR_DEVICE_DATA_10KV[0].keyTwo as keyof Tmpdaa
                ]
              }
              selectedNodeId={selectedNodeId}
            />
            {MICROPROCESSOR_DEVICE_DATA_10KV.slice(1).map((item) => (
              <UiInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                defaultValue={
                  nodeValue?.[MICROPROCESSOR_DEVICE_KEY_1_10KV]?.[item.keyTwo as keyof Tmpdaa]
                }
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
