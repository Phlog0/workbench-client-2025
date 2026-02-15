import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { renderHook } from "@testing-library/react";
vi.mock("@/shared/appStore");
import { useGetLastFixator } from "./use-get-last-fixator";
import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { useBoundStore } from "@/shared/appStore";
import { useBoundStoreMockImplementation } from "../test-lib";

describe("useGetLastFixator", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("Правильно найдет id последнего фиксатора (по координатам)", () => {
    const mockNodes: PossibleNode[] = [
      {
        id: "fixator-container-3a2ed9b7-1fd4-418b-976e-31622f648435",
        parentId: "section-10-kv-ab0e679b-8bc5-47ab-9a36-383a9fe499b8",
        type: "FixatorContainer",
        data: { width: 900 },
        position: { x: 250, y: 0 },
        deletable: false,
        draggable: false,
        selectable: false,
      },
      {
        id: "fixator-10-kv-85661893-f59c-4241-bc75-e7e944248dcd",
        data: {},
        parentId: "fixator-container-3a2ed9b7-1fd4-418b-976e-31622f648435",
        position: { y: 0, x: -8 },
        type: "Fixator10Kv",
        draggable: false,
        deletable: false,
        selectable: false,
        measured: { width: 16, height: 16 },
      },
      {
        id: "fixator-10-kv-e0cd5e88-4025-4fef-b3c2-8507968dbfd4",
        data: {},
        parentId: "fixator-container-3a2ed9b7-1fd4-418b-976e-31622f648435",
        position: { y: 0, x: 292 },
        type: "Fixator10Kv",
        draggable: false,
        deletable: false,
        selectable: false,
        measured: { width: 16, height: 16 },
      },
      {
        id: "fixator-10-kv-16b63ac3-ed59-44ad-9cb7-85ee4d90b5e9",
        data: {},
        parentId: "fixator-container-3a2ed9b7-1fd4-418b-976e-31622f648435",
        position: { y: 0, x: 592 },
        type: "Fixator10Kv",
        draggable: false,
        deletable: false,
        selectable: false,
        measured: { width: 16, height: 16 },
      },
      {
        id: "fixator-10-kv-4285a8b4-0749-4474-adb4-136c2cffdda4",
        data: {},
        parentId: "fixator-container-3a2ed9b7-1fd4-418b-976e-31622f648435",
        position: { y: 0, x: 892 },
        type: "Fixator10Kv",
        draggable: false,
        deletable: false,
        selectable: false,
        measured: { width: 16, height: 16 },
      },
    ];
    useBoundStoreMockImplementation(mockNodes);
    const { result } = renderHook(() => useGetLastFixator(mockNodes[0]["id"], "10"));
    expect(result.current).toBe(mockNodes[4]["id"]);
  });

  it("найдет с последний фиксатор, если есть другие контейнеры (FC)", () => {
    const mockNodes: PossibleNode[] = [
      {
        id: "FC-1",
        parentId: "S-10KV",
        type: "FixatorContainer",
        data: { width: 900 },
        position: { x: 250, y: 0 },
        deletable: false,
        draggable: false,
        selectable: false,
      },
      {
        id: "FC-9999999",
        parentId: "S-10KV-9999999",
        type: "FixatorContainer",
        data: { width: 900 },
        position: { x: 250, y: 0 },
        deletable: false,
        draggable: false,
        selectable: false,
      },
      {
        id: "F-10-1",
        data: {},
        parentId: "FC-1",
        position: { y: 0, x: -8 },
        type: "Fixator10Kv",
        draggable: false,
        deletable: false,
        selectable: false,
        measured: { width: 16, height: 16 },
      },
      {
        id: "F-10-99",
        data: {},
        parentId: "FC-1",
        position: { y: 0, x: 99 },
        type: "Fixator10Kv",
        draggable: false,
        deletable: false,
        selectable: false,
        measured: { width: 16, height: 16 },
      },
      {
        id: "F-10-9999999",
        data: {},
        parentId: "FC-9999999",
        position: { y: 0, x: 9999999 },
        type: "Fixator10Kv",
        draggable: false,
        deletable: false,
        selectable: false,
        measured: { width: 16, height: 16 },
      },
    ];
    useBoundStoreMockImplementation(mockNodes);
    const { result } = renderHook(() => useGetLastFixator(mockNodes[0]["id"], "10"));
    expect(result.current).toBe(mockNodes[3]["id"]);
  });
  it("найдет с последний фиксатор, даже если он единственный", () => {
    const mockNodes: PossibleNode[] = [
      {
        id: "FC-1",
        parentId: "S-10KV",
        type: "FixatorContainer",
        data: { width: 900 },
        position: { x: 250, y: 0 },
        deletable: false,
        draggable: false,
        selectable: false,
      },

      {
        id: "F-10-1",
        data: {},
        parentId: "FC-1",
        position: { y: 0, x: -8 },
        type: "Fixator10Kv",
        draggable: false,
        deletable: false,
        selectable: false,
        measured: { width: 16, height: 16 },
      },
    ];
    (useBoundStore as unknown as Mock).mockImplementation((selector) =>
      selector({ nodes: mockNodes }),
    );
    const { result } = renderHook(() => useGetLastFixator(mockNodes[0]["id"], "10"));
    expect(result.current).toBe(mockNodes[1]["id"]);
  });
  it("Есть fixator-container, но нет самих фиксатров - хук вернет undefined", () => {
    const mockNodes: PossibleNode[] = [
      {
        id: "FC-1",
        parentId: "S-10KV",
        type: "FixatorContainer",
        data: { width: 900 },
        position: { x: 250, y: 0 },
        deletable: false,
        draggable: false,
        selectable: false,
      },
    ];
    useBoundStoreMockImplementation(mockNodes);
    const { result } = renderHook(() => useGetLastFixator(mockNodes[0]["id"], "10"));
    expect(result.current).toBeUndefined();
  });
});
