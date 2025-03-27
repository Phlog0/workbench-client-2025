import { BookOpen } from "lucide-react";
import { ModalComponent } from "./modal-component";
import { MyInput } from "./MyInput";
import { MyVirtualTable } from "./MyVirtualTable";
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
  selectedNodeId: string;
  LABEL: string;
};
export function FirstInput({
  KEY_1,
  LABEL,
  data,
  defaultValue,
  selectedNodeId,
}: FirstInputProps) {
  return (
    <div className="flex">
      <div className="flex-1">
        <MyInput
          {...data}
          selectedNodeId={selectedNodeId}
          defaultValue={defaultValue}
        />
      </div>

      <ModalComponent
        content={<MyVirtualTable param={KEY_1} />}
        dialogTitle={LABEL}
        triggerTitle={<BookOpen className="mt-4" />}
      />
    </div>
  );
}
