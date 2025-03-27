import { Tmpdaa } from "@/shared/appStore/properties-types";
import { TCell10Kv } from "@/shared/appStore/react-flow-types";
import { FirstInput, MyInput } from "@/shared/components";
import { cn } from "@/shared/lib/react-std";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui";
import { useReactFlow } from "@xyflow/react";

const KEY_1 = "mpdaa";
const LABEL = "Микропроцессорное устройство защиты и автоматики";
const microprocessorProtectionDeviceData = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: KEY_1,
    keyTwo: "type",
    inputId: `${KEY_1}Type`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: KEY_1,
    keyTwo: "title",
    inputId: `${KEY_1}Title`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: KEY_1,
    keyTwo: "manufacturer",
    inputId: `${KEY_1}Manufacturer`,
  },
];

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
  const typeInpKeys = microprocessorProtectionDeviceData[0];

  return (
    <div>
      <Accordion type="single" collapsible className={cn("", className)}>
        <AccordionItem value={`accordion-${KEY_1}`}>
          <AccordionTrigger className="flex items-center">
            {LABEL}
          </AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <FirstInput
              KEY_1={KEY_1}
              LABEL={LABEL}
              data={typeInpKeys}
              defaultValue={
                nodeValue?.[KEY_1]?.[typeInpKeys.keyTwo as keyof Tmpdaa]
              }
              selectedNodeId={selectedNodeId}
            />
            {microprocessorProtectionDeviceData.slice(1).map((item) => (
              <MyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                defaultValue={nodeValue?.[KEY_1]?.[item.keyTwo as keyof Tmpdaa]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
