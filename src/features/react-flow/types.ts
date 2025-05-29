import { Node, Rect } from "@xyflow/react";

export type ReactMouseEvent = React.MouseEvent<Element, MouseEvent>
export type TGetIntersectingNodes = (
    node:
        | Node
        | Rect
        | {
            id: Node["id"];
        },
    partially?: boolean,
    nodes?: Node[] | undefined
) => Node[]