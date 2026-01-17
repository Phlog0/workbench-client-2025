import { ChangeThemeButton } from "@/entities/change-theme";
import { cn } from "@/shared/lib/cn";
import { RemoveReactFlowNodeButton, OpenModalPropertiesButton } from "@/features";
import { useBoundStore } from "@/shared/appStore";
import { Button } from "@/shared/ui";
import { useNavigate, useParams } from "react-router-dom";
import { APP_ROUTES } from "@/shared/constants";
import { CACHE_KEYS, queryClient } from "@/shared/api";
import { useState } from "react";
import { Spinner, WidgetSpinner } from "@/shared/ui/spinners";

export function ProjectHeaderTools({ className }: { className?: string }) {
  const isSyncing = useBoundStore((state) => state.isSyncing);
  const resetState = useBoundStore((state) => state.resetState);
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const exitProject = async (sync?: boolean) => {
    setIsExiting(true);
    const currentIsSyncing = useBoundStore.getState().isSyncing;
    await new Promise((resolve) => {
      if (!currentIsSyncing || !sync) {
        resolve(true);
      } else {
        setTimeout(() => exitProject(currentIsSyncing), 100);
      }
    });

    queryClient.resetQueries({ queryKey: [CACHE_KEYS.PROJECT_SCHEME, `${projectId}`] });
    navigate(APP_ROUTES.PROJECTS_LIST);
    resetState();
    setIsExiting(false);
  };

  return (
    <>
      {isExiting && <WidgetSpinner />}
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
        <Button onClick={() => exitProject(isSyncing)}>
          Проекты
          {/* <NavLink to={ROUTES.PROJECTS_LIST}>Проекты</NavLink> */}
        </Button>
        {isSyncing && (
          <div className="ml-auto">
            <Spinner size={"small"} animate={isSyncing === true ? "spin" : "none"} />
          </div>
        )}
      </header>
    </>
  );
}
