import { BookOpen } from "lucide-react";

import { ProjectPropertyInput } from "@/entities/project-property";

// ! нарушение FSD
import { VirtualizedTable } from "@/entities/virtualized-table";
import { ModalComponent } from "@/shared/ui";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes";

type FirstInputProps = {
  KEY_1: string;
  data: {
    inputType: string;
    label: string;
    keyOne: string;
    keyTwo: string;
    inputId: string;
  };
  defaultValue?: string | number;
  selectedNodeId: ReactFlowNodeId;
  LABEL: string;
  param?: string;
};
export function ProjectHeaderInput({
  KEY_1,
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
