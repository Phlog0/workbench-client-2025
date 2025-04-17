import useStore from "@/shared/appStore/store";
import { cn } from "@/shared/lib/react-std";
import { Button } from "@/shared/ui";
import { Minus, Plus } from "lucide-react";

export function ResizeButtons({
  className,
  sectionId,
}: {
  className?: string;
  sectionId: string;
}) {
  const increaseSectionWidth = useStore((state) => state.increaseSectionWidth);

  const handleIncrease = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    increaseSectionWidth({ sectionId });
  };
  return (
    <div className={cn("flex gap-3", className)}>
      <Button onClick={handleIncrease}>
        <Plus />
      </Button>
      <Button>
        <Minus />
      </Button>
    </div>
  );
}
