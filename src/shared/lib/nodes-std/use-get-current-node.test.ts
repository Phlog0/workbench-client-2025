import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { renderHook } from "@testing-library/react";
import { useGetCurrentNode } from "./use-get-current-node";
import { useBoundStore } from "@/shared/appStore";
import { PossibleNode } from "@/shared/react-flow/nodes/shared";

vi.mock("@/shared/appStore");

describe("useGetCurrentNode", () => {
  const mockNodes = [
    { id: "node-1", type: "Cell10Kv" },
    { id: "node-2", type: "Cell04Kv" },
  ] as PossibleNode[];

  beforeEach(() => {
    vi.clearAllMocks();

    (useBoundStore as unknown as Mock).mockImplementation(selector =>
      selector({ nodes: mockNodes })
    );
  });

  it("Должен вернуть nodes с указанным ID", () => {
    const { result } = renderHook(() => useGetCurrentNode("node-1"));

    expect(result.current).toEqual(mockNodes[0]);
  });
  it("Должен вернуть undefined с несуществующим id", () => {
    const { result } = renderHook(() => useGetCurrentNode("node-1234567"));

    expect(result.current).toBeUndefined();
  });
});
