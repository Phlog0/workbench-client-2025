import { BookOpen } from "lucide-react";
import { ModalComponent } from "./modal-component";
import { MyInput } from "./MyInput";
import { MyVirtualTable } from "./MyVirtualTable";
import { TtCount } from "@/features/properties-cell-10kv/measuring-current-transformers/is-there-measuring-current-transformers-device";
type FirstInputProps = {
  KEY_1: string;
  ttCount?: TtCount;
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
  ttCount = "",
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
        content={<MyVirtualTable param={`${KEY_1}/${ttCount}`} />}
        dialogTitle={LABEL}
        triggerTitle={<BookOpen className="mt-4" />}
      />
    </div>
  );
}
