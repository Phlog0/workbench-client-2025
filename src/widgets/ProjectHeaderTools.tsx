import { ChangeThemeButton } from "@/entities/change-theme";
import { cn } from "@/shared/lib/cn";
import { RemoveReactFlowNodeButton, OpenModalPropertiesButton } from "@/features";
import { useBoundStore } from "@/shared/appStore";
import { Button, Spinner } from "@/shared/ui";
import { NavLink } from "react-router-dom";
import { ROUTES } from "@/shared/constants";

export function ProjectHeaderTools({ className }: { className?: string }) {
  const isSyncing = useBoundStore((state) => state.isSyncing);

  const handleClick = () => {
    // if (projectId) {
    //   queryClient.invalidateQueries({ queryKey: [CACHE_KEYS.PROJECT_SCHEME] });
    // }
    // setSelectedNodeId([], setDisabledFetch:true);
  };
  return (
    <header
      className={cn(
        "project-header outline-1 outline-double",
        "flex items-center gap-3 px-16",
        "dark:bg-slate-800",
        className,
      )}
    >
      <ChangeThemeButton className="max-h-full" />
      <OpenModalPropertiesButton />
      <RemoveReactFlowNodeButton />
      <Button asChild onClick={handleClick}>
        <NavLink to={ROUTES.PROJECTS_LIST}>Проекты</NavLink>
      </Button>
      {isSyncing && (
        <div className="ml-auto">
          <Spinner size={"small"} animate={isSyncing === true ? "spin" : "none"} />
        </div>
      )}
    </header>
  );
}
