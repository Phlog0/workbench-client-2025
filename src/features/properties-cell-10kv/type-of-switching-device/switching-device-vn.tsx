import { TSwitchingDeviceVN } from "@/shared/appStore/properties-types";
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

const KEY_1 = "switchingDeviceVn";
const LABEL = "ВН (выключатели нагрузки)";
const switchingDeviceVnData = [
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
    label: "Номинальный ток, А",
    keyOne: KEY_1,
    keyTwo: "ratedCurrent",
    inputId: `${KEY_1}RatedCurrent`,
  },
  {
    inputType: "number",
    label: "Номинальный ток отключения (кА)",
    keyOne: KEY_1,
    keyTwo: "ratedBreakingCurrent",
    inputId: `${KEY_1}RatedBreakingCurrent`,
  },
  {
    inputType: "number",
    label: "Номинальное напряжение (кВ)",
    keyOne: KEY_1,
    keyTwo: "ratedVoltage",
    inputId: `${KEY_1}RatedVoltage`,
  },
  {
    inputType: "number",
    label: "Количество валов заземления",
    keyOne: KEY_1,
    keyTwo: "numberOfGroundShafts",
    inputId: `${KEY_1}NumberOfGroundShafts`,
  },
  {
    inputType: "text",
    label: "Расположение ножей заземления",
    keyOne: KEY_1,
    keyTwo: "locationOfGroundingBlades",
    inputId: `${KEY_1}LocationOfGroundingBlades`,
  },

  {
    inputType: "text",
    label: "Расположение привода выключателя",
    keyOne: KEY_1,
    keyTwo: "switchDriveLocation",
    inputId: `${KEY_1}SwitchDriveLocation`,
  },
  {
    inputType: "text",
    label: "Расположение привода ножей заземления",
    keyOne: KEY_1,
    keyTwo: "locationOfTheGroundingBladeDrive",
    inputId: `${KEY_1}LocationOfTheGroundingBladeDrive`,
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
    <div>
      <Accordion type="single" collapsible className={cn("", className)}>
        <AccordionItem value={`accordion-${KEY_1}`}>
          <AccordionTrigger className="flex items-center gap-3">
            {LABEL}
          </AccordionTrigger>
          <AccordionContent className="px-4 flex flex-col gap-3">
            <FirstInput
              KEY_1={KEY_1}
              LABEL={LABEL}
              data={typeInpKeys}
              defaultValue={
                nodeValue?.[KEY_1]?.[
                  typeInpKeys.keyTwo as keyof TSwitchingDeviceVN
                ]
              }
              selectedNodeId={selectedNodeId}
            />
            {switchingDeviceVnData.slice(1).map((item) => (
              <MyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                defaultValue={
                  nodeValue?.[KEY_1]?.[item.keyTwo as keyof TSwitchingDeviceVN]
                }
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
