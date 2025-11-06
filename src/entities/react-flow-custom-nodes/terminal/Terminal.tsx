import { cn } from "@/shared/lib";
import { PossibleNode } from "@/shared/react-flow/nodes/shared";
import { Handle, HandleProps, useConnection } from "@xyflow/react";
import { memo } from "react";

export const Terminal = memo(({ id, type, position }: HandleProps) => {
  const connection = useConnection<PossibleNode>();

  const connectionToHandleId = connection.toHandle?.id;

  return (
    <Handle
      id={id}
      type={type}
      position={position}
      className={cn("w-4 h-4 border-black bg-white", {
        "bg-green-500": connectionToHandleId === id && connection.isValid === true,
        "bg-red-500": connectionToHandleId === id && connection.isValid === false,
      })}
    />
  );
});
