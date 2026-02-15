import { useBoundStore } from "@/shared/appStore";
import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { Mock } from "vitest";

export function useBoundStoreMockImplementation(nodes: PossibleNode[]) {
  (useBoundStore as unknown as Mock).mockImplementation((selector) => selector({ nodes }));
}
