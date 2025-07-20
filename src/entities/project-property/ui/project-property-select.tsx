import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Label } from "shared/ui";

import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/appStore/slices/types";

type ProjectPropertySelectProps = {
  label?: string;
  valueFromProp: string;

  options: readonly string[];
  q?: string;
  key1: string | number;
  selectedNodeId: ReactFlowNodeId;
};

export const ProjectPropertySelect = ({
  label,
  valueFromProp,
  options,

  // !!!
  key1,
  selectedNodeId,
}: ProjectPropertySelectProps) => {
  const changeSelectPropery = useBoundStore((state) => state.changeSelectPropery);
  const handleChange = (value: string) => {
    changeSelectPropery({ nodeId: selectedNodeId, key1, value });
  };

  return (
    <div>
      <Label>{label}</Label>
      <Select
        data-id={key1}
        // defaultValue={value}
        value={valueFromProp}
        onValueChange={(value) => handleChange(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
