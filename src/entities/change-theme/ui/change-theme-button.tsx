import { useBoundStore } from "@/shared/appStore";
import { getThemeSelector } from "@/shared/appStore/slices/selectors";

import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { Moon, Sun } from "lucide-react";

export function ChangeThemeButton({ className }: { className?: string }) {
  const projectTheme = useBoundStore(getThemeSelector);
  const changeProjectTheme = useBoundStore((state) => state.changeProjectTheme);
  const handleClick = () => {
    if (projectTheme === "light") {
      changeProjectTheme("dark");
    } else {
      changeProjectTheme("light");
    }
  };
  return (
    <Button onClick={handleClick} className={cn(className)}>
      {projectTheme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}
