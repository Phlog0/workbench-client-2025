import { TMeasuringCurrentTransformersDevice } from "@/shared/appStore/properties-types";
import { TCell10Kv } from "@/shared/appStore/react-flow-node-types";
import { HeaderInput, UiInput } from "@/shared/components";

import { cn } from "@/shared/lib/react-std";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";
import { useReactFlow } from "@xyflow/react";
import { TtCount } from "./type-of-measuring-current-transformers-device";

import {
  MEASURING_CURRENT_TRANSFORMERS_DEVICE_DATA_10KV,
  MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV,
  MEASURING_CURRENT_TRANSFORMERS_DEVICE_LABEL_10KV,
} from "@/shared/constants";

export function MeasuringCurrentTransformersDevice({
  className,
  selectedNodeId,
  ttCount,
}: {
  className?: string;
  selectedNodeId: string;
  ttCount?: TtCount;
}) {
  // const { node } = useGetCurrentNode(selectedNodeId);
  // console.log(node);
  const { getNode } = useReactFlow();

  const nodeValue = getNode(selectedNodeId as string) as TCell10Kv;
  const typeInpKeys = MEASURING_CURRENT_TRANSFORMERS_DEVICE_DATA_10KV[0];
  return (
    <div>
      <Accordion type="single" collapsible className={cn("", className)}>
        <AccordionItem value={`accordion-${MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}`}>
          <AccordionTrigger className="flex items-center">
            {MEASURING_CURRENT_TRANSFORMERS_DEVICE_LABEL_10KV}
          </AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <HeaderInput
              KEY_1={MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}
              ttCount={ttCount}
              LABEL={MEASURING_CURRENT_TRANSFORMERS_DEVICE_LABEL_10KV}
              data={typeInpKeys}
              defaultValue={
                nodeValue?.[MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV]?.[
                  typeInpKeys.keyTwo as keyof TMeasuringCurrentTransformersDevice
                ]
              }
              selectedNodeId={selectedNodeId}
            />
            {MEASURING_CURRENT_TRANSFORMERS_DEVICE_DATA_10KV.slice(1).map((item) => (
              <UiInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                defaultValue={
                  nodeValue?.[MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV]?.[
                    item.keyTwo as keyof TMeasuringCurrentTransformersDevice
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
