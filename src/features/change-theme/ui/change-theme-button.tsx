import { getThemeSelector } from "@/shared/appStore/my-selectors";
import useStore from "@/shared/appStore/store";
import { cn } from "@/shared/lib/react-std";
import { Button } from "@/shared/ui";
import { Moon, Sun } from "lucide-react";

export function ChangeThemeButton({ className }: { className?: string }) {
  const projectTheme = useStore(getThemeSelector);
  const changeProjectTheme = useStore((state) => state.changeProjectTheme);
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
