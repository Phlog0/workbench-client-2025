import { TTn } from "@/shared/appStore/properties-types";
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

const KEY_1 = "tn";
const LABEL = "ТН (трансформаторы напряжения)";
const voltageTransformerDeviceRData = [
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
    inputType: "text",
    label: "Номинальная трехфазная мощность первой обмотки",
    keyOne: KEY_1,
    keyTwo: "ratedThreePhasePowerOfTheFirstWinding",
    inputId: `${KEY_1}RatedThreePhasePowerOfTheFirstWinding`,
  },
  {
    inputType: "text",
    label: "Класс точности первой вторичной обмотки",
    keyOne: KEY_1,
    keyTwo: "accuracyClassOfTheFirstSecondaryWinding",
    inputId: `${KEY_1}AccuracyClassOfTheFirstSecondaryWinding`,
  },
  {
    inputType: "text",
    label: "Номинальная трехфазная мощность второй вторичной обмотки",
    keyOne: KEY_1,
    keyTwo: "ratedThreePhasePowerOfTheSecondSecondaryWinding",
    inputId: `${KEY_1}RatedThreePhasePowerOfTheSecondSecondaryWinding`,
  },
  {
    inputType: "text",
    label: "Класс точности второй вторичной обмотки",
    keyOne: KEY_1,
    keyTwo: "accuracyClassOfTheSecondSecondaryWinding",
    inputId: `${KEY_1}AccuracyClassOfTheSecondSecondaryWinding`,
  },
  {
    inputType: "text",
    label: "Номинальная трехфазная мощность дополнительной вторичной обмотки",
    keyOne: KEY_1,
    keyTwo: "ratedThreePhasePowerOfAadditionalSecondaryWinding",
    inputId: `${KEY_1}RatedThreePhasePowerOfAadditionalSecondaryWinding`,
  },
  {
    inputType: "text",
    label: "Класс точности дополнительной вторичной обмотки",
    keyOne: KEY_1,
    keyTwo: "accuracyClassOfSecondaryReturnWires",
    inputId: `${KEY_1}AccuracyClassOfSecondaryReturnWires`,
  },
  {
    inputType: "text",
    label: "Номинальное линейное напряжение на выводах первичной обмотки",
    keyOne: KEY_1,
    keyTwo: "ratedLineVoltageAtTheTerminalsOfThePrimaryWinding",
    inputId: `${KEY_1}RatedLineVoltageAtTheTerminalsOfThePrimaryWinding`,
  },
];

export function VoltageTransformerDevice({
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
  const typeInpKeys = voltageTransformerDeviceRData[0];

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
                nodeValue?.[KEY_1]?.[typeInpKeys.keyTwo as keyof TTn]
              }
              selectedNodeId={selectedNodeId}
            />
            {voltageTransformerDeviceRData.slice(1).map((item) => (
              <MyInput
                key={item.inputId}
                {...item}
                selectedNodeId={selectedNodeId}
                defaultValue={nodeValue?.[KEY_1]?.[item.keyTwo as keyof TTn]}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
