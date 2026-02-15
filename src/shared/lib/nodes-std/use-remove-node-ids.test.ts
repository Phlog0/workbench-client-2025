import { describe, expect, Mock, vi, beforeEach, it } from "vitest";
vi.mock("@xyflow/react", () => ({
  useNodes: vi.fn(),
}));

import { useNodes } from "@xyflow/react";
import { renderHook } from "@testing-library/react";
import { useRemoveNodeIds } from "./use-remove-node-ids";
import { PossibleNode } from "@/shared/react-flow/nodes/shared";
describe("useRemoveNodeIds", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("вернёт пустой массив, если нет nodes[]", () => {
    (useNodes as Mock).mockReturnValue([]);
    const { result } = renderHook(() => useRemoveNodeIds());

    expect(typeof result.current).toBe("function");
    expect(result.current([])).toEqual([]);
  });

  it("Вернет всех потомков 1 родителя (1 уровень)", () => {
    const mockNodes: Pick<PossibleNode, "id" | "parentId">[] = [
      { id: "parent1", parentId: undefined },
      { id: "child1", parentId: "parent1" },
      { id: "child2", parentId: "parent1" },
      { id: "other", parentId: undefined },
    ];
    (useNodes as Mock).mockReturnValue(mockNodes);
    const { result } = renderHook(() => useRemoveNodeIds());
    expect(typeof result.current).toBe("function");
    expect(result.current(["parent1"])).toEqual(["child1", "child2"]);
    expect(result.current(["parent1"])).not.toEqual(["other"]);
  });
  it("Вернет всех потомков для нескольких родителей родителей (1 уровень)", () => {
    const mockNodes: Pick<PossibleNode, "id" | "parentId">[] = [
      { id: "parent1", parentId: undefined },
      { id: "child1", parentId: "parent1" },
      { id: "child2", parentId: "parent1" },
      { id: "parent2", parentId: undefined },
      { id: "child3", parentId: "parent2" },
      { id: "child4", parentId: "parent2" },
      { id: "other", parentId: undefined },
    ];
    (useNodes as Mock).mockReturnValue(mockNodes);
    const { result } = renderHook(() => useRemoveNodeIds());
    expect(typeof result.current).toBe("function");
    expect(result.current(["parent1", "parent2"])).toEqual([
      "child1",
      "child2",
      "child3",
      "child4",
    ]);
    expect(result.current(["parent1"])).not.toEqual(["other"]);
  });
  it("Вернет всех потомков для нескольких родителей (любая вложенность)", () => {
    const mockNodes: Pick<PossibleNode, "id" | "parentId">[] = [
      { id: "parent1", parentId: undefined },
      { id: "sub-parent1", parentId: "parent1" },
      { id: "child1", parentId: "sub-parent1" },
      { id: "child2", parentId: "sub-parent1" },
      { id: "parent2", parentId: undefined },
      { id: "child3", parentId: "parent2" },
      { id: "child4", parentId: "parent2" },
      { id: "other", parentId: undefined },
    ];
    (useNodes as Mock).mockReturnValue(mockNodes);
    const { result } = renderHook(() => useRemoveNodeIds());
    expect(typeof result.current).toBe("function");

    expect(result.current(["sub-parent1"])).toEqual(["child1", "child2"]);
    expect(result.current(["parent1", "parent2"])).toEqual([
      "sub-parent1",

      "child3",
      "child4",
      "child1",
      "child2",
    ]);
    expect(result.current(["parent1"])).not.toEqual(["other"]);
  });
});
