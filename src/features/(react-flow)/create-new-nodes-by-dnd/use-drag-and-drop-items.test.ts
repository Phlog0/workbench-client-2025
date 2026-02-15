import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useReactFlow } from "@xyflow/react";
import { useDragAndDropItems } from "./use-drag-and-drop-items";
import { useBoundStore } from "@/shared/appStore";
import { useDnD } from "@/app/DnDContext";

import { createSection } from "./create-initial-section-node";
import { createCell } from "./create-initial-cell-node";
import { createPowerTransformer1004kv } from "./create-initial-power-transformer1004kv-node";
import { createPowerTransformer3510kv } from "./create-initial-power-transformer3510kv-node";

vi.mock("@xyflow/react");
vi.mock("@/shared/appStore", () => ({
  useBoundStore: vi.fn(),
}));
vi.mock("@/app/DnDContext");
vi.mock("./create-initial-section-node");
vi.mock("./create-initial-cell-node");
vi.mock("./create-initial-power-transformer1004kv-node");
vi.mock("./create-initial-power-transformer3510kv-node");

describe("useDragAndDropItems", () => {
  const mockScreenToFlowPosition = vi.fn();
  const mockAddNode = vi.fn();
  const mockSetNodes = vi.fn();
  const mockSetType = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    // Настройка моков
    (useReactFlow as any).mockImplementation(() => ({
      screenToFlowPosition: mockScreenToFlowPosition,
    }));

    (useBoundStore as any).mockReturnValue({
      addNode: mockAddNode,
      setNodes: mockSetNodes,
    });
    // (useBoundStore as any).mockImplementation((selector) =>
    //   selector({
    //     addNode: mockAddNode,
    //     setNodes: mockSetNodes,
    //   }),
    // );
    (useDnD as any).mockImplementation(() => ({
      type: null,
      setType: mockSetType,
    }));

    // Моки для фабричных функций
    (createCell as any).mockReturnValue({ id: "mocked-cell", type: "Cell" });
    (createSection as any).mockReturnValue([{ id: "mocked-section", type: "Section" }]);
    (createPowerTransformer1004kv as any).mockReturnValue({
      id: "mocked-transformer-1004",
      type: "PowerTransformer",
    });
    (createPowerTransformer3510kv as any).mockReturnValue({
      id: "mocked-transformer-3510",
      type: "PowerTransformer",
    });
  });

  describe("onDragOver", () => {
    it('должен предотвращать поведение по умолчанию и устанавливать dropEffect в "move"', () => {
      const { result } = renderHook(() => useDragAndDropItems());

      const mockEvent = {
        preventDefault: vi.fn(),
        dataTransfer: { dropEffect: "" },
      } as any;

      act(() => {
        result.current.onDragOver(mockEvent);
      });

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.dataTransfer.dropEffect).toBe("move");
    });
  });

  describe("onReactFlowDrop", () => {
    it("должен обрабатывать drop для Cell10Kv", () => {
      (useDnD as any).mockReturnValue({
        type: "Cell10Kv",
        setType: mockSetType,
      });

      const { result } = renderHook(() => useDragAndDropItems());

      const mockEvent = {
        preventDefault: vi.fn(),
        clientX: 100,
        clientY: 200,
      } as any;

      act(() => {
        result.current.onReactFlowDrop(mockEvent);
      });

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(createCell).toHaveBeenCalledWith({
        event: mockEvent,
        screenToFlowPosition: mockScreenToFlowPosition,
        cellVoltage: "10",
      });
      expect(mockAddNode).toHaveBeenCalled();
      expect(mockSetType).toHaveBeenCalledWith(null);
    });

    it("должен обрабатывать drop для Section10Kv", () => {
      (useDnD as any).mockReturnValue({
        type: "Section10Kv",
        setType: mockSetType,
      });

      const { result } = renderHook(() => useDragAndDropItems());

      const mockEvent = {
        preventDefault: vi.fn(),
        clientX: 100,
        clientY: 200,
      } as any;

      act(() => {
        result.current.onReactFlowDrop(mockEvent);
      });

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(createSection).toHaveBeenCalledWith({
        event: mockEvent,
        screenToFlowPosition: mockScreenToFlowPosition,
        sectionVoltage: "10",
      });
      expect(mockSetNodes).toHaveBeenCalled();
      expect(mockSetType).toHaveBeenCalledWith(null);
    });

    //     it("должен обрабатывать drop для PowerTransformer1004Kv", () => {
    //       (useDnD as any).mockReturnValue({
    //         type: "PowerTransformer1004Kv",
    //         setType: mockSetType,
    //       });

    //       const { result } = renderHook(() => useDragAndDropItems());

    //       const mockEvent = {
    //         preventDefault: vi.fn(),
    //         clientX: 100,
    //         clientY: 200,
    //       } as any;

    //       act(() => {
    //         result.current.onReactFlowDrop(mockEvent);
    //       });

    //       expect(mockEvent.preventDefault).toHaveBeenCalled();
    //       expect(createPowerTransformer1004kv).toHaveBeenCalledWith({
    //         event: mockEvent,
    //         screenToFlowPosition: mockScreenToFlowPosition,
    //       });
    //       expect(mockAddNode).toHaveBeenCalled();
    //       expect(mockSetType).toHaveBeenCalledWith(null);
    //     });

    //     it("должен обрабатывать drop для Cell04Kv", () => {
    //       (useDnD as any).mockReturnValue({
    //         type: "Cell04Kv",
    //         setType: mockSetType,
    //       });

    //       const { result } = renderHook(() => useDragAndDropItems());

    //       const mockEvent = {
    //         preventDefault: vi.fn(),
    //         clientX: 100,
    //         clientY: 200,
    //       } as any;

    //       act(() => {
    //         result.current.onReactFlowDrop(mockEvent);
    //       });

    //       expect(createCell).toHaveBeenCalledWith({
    //         event: mockEvent,
    //         screenToFlowPosition: mockScreenToFlowPosition,
    //         cellVoltage: "04",
    //       });
    //       expect(mockAddNode).toHaveBeenCalled();
    //     });

    //     it("должен ничего не делать, если type равен null", () => {
    //       (useDnD as any).mockReturnValue({
    //         type: null,
    //         setType: mockSetType,
    //       });

    //       const { result } = renderHook(() => useDragAndDropItems());

    //       const mockEvent = {
    //         preventDefault: vi.fn(),
    //         clientX: 100,
    //         clientY: 200,
    //       } as any;

    //       act(() => {
    //         result.current.onReactFlowDrop(mockEvent);
    //       });

    //       expect(mockEvent.preventDefault).toHaveBeenCalled();
    //       expect(createCell).not.toHaveBeenCalled();
    //       expect(createSection).not.toHaveBeenCalled();
    //       expect(mockAddNode).not.toHaveBeenCalled();
    //       expect(mockSetType).not.toHaveBeenCalled();
    //     });

    //   describe("возвращаемые значения", () => {
    //     it("должен возвращать объект с onDragOver и onReactFlowDrop", () => {
    //       const { result } = renderHook(() => useDragAndDropItems());

    //       expect(result.current).toHaveProperty("onDragOver");
    //       expect(result.current).toHaveProperty("onReactFlowDrop");
    //       expect(typeof result.current.onDragOver).toBe("function");
    //       expect(typeof result.current.onReactFlowDrop).toBe("function");
    //     });
  });
});
