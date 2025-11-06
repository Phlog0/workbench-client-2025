import { useBoundStore } from "@/shared/appStore";
import { ElectricityVoltage, ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";

export function useGetLastFixator(
  fixatorContainerId: ReactFlowNodeId,
  fixatorVoltage: ElectricityVoltage,
) {
  const nodes = useBoundStore((state) => state.nodes);
  const fixators = nodes.filter(
    (item) => item.type === `Fixator${fixatorVoltage}Kv` && item.parentId === fixatorContainerId,
  );

  const lastFixator = fixators.reduce((acc, item) => {
    acc = acc.position.x < item.position.x ? item : acc;
    return acc;
  }, fixators[0]);

  return { lastFixatorId: lastFixator?.id };
}
