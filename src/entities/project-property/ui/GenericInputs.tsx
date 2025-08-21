import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";

import { ProjectHeaderInput, ProjectPropertyInput } from "@/entities/project-property";

import { GenericInputsProps } from "./GenericInputsProps";

export function GenericInputs({
  className,
  selectedNodeId,
  inputProperties,
  inputRenderData,
  inputPropertiesKey1,
  inputsLabel,
  param,
}: GenericInputsProps) {
  return (
    <div>
      <Accordion type="single" collapsible className={className}>
        <AccordionItem value={`accordion-${inputPropertiesKey1}`}>
          <AccordionTrigger className="flex items-center">{inputsLabel}</AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <ProjectHeaderInput
              KEY_1={inputPropertiesKey1}
              LABEL={inputsLabel}
              data={inputRenderData[0]}
              defaultValue={inputProperties?.[inputRenderData[0].keyTwo]}
              selectedNodeId={selectedNodeId}
              param={param}
            />
            {inputRenderData.slice(1).map((item) => (
              <ProjectPropertyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                value={inputProperties?.[item.keyTwo]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
