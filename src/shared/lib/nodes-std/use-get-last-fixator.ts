import { useBoundStore } from "@/shared/appStore";
import { ElectricityVoltage, ReactFlowNodeId } from "@/shared/react-flow/nodes";

export function useGetLastFixator(
  fixatorContainerId: ReactFlowNodeId,
  fixatorVoltage: ElectricityVoltage,
) {
  const nodes = useBoundStore((state) => state.nodes);
  const fixators = nodes.filter(
    (item) => item.type === `Fixator${fixatorVoltage}Kv` && item.parentId === fixatorContainerId,
  );

  const lastFixator = fixators.reduce((acc, item, index, array) => {
    acc = acc.position.x < item.position.x ? item : acc;
    return acc;
  }, fixators[0]);

  return { lastFixatorId: lastFixator?.id };
}
