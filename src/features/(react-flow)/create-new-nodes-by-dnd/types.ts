import { XYPosition } from "@xyflow/react";

export type CreateEntitiesArguments = {
  event: React.DragEvent<HTMLDivElement>;
  screenToFlowPosition: (
    clientPosition: XYPosition,
    options?: {
      snapToGrid: boolean;
    }
  ) => XYPosition;
};
