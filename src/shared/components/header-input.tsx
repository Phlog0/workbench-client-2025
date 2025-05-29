import { BookOpen } from "lucide-react";
import { ModalComponent } from "./modal-component";
import { UiInput } from "./ui-input";
import { VirtualizedTable } from "./virtualized-table";
import { TtCount } from "@/features/properties-cell-10kv/measuring-current-transformers/type-of-measuring-current-transformers-device";
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
export function HeaderInput({
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
        <UiInput {...data} selectedNodeId={selectedNodeId} defaultValue={defaultValue} />
      </div>

      <ModalComponent
        content={<VirtualizedTable key_1={KEY_1} param={`${KEY_1}/${ttCount}`} />}
        dialogTitle={LABEL}
        triggerTitle={<BookOpen className="mt-4" />}
      />
    </div>
  );
}
