import { useBoundStore } from "@/shared/appStore";
import { useState } from "react";
import { CACHE_KEYS, queryClient } from "@/shared/api";
import { APP_ROUTES } from "@/shared/constants";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/shared/ui";
import { WidgetSpinner } from "@/shared/ui/spinners";
import { DoorClosed } from "lucide-react";
export function ExitProjectButton() {
  const [isExiting, setIsExiting] = useState(false);
  const { projectId } = useParams();
  const navigate = useNavigate();
  const resetState = useBoundStore(state => state.resetState);
  const isSyncing = useBoundStore(state => state.isSyncing);
  const exitProject = async (sync?: boolean) => {
    setIsExiting(true);
    const currentIsSyncing = useBoundStore.getState().isSyncing;
    await new Promise(resolve => {
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
      <Button onClick={() => exitProject(isSyncing)}>
        <DoorClosed />
        Проекты
        {/* <NavLink to={ROUTES.PROJECTS_LIST}>Проекты</NavLink> */}
      </Button>
    </>
  );
}
