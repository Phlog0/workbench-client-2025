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
      style={{
        backgroundColor: "none",
        border: "none",
        width: "16px",
        height: "16px",
      }}
    >
      <div
        className={cn("w-4 h-4 border-black border-2 bg-white rounded-full top-0 left-0 absolute", {
          "bg-green-500": connectionToHandleId === id && connection.isValid === true,
          "bg-red-500": connectionToHandleId === id && connection.isValid === false,
        })}
      />
    </Handle>
  );
});
