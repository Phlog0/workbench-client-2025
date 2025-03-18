import { TCell10Kv } from "@/shared/appStore/react-flow-types";
import { ModalComponent, MyInput, MyVirtualTable } from "@/shared/components";
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
const switchingDeviceRData = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: "switchingDeviceR",
    keyTwo: "type",
    inputId: `switchingDeviceRType`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: "switchingDeviceR",
    keyTwo: "title",
    inputId: `switchingDeviceRTitle`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: "switchingDeviceR",
    keyTwo: "manufacturer",
    inputId: `switchingDeviceRManufacturer`,
  },
  {
    inputType: "number",
    label: "Номинальный ток, А",
    keyOne: "switchingDeviceR",
    keyTwo: "ratedCurrent",
    inputId: `switchingDeviceRRatedCurrent`,
  },
  {
    inputType: "number",
    label: "Ток термической стойкости (А)",
    keyOne: "switchingDeviceR",
    keyTwo: "thermalCurrent",
    inputId: `switchingDeviceRThermalCurrent`,
  },
  {
    inputType: "number",
    label: "Номинальное напряжение (кВ)",
    keyOne: "switchingDeviceR",
    keyTwo: "ratedVoltage",
    inputId: `switchingDeviceRRatedVoltage`,
  },
];

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
  const typeInpKeys = switchingDeviceRData[0];

  return (
    <Accordion type="single" collapsible className={cn("", className)}>
      <AccordionItem value={`accordion-switchingDeviceR`}>
        <AccordionTrigger className="flex items-center gap-3">
          <div>
            <MyInput
              {...switchingDeviceRData[0]}
              selectedNodeId={selectedNodeId}
              defaultValue={
                nodeValue?.[typeInpKeys.keyOne as keyof TCell10Kv]?.[
                  typeInpKeys.keyTwo
                ]
              }
            />
          </div>
          <ModalComponent
            content={<MyVirtualTable param="swithcingDeviceR" />}
            // content={<MyVirtualTable />}
            dialogTitle={"Р (разъединители)"}
            triggerTitle={
              <div className="mt-5 border">
                <BookOpen />
              </div>
            }
            className={cn("")}
          />
        </AccordionTrigger>
        <AccordionContent className="px-4 flex flex-col gap-3">
          {switchingDeviceRData.slice(1).map((item) => (
            <MyInput
              key={item.inputId}
              {...item}
              selectedNodeId={selectedNodeId}
              defaultValue={nodeValue?.[item.keyOne]?.[item.keyTwo]}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
