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
const SwitchingDeviceVvData = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: "switchingDeviceVv",
    keyTwo: "type",
    inputId: `switchingDeviceVvType`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: "switchingDeviceVv",
    keyTwo: "title",
    inputId: `switchingDeviceVvTitle`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: "switchingDeviceVv",
    keyTwo: "manufacturer",
    inputId: `switchingDeviceVvManufacturer`,
  },
  {
    inputType: "number",
    label: "Номинальный ток, А",
    keyOne: "switchingDeviceVv",
    keyTwo: "ratedCurrent",
    inputId: `switchingDeviceVvRatedCurrent`,
  },
  {
    inputType: "number",
    label: "Номинальный ток отключения, кА",
    keyOne: "switchingDeviceVv",
    keyTwo: "ratedBreakingCurrent",
    inputId: `switchingDeviceVvRatedBreakingCurrent`,
  },
  {
    inputType: "number",
    label: "Номинальное напряжение, кВ",
    keyOne: "switchingDeviceVv",
    keyTwo: "ratedVoltage",
    inputId: `switchingDeviceVvRatedVoltage`,
  },
];

export function SwitchingDeviceVv({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  // const { node } = useGetCurrentNode(selectedNodeId);
  // console.log(node);
  const { getNode } = useReactFlow();

  const { projectdId } = useParams();
  const nodeValue = getNode(selectedNodeId as string) as TCell10Kv;
  const typeInpKeys = SwitchingDeviceVvData[0];

  if ("switchingDeviceVv" in nodeValue) {
    nodeValue["switchingDeviceVv"]?.manufacturer;
  }
  return (
    <Accordion type="single" collapsible className={cn("", className)}>
      <AccordionItem value={`accordion-switchingDeviceVv`}>
        <AccordionTrigger className="flex items-center gap-3">
          <div>
            <MyInput
              {...SwitchingDeviceVvData[0]}
              selectedNodeId={selectedNodeId}
              defaultValue={
                nodeValue?.[typeInpKeys.keyOne as keyof TCell10Kv]?.[
                  typeInpKeys.keyTwo
                ]
              }
            />
          </div>
          <ModalComponent
            content={<MyVirtualTable param="swithcingDeviceVv" />}
            // content={<MyVirtualTable />}
            dialogTitle={"ВВ (вакуумные выключатели)"}
            triggerTitle={
              <div className="mt-5 border">
                <BookOpen />
              </div>
            }
            className={cn("")}
          />
        </AccordionTrigger>
        <AccordionContent className="px-4 flex flex-col gap-3">
          {SwitchingDeviceVvData.slice(1).map((item) => (
            <MyInput
              key={item.inputId}
              {...item}
              selectedNodeId={selectedNodeId}
              defaultValue={nodeValue[item.keyOne][item.keyTwo]}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
