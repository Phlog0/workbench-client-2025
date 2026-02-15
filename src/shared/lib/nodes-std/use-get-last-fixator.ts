import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { ElectricityVoltage } from "@/shared/react-flow/nodes/shared/type-of-voltage";

export function useGetLastFixator(
  fixatorContainerId: ReactFlowNodeId,
  fixatorVoltage: ElectricityVoltage,
): string | undefined {
  const nodes = useBoundStore((state) => state.nodes);
  if (!nodes.length) {
    throw new Error("Пустой массив Nodes");
  }
  const fixators = nodes.filter(
    (item) => item.type === `Fixator${fixatorVoltage}Kv` && item.parentId === fixatorContainerId,
  );

  const lastFixator = fixators.length
    ? fixators.reduce((acc, item) => {
        acc = acc.position.x < item.position.x ? item : acc;
        return acc;
      }, fixators[0])
    : undefined;

  return lastFixator?.id;
}
