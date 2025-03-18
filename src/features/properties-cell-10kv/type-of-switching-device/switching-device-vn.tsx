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
const switchingDeviceVnData = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: "switchingDeviceVn",
    keyTwo: "type",
    inputId: `switchingDeviceVnType`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: "switchingDeviceVn",
    keyTwo: "title",
    inputId: `switchingDeviceVnTitle`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: "switchingDeviceVn",
    keyTwo: "manufacturer",
    inputId: `switchingDeviceVnManufacturer`,
  },
  {
    inputType: "number",
    label: "Номинальный ток, А",
    keyOne: "switchingDeviceVn",
    keyTwo: "ratedCurrent",
    inputId: `switchingDeviceVnRatedCurrent`,
  },
  {
    inputType: "number",
    label: "Номинальный ток отключения (кА)",
    keyOne: "switchingDeviceVn",
    keyTwo: "ratedBreakingCurrent",
    inputId: `switchingDeviceVnRatedBreakingCurrent`,
  },
  {
    inputType: "number",
    label: "Номинальное напряжение (кВ)",
    keyOne: "switchingDeviceVn",
    keyTwo: "ratedVoltage",
    inputId: `switchingDeviceVnRatedVoltage`,
  },
  {
    inputType: "number",
    label: "Количество валов заземления",
    keyOne: "switchingDeviceVn",
    keyTwo: "numberOfGroundShafts",
    inputId: `switchingDeviceVnNumberOfGroundShafts`,
  },
  {
    inputType: "text",
    label: "Расположение ножей заземления",
    keyOne: "switchingDeviceVn",
    keyTwo: "locationOfGroundingBlades",
    inputId: `switchingDeviceVnLocationOfGroundingBlades`,
  },

  {
    inputType: "text",
    label: "Расположение привода выключателя",
    keyOne: "switchingDeviceVn",
    keyTwo: "switchDriveLocation",
    inputId: `switchingDeviceVnSwitchDriveLocation`,
  },
  {
    inputType: "text",
    label: "Расположение привода ножей заземления",
    keyOne: "switchingDeviceVn",
    keyTwo: "locationOfTheGroundingBladeDrive",
    inputId: `switchingDeviceVnLocationOfTheGroundingBladeDrive`,
  },
];

export function SwitchingDeviceVn({
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
  const typeInpKeys = switchingDeviceVnData[0];

  return (
    <Accordion type="single" collapsible className={cn("", className)}>
      <AccordionItem value={`accordion-switchingDeviceVn`}>
        <AccordionTrigger className="flex items-center gap-3">
          <div>
            <MyInput
              {...switchingDeviceVnData[0]}
              selectedNodeId={selectedNodeId}
              defaultValue={
                nodeValue?.[typeInpKeys.keyOne as keyof TCell10Kv]?.[
                  typeInpKeys.keyTwo
                ]
              }
            />
          </div>
          <ModalComponent
            content={<MyVirtualTable param="swithcingDeviceVn" />}
            // content={<MyVirtualTable />}
            dialogTitle={"ВН (выключатели нагрузки)"}
            triggerTitle={
              <div className="mt-5 border">
                <BookOpen />
              </div>
            }
            className={cn("")}
          />
        </AccordionTrigger>
        <AccordionContent className="px-4 flex flex-col gap-3">
          {switchingDeviceVnData.slice(1).map((item) => (
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
