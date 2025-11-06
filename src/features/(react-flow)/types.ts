import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { Rect } from "@xyflow/react";

export type ReactMouseEvent = React.MouseEvent<Element, MouseEvent>;
export type TGetIntersectingNodes = (
  node:
    | PossibleNode
    | Rect
    | {
        id: PossibleNode["id"];
      },
  partially?: boolean,
  nodes?: PossibleNode[] | undefined,
) => PossibleNode[];
