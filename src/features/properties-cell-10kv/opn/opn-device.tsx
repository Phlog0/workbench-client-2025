import { TOpn } from "@/shared/appStore/properties-types";
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

const KEY_1 = "opn";
const LABEL = "ОПН (ограничители перенапряжения)";
const opnDeviceRData = [
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
  {
    inputType: "number",
    label: "Пропускная способность, А",
    keyOne: KEY_1,
    keyTwo: "throughput",
    inputId: `${KEY_1}Throughput`,
  },
  {
    inputType: "number",
    label: "Номинальный разрядный ток, А",
    keyOne: KEY_1,
    keyTwo: "ratedDischargeCurrent",
    inputId: `${KEY_1}RatedDischargeCurrent`,
  },
  {
    inputType: "number",
    label: "Наибольшее длительно допустимое рабочее напряжение, кВ",
    keyOne: KEY_1,
    keyTwo: "maximumContinuousPermissibleOperatingVoltage",
    inputId: `${KEY_1}MaximumContinuousPermissibleOperatingVoltage`,
  },
];

export function OpnDevice({
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
  const typeInpKeys = opnDeviceRData[0];

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
                nodeValue?.[KEY_1]?.[typeInpKeys.keyTwo as keyof TOpn]
              }
              selectedNodeId={selectedNodeId}
            />
            {opnDeviceRData.slice(1).map((item) => (
              <MyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                defaultValue={nodeValue?.[KEY_1]?.[item.keyTwo as keyof TOpn]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
