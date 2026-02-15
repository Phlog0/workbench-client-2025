import { Dispatch, SetStateAction } from "react";
import { D3DragEvent } from "d3-drag";
export type Point = { x: number; y: number; id: number };

export type PointHandler = Dispatch<
  SetStateAction<
    {
      id: number;
      x: number;
      y: number;
    }[]
  >
>;

export type PointDragEvent = D3DragEvent<HTMLDivElement, unknown, unknown>;

export type SectionType = "horizontal" | "vertical";
