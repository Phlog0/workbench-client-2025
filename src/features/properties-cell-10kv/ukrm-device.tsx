import { TUkrm } from "@/shared/appStore/properties-types";
import { TCell10Kv } from "@/shared/appStore/react-flow-node-types";
import { HeaderInput, UiInput } from "@/shared/components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";
import { useReactFlow } from "@xyflow/react";
import {
  UKRM_DEVICE_DATA_10KV,
  UKRM_DEVICE_KEY_1_10KV,
  UKRM_DEVICE_LABEL_10KV,
} from "@/shared/constants";
export function UkrmDevice({
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
        <AccordionItem value={`accordion-${UKRM_DEVICE_KEY_1_10KV}`}>
          <AccordionTrigger className="flex items-center">
            {UKRM_DEVICE_LABEL_10KV}
          </AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <HeaderInput
              KEY_1={UKRM_DEVICE_KEY_1_10KV}
              LABEL={UKRM_DEVICE_LABEL_10KV}
              data={UKRM_DEVICE_DATA_10KV[0]}
              defaultValue={
                nodeValue?.[UKRM_DEVICE_KEY_1_10KV]?.[
                  UKRM_DEVICE_DATA_10KV[0].keyTwo as keyof TUkrm
                ]
              }
              selectedNodeId={selectedNodeId}
            />
            {UKRM_DEVICE_DATA_10KV.slice(1).map((item) => (
              <UiInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                defaultValue={nodeValue?.[UKRM_DEVICE_KEY_1_10KV]?.[item.keyTwo as keyof TUkrm]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
