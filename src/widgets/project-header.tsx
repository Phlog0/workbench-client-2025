import {
  ChangeThemeButton,
  OpenModalPropertiesButton,
  RemoveReactFlowNodeButton,
} from "@/features";
import { cn } from "@/shared/lib/react-std";

export function ProjectHeader({ className }: { className?: string }) {
  
  return (
    <header
      className={cn(
        "project-header outline-1 outline-double",
        "flex items-center gap-3 px-4",
        "dark:bg-slate-800",
        className
      )}
    >
      <ChangeThemeButton className="max-h-full" />
      <OpenModalPropertiesButton />
      <RemoveReactFlowNodeButton />
    </header>
  );
}
