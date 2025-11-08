import { BookOpen } from "lucide-react";

import { ProjectPropertyInput } from "@/entities/project-property";

// ! нарушение FSD
import { VirtualizedTableNEW } from "@/entities/virtualized-table";
import { ModalComponent } from "@/shared/ui";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { useState } from "react";

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
export function ProjectModalInput({
  KEY_1,
  LABEL,
  data,
  defaultValue,
  selectedNodeId,
  param,
}: FirstInputProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex">
      <div className="flex-1">
        <ProjectPropertyInput {...data} selectedNodeId={selectedNodeId} value={defaultValue} />
      </div>

      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        content={
          <VirtualizedTableNEW
            key_1={KEY_1}
            param={param || KEY_1}
            setIsModalOpen={setIsModalOpen}
          />
        }
        dialogTitle={LABEL}
        triggerTitle={<BookOpen className="" />}
      />
    </div>
  );
}
