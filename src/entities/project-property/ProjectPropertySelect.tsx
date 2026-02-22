import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Label } from "shared/ui";

import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { cn } from "@/shared/lib";
import { memo } from "react";

type ProjectPropertySelectProps = {
  label?: string;
  valueFromProp?: number | string | "Нет" | "Не выбрано";

  options: readonly string[] | readonly number[] | readonly (string | number)[];
  q?: string;
  key1: string;
  selectedNodeId: ReactFlowNodeId;
  className?: string;
};

export const ProjectPropertySelect = memo(function ({
  label,
  valueFromProp,
  options,
  key1,
  selectedNodeId,
  className,
}: ProjectPropertySelectProps) {
  const changeSelectPropery = useBoundStore(state => state.changeSelectPropery);
  const handleChange = (value: string) => {
    const parsedValue = Number(value) ? Number(value) : value;
    changeSelectPropery({ nodeId: selectedNodeId, key1, value: parsedValue });
  };

  return (
    <div
      className={cn(
        {
          "bg-yellow-200 border-yellow-400": valueFromProp === "Не выбрано",
        },
        className
      )}
    >
      <Label>{label}</Label>
      <Select
        data-id={key1}
        // defaultValue={value}
        value={String(valueFromProp)}
        onValueChange={value => handleChange(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {options?.map(opt => (
            <SelectItem
              key={opt}
              value={String(opt)}
            >
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
});
