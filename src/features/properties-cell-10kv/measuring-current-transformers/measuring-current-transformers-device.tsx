import { TMeasuringCurrentTransformersDevice } from "@/shared/appStore/properties-types";
import { TCell10Kv } from "@/shared/appStore/react-flow-types";
import { ModalComponent, MyInput, MyVirtualTable } from "@/shared/components";
import { FirstInput } from "@/shared/components";
import { cn } from "@/shared/lib/react-std";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui";
import { useReactFlow } from "@xyflow/react";
import { useParams } from "react-router-dom";

const KEY_1 = "measuringCurrentTransformersDevice";
const LABEL = "ТТ (Измерительные Трансформаторы Тока)";
const measuringCurrentTransformersDeviceData = [
  {
    inputType: "text",
    label: "Тип",
    keyOne: KEY_1,
    keyTwo: "type",
    inputId: `switchingDeviceRType`,
  },
  {
    inputType: "text",
    label: "Наименование",
    keyOne: KEY_1,
    keyTwo: "title",
    inputId: `switchingDeviceRTitle`,
  },
  {
    inputType: "text",
    label: "Производитель",
    keyOne: KEY_1,
    keyTwo: "manufacturer",
    inputId: `${KEY_1}Manufacturer`,
  },
  {
    inputType: "text",
    label: "Коэффициент трансформации",
    keyOne: KEY_1,
    keyTwo: "transformationRatio",
    inputId: `${KEY_1}TransformationRatio`,
  },
  {
    inputType: "text",
    label: "Класс точности",
    keyOne: KEY_1,
    keyTwo: "accuracyClass",
    inputId: `${KEY_1}AccuracyClass`,
  },
  {
    inputType: "number",
    label: "Односекундный ток термической стойкости, кА",
    keyOne: KEY_1,
    keyTwo: "oneSecondThermalCurrent",
    inputId: `${KEY_1}OneSecondThermalCurrent`,
  },
  {
    inputType: "text",
    label: "Вид обслуживания",
    keyOne: KEY_1,
    keyTwo: "typeOfService",
    inputId: `${KEY_1}TypeOfService`,
  },
];

export function MeasuringCurrentTransformersDevice({
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
  const typeInpKeys = measuringCurrentTransformersDeviceData[0];
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
                nodeValue?.[KEY_1]?.[
                  typeInpKeys.keyTwo as keyof TMeasuringCurrentTransformersDevice
                ]
              }
              selectedNodeId={selectedNodeId}
            />
            {measuringCurrentTransformersDeviceData.slice(1).map((item) => (
              <MyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                defaultValue={
                  nodeValue?.[KEY_1]?.[
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
