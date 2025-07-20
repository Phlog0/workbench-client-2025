import { TMeasuringCurrentTransformersDevice } from "@/shared/types";

import { cn } from "@/shared/lib";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";

import { TMeasuringCurrentTransformersDeviceAccuracyClass } from "./type-of-measuring-current-transformers-device";

import {
  MEASURING_CURRENT_TRANSFORMERS_DEVICE_DATA_10KV,
  MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV,
  MEASURING_CURRENT_TRANSFORMERS_DEVICE_LABEL_10KV,
} from "@/shared/constants/10kv";
import { ProjectPropertyInput } from "@/entities/project-property";
import { ProjectHeaderInput } from "@/entities/project-property";

export function MeasuringCurrentTransformersDevice({
  className,
  selectedNodeId,
  measuringCurrentTransformersDeviceAccuracyClass = 1,
  measuringCurrentTransformersDevice,
}: {
  className?: string;
  selectedNodeId: string;
  measuringCurrentTransformersDeviceAccuracyClass?: TMeasuringCurrentTransformersDeviceAccuracyClass;
  measuringCurrentTransformersDevice?: TMeasuringCurrentTransformersDevice;
}) {
  console.log({ measuringCurrentTransformersDevice });
  return (
    <div>
      <Accordion type="single" collapsible className={cn("", className)}>
        <AccordionItem value={`accordion-${MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}`}>
          <AccordionTrigger className="flex items-center">
            {MEASURING_CURRENT_TRANSFORMERS_DEVICE_LABEL_10KV}
          </AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <ProjectHeaderInput
              KEY_1={MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}
              measuringCurrentTransformersDeviceAccuracyClass={
                measuringCurrentTransformersDeviceAccuracyClass
              }
              LABEL={MEASURING_CURRENT_TRANSFORMERS_DEVICE_LABEL_10KV}
              data={MEASURING_CURRENT_TRANSFORMERS_DEVICE_DATA_10KV[0]}
              defaultValue={
                measuringCurrentTransformersDevice?.[
                  MEASURING_CURRENT_TRANSFORMERS_DEVICE_DATA_10KV[0].keyTwo
                ]
              }
              selectedNodeId={selectedNodeId}
              param={`${MEASURING_CURRENT_TRANSFORMERS_DEVICE_KEY_1_10KV}?measuringCurrentTransformersDeviceAccuracyClass=${measuringCurrentTransformersDeviceAccuracyClass}`}
            />
            {MEASURING_CURRENT_TRANSFORMERS_DEVICE_DATA_10KV.slice(1).map((item) => (
              <ProjectPropertyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                value={measuringCurrentTransformersDevice?.[item.keyTwo]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
