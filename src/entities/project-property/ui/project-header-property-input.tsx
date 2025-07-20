import { BookOpen } from "lucide-react";

import { ProjectPropertyInput } from "@/entities/project-property";

// ! нарушение FSD
import { VirtualizedTable } from "@/entities/virtualized-table";
import { ModalComponent } from "@/shared/ui";

type FirstInputProps = {
  KEY_1: string;
  measuringCurrentTransformersDeviceAccuracyClass?: 1 | 2 | 3 | 4;
  data: {
    inputType: string;
    label: string;
    keyOne: string;
    keyTwo: string;
    inputId: string;
  };
  defaultValue?: string | number;
  selectedNodeId: string;
  LABEL: string;
  param?: string;
};
export function ProjectHeaderInput({
  KEY_1,
  measuringCurrentTransformersDeviceAccuracyClass,
  LABEL,
  data,
  defaultValue,
  selectedNodeId,
  param,
}: FirstInputProps) {
  return (
    <div className="flex">
      <div className="flex-1">
        <ProjectPropertyInput {...data} selectedNodeId={selectedNodeId} value={defaultValue} />
      </div>

      <ModalComponent
        content={<VirtualizedTable key_1={KEY_1} param={param || KEY_1} />}
        dialogTitle={LABEL}
        triggerTitle={<BookOpen className="" />}
      />
    </div>
  );
}
