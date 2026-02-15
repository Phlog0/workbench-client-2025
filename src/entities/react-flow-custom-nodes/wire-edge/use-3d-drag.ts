// Создай отдельный хук useD3Drag.ts
import { drag, D3DragEvent } from "d3-drag";
import { select, Selection } from "d3-selection";
import { useEffect, RefObject } from "react";

export function useD3Drag<T extends Element>(
  ref: RefObject<T>,
  callbacks: {
    onDrag?: (event: { dx: number; dy: number }) => void;
    onStart?: () => void;
    onEnd?: () => void;
  },
) {
  useEffect(() => {
    if (!ref.current) return;

    const selection: Selection<T, unknown, HTMLElement, any> = select(ref.current);

    const dragBehavior = drag<T, unknown>()
      .on("start", () => callbacks.onStart?.())
      .on("drag", (event: D3DragEvent<T, unknown, unknown>) => {
        callbacks.onDrag?.({ dx: event.dx, dy: event.dy });
      })
      .on("end", () => callbacks.onEnd?.());

    selection.call(dragBehavior);

    return () => {
      selection.on(".drag", null);
    };
  }, [ref, callbacks]);
}

// useD3Drag(edgeRef, {
//   onDrag: (event) => dragEdge({ event, /* ... */ }),
// });
