import { X } from "lucide-react";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib";

export function ClearButton({ onClick, className }: { onClick: VoidFunction; className?: string }) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "absolute right-4 top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 active:-translate-y-1/3",
        className
      )}
    >
      <X />
    </Button>
  );
}
