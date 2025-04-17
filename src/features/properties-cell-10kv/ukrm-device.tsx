import { TUkrm } from "@/shared/appStore/properties-types";
import { TCell10Kv } from "@/shared/appStore/react-flow-types";
import {
  FirstInput,
  ModalComponent,
  MyInput,
  MyVirtualTable,
} from "@/shared/components";
import { cn } from "@/shared/lib/react-std";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui";
import { useReactFlow } from "@xyflow/react";
import { BookOpen } from "lucide-react";
import { useParams } from "react-router-dom";

const KEY_1 = "ukrm";
const LABEL = "УКРМ";
const ukrmDeviceData = [
  {
    inputType: "text",
    label: "Наименование",
    keyOne: KEY_1,
    keyTwo: "title",
    inputId: `${KEY_1}Title`,
  },
  {
    inputType: "number",
    label: "Мощность, Квар",
    keyOne: KEY_1,
    keyTwo: "power",
    inputId: `${KEY_1}Power`,
  },
  {
    inputType: "text",
    label: "Шаги регулировки, квар. Фикс.",
    keyOne: KEY_1,
    keyTwo: "adjustmentStepsFix",
    inputId: `${KEY_1}AdjustmentStepsFix`,
  },
  {
    inputType: "text",
    label: "Шаги регулировки, квар. Рег.",
    keyOne: KEY_1,
    keyTwo: "adjustmentStepsReg",
    inputId: `${KEY_1}AdjustmentStepsReg`,
  },
  {
    inputType: "text",
    label: "Габариты**ДхВхГ,мм",
    keyOne: KEY_1,
    keyTwo: "dimensions",
    inputId: `${KEY_1}Dimensions`,
  },
  {
    inputType: "number",
    label: "Ток,А (при U=6.3 кВ)",
    keyOne: KEY_1,
    keyTwo: "currentAt6_3kV",
    inputId: `${KEY_1}CurrentAt6_3kV`,
  },
  {
    inputType: "number",
    label: "Ток,А (при U=10.5 кВ)",
    keyOne: KEY_1,
    keyTwo: "currentAt10_5kV",
    inputId: `${KEY_1}currentAt10_5kV`,
  },
  {
    inputType: "number",
    label: "Масса, кг",
    keyOne: KEY_1,
    keyTwo: "weight",
    inputId: `${KEY_1}Weight`,
  },
];

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
  const typeInpKeys = ukrmDeviceData[0];

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
                nodeValue?.[KEY_1]?.[typeInpKeys.keyTwo as keyof TUkrm]
              }
              selectedNodeId={selectedNodeId}
            />
            {ukrmDeviceData.slice(1).map((item) => (
              <MyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                defaultValue={nodeValue?.[KEY_1]?.[item.keyTwo as keyof TUkrm]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
