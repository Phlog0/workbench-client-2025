import { ProjectPropertySelect } from "@/entities/project-property";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import {
  RATED_CURRENT_OF_THE_MAIN_CIRCUITS_KEY_1,
  RATED_CURRENT_OF_THE_MAIN_CIRCUITS_LABEL,
  RATED_CURRENT_OF_THE_MAIN_CIRCUITS_OPTIONS,
} from "@/shared/react-flow/nodes/cells/cell-35kv/options";
import { TRatedCurrentOfTheMainCircuitsOptions } from "@/shared/react-flow/nodes/cells/cell-35kv/types";

export function RatedCurrentOfTheMainCircuits({
  className,
  selectedNodeId,
  value,
}: {
  className?: string;
  selectedNodeId: ReactFlowNodeId;
  value?: TRatedCurrentOfTheMainCircuitsOptions;
}) {
  return (
    <ProjectPropertySelect
      options={RATED_CURRENT_OF_THE_MAIN_CIRCUITS_OPTIONS}
      className={className}
      key1={RATED_CURRENT_OF_THE_MAIN_CIRCUITS_KEY_1}
      label={RATED_CURRENT_OF_THE_MAIN_CIRCUITS_LABEL}
      selectedNodeId={selectedNodeId}
      valueFromProp={value || RATED_CURRENT_OF_THE_MAIN_CIRCUITS_OPTIONS[0]}
    />
  );
}
