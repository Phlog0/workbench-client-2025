import { TSwitchingDeviceR } from "@/shared/appStore/properties-types";
import { TCell10Kv } from "@/shared/appStore/react-flow-node-types";
import { HeaderInput, UiInput } from "@/shared/components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";
import { useReactFlow } from "@xyflow/react";
import {
  SWITCHING_DEVICE_R_DATA_10KV,
  SWITCHING_DEVICE_R_KEY_1_10KV,
  SWITCHING_DEVICE_R_LABEL_10KV,
} from "@/shared/constants";
export function SwitchingDeviceR({
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
        <AccordionItem value={`accordion-${SWITCHING_DEVICE_R_KEY_1_10KV}`}>
          <AccordionTrigger className="flex items-center">
            {SWITCHING_DEVICE_R_LABEL_10KV}
          </AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <HeaderInput
              KEY_1={SWITCHING_DEVICE_R_KEY_1_10KV}
              LABEL={SWITCHING_DEVICE_R_LABEL_10KV}
              data={SWITCHING_DEVICE_R_DATA_10KV[0]}
              defaultValue={
                nodeValue?.[SWITCHING_DEVICE_R_KEY_1_10KV]?.[
                  SWITCHING_DEVICE_R_DATA_10KV[0].keyTwo as keyof TSwitchingDeviceR
                ]
              }
              selectedNodeId={selectedNodeId}
            />
            {SWITCHING_DEVICE_R_DATA_10KV.slice(1).map((item) => (
              <UiInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                defaultValue={
                  nodeValue?.[SWITCHING_DEVICE_R_KEY_1_10KV]?.[
                    item.keyTwo as keyof TSwitchingDeviceR
                  ]
                }
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
