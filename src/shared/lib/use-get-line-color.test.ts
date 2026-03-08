import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useGetLineColor } from "./use-get-line-color";
import { renderHook } from "@testing-library/react";
vi.mock("../appStore", () => ({
  useBoundStore: vi.fn(),
}));

vi.mock("../constants", () => ({ blackLine: "#000000", grayLine: "#808080" }));
import { useBoundStore } from "../appStore";
import { blackLine, grayLine } from "../constants";
describe("useGetLineColor", () => {
  beforeEach(() => vi.clearAllMocks());
  afterEach(() => vi.restoreAllMocks());

  it("Должен возвращать blackLine, если тема light", () => {
    vi.mocked(useBoundStore).mockImplementation(selector =>
      selector({
        projectTheme: "light",
      } as any)
    );

    const { result } = renderHook(() => useGetLineColor());

    expect(result.current).toBe(blackLine);
    expect(result.current).toBe("#000000");
  });
  it("Должен возвращать grayLine, если тема dark", () => {
    vi.mocked(useBoundStore).mockImplementation(selector =>
      selector({
        projectTheme: "dark",
      } as any)
    );

    const { result } = renderHook(() => useGetLineColor());

    expect(result.current).toBe(grayLine);
    expect(result.current).toBe("#808080");
  });

  it("Должен пересчитываться, если тема изменилась", () => {
    let mockState = { projectTheme: "light" };

    vi.mocked(useBoundStore).mockImplementation(selector => selector(mockState as any));
    const { result, rerender } = renderHook(() => useGetLineColor());
    expect(result.current).toBe(blackLine);
    expect(result.current).toBe("#000000");

    mockState = { projectTheme: "dark" };
    rerender();
    expect(result.current).toBe(grayLine);
    expect(result.current).toBe("#808080");
  });
});
