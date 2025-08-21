import { ProjectPropertySelect } from "@/entities/project-property";

import { GenericInputsWithSelectProps } from "./GenericInputsWithSelectProps";
import { PropsWithChildren } from "react";

export function GenericInputsWithSelect({
  className,
  selectedNodeId,
  selectLabel,
  selectOptions,
  selectValue,
  selectPropertyKey1,

  children,
}: PropsWithChildren<GenericInputsWithSelectProps>) {
  return (
    <div className={className}>
      <ProjectPropertySelect
        key1={selectPropertyKey1}
        label={selectLabel}
        selectedNodeId={selectedNodeId}
        options={selectOptions}
        valueFromProp={selectValue || "Нет"}
      />
      {selectValue !== "Нет" && selectValue !== "Не выбрано" && selectValue && children}
    </div>
  );
}
