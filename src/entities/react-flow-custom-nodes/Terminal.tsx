import { cn } from "@/shared/lib";
import { PossibleNode } from "@/shared/react-flow/nodes";
import {
  BaseEdge,
  EdgeProps,
  getSmoothStepPath,
  Handle,
  HandleProps,
  useConnection,
} from "@xyflow/react";
import { memo } from "react";

export const Terminal = memo(
  ({
    id,
    type,
    position,
    validNodeType,
  }: HandleProps & {
    validNodeType: string;
  }) => {
    //
    // let valid = "bg-black";
    // if (connection.toHandle?.id === props.id && connection.isValid === true) {
    //   valid = "bg-green-600";
    // }
    // if (connection.toHandle?.id !== props.id && connection.isValid === true) {
    //   valid = "bg-red-600";
    // }
    const connection = useConnection<PossibleNode>();
    const connectionToHandleId = connection.toHandle?.id;
    const connectionFromHandleId = connection.fromHandle?.id;
    const inProgress = connection.inProgress;
    const isValidNodeType = connection.fromNode?.type === validNodeType;
    console.log({ connectionToHandleId, connectionFromHandleId });
    return (
      <Handle
        id={id}
        type={type}
        position={position}
        className={cn("w-4 h-4 border-black bg-white", {
          "bg-green-500":
            (connectionToHandleId === id && isValidNodeType && inProgress) ||
            (id === connectionFromHandleId && inProgress) ||
            (connectionToHandleId === connectionFromHandleId &&
              connectionFromHandleId === id &&
              inProgress),
          "bg-red-500":
            connectionToHandleId === id &&
            id !== connectionFromHandleId &&
            inProgress &&
            (type === "source" || !isValidNodeType),
        })}
      />
    );
  },
);
