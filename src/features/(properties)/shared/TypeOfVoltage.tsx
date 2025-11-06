import { GenericInputsWithSelect } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import {
  TTypeOfVoltage0610Kv,
  TYPE_OF_VOLTAGE_06KV_10KV_KEY_1,
  TYPE_OF_VOLTAGE_06KV_10KV_LABEL,
  TYPE_OF_VOLTAGE_06KV_10KV_OPTIONS,
} from "@/shared/react-flow/nodes/shared/type-of-voltage";

export function TypeOfVoltage({
  className,
  selectedNodeId,
  typeOfVoltageValue,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  typeOfVoltageValue?: TTypeOfVoltage0610Kv;
}) {
  return (
    <GenericInputsWithSelect
      className={className}
      selectOptions={TYPE_OF_VOLTAGE_06KV_10KV_OPTIONS}
      selectPropertyKey1={TYPE_OF_VOLTAGE_06KV_10KV_KEY_1}
      selectLabel={TYPE_OF_VOLTAGE_06KV_10KV_LABEL}
      selectValue={typeOfVoltageValue || "10 кВ"}
      selectedNodeId={selectedNodeId}
    ></GenericInputsWithSelect>
  );
}
