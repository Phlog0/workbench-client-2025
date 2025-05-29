import { CSSProperties, useEffect, useRef } from "react";
import { ReactFlowState, useStore } from "@xyflow/react";

const canvasStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 10,
  pointerEvents: "none",
};

const storeSelector = (state: ReactFlowState) => ({
  width: state.width,
  height: state.height,
  transform: state.transform,
});

export type HelperLinesProps = {
  horizontal?: number;
  vertical?: number;
};

// a simple component to display the helper lines
// it puts a canvas on top of the React Flow pane and draws the lines using the canvas API
export function HelperLinesRenderer({ horizontal, vertical }: HelperLinesProps) {
  const { width, height, transform } = useStore(storeSelector);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx || !canvas) {
      return;
    }

    // canvas.width = width;
    // canvas.height = height;

    const dpi = window.devicePixelRatio;
    canvas.width = width * dpi;
    canvas.height = height * dpi;
    ctx.scale(dpi, dpi);

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "#FFA500";
    if (typeof vertical === "number") {
      ctx.moveTo(vertical * transform[2] + transform[0], 0);
      ctx.lineTo(vertical * transform[2] + transform[0], height);

      ctx.stroke();
    }
    ctx.strokeStyle = "#d00000";
    if (typeof horizontal === "number") {
      ctx.moveTo(0, horizontal * transform[2] + transform[1]);
      ctx.lineTo(width, horizontal * transform[2] + transform[1]);

      ctx.stroke();
    }
  }, [width, height, transform, horizontal, vertical]);

  return <canvas ref={canvasRef} style={canvasStyle} />;
}
